import { createSlice, isFulfilled, isPending } from '@reduxjs/toolkit';

import { DataLoadingState } from '../../../domain/DataLoadingState';
import { fetchBookedByCouplesList, removeCollaboration } from '../actions';

export interface BookedByCouplesSlice {
    list: string[];
    total: number;
    status: DataLoadingState;
}

const initialState: BookedByCouplesSlice = {
    list: [],
    status: DataLoadingState.Idle,
    total: 0,
};

export const bookedByCouplesSlice = createSlice({
    name: 'bookedByCouples',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchBookedByCouplesList.fulfilled,
                (state, { payload }) => {
                    state.list = payload.data.map(({ id }) => id);
                    state.total = payload.total;
                },
            )
            .addCase(removeCollaboration.fulfilled, (state, { payload }) => {
                state.list = state.list.filter((id) => id !== payload);
                state.total = state.total - 1;
            })
            .addMatcher(isPending(fetchBookedByCouplesList), (state) => {
                state.status = DataLoadingState.Loading;
            })
            .addMatcher(isFulfilled(fetchBookedByCouplesList), (state) => {
                state.status = DataLoadingState.Idle;
            });
    },
});
