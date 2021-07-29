import { createSlice } from '@reduxjs/toolkit';

import { BookedByCouple } from '../../../domain/BookedByCouple';
import { fetchBookedByCouplesList, removeCollaboration } from '../actions';

export interface BookedByCouplesDetailsSlice {
    [key: string]: BookedByCouple;
}

const initialState: BookedByCouplesDetailsSlice = {};

export const bookedByCouplesDetailsSlice = createSlice({
    name: 'bookedByCouplesDetailsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchBookedByCouplesList.fulfilled,
                (state, { payload }) => {
                    payload.data.forEach(
                        ({ collaborating, users, profilePhoto, ...rest }) => {
                            state[rest.id] = {
                                ...rest,
                                emails: users.map(
                                    ({ contacts }) => contacts.email,
                                ),
                                profilePhoto: `${profilePhoto}/${randomizeUrl()}`,
                            };
                        },
                    );
                },
            )
            .addCase(removeCollaboration.fulfilled, (state, { payload }) => {
                delete state[payload];
            });
    },
});

// Just a little function to randomize pictures url. Without it the list seems a bit boring.
const randomizeUrl = () => Math.floor(Math.random() * 1000 + 1);
