import { createSlice, isPending } from '@reduxjs/toolkit';

import { DataLoadingState } from '../../../domain/DataLoadingState';
import {
    fetchBookedByCouplesList,
    removeCollaboration,
    toggleCollaboration,
} from '../actions';

export interface CollaborationsSlice {
    [key: string]: {
        isCollaborating: boolean;
        status: DataLoadingState;
    };
}

const initialState: CollaborationsSlice = {};

export const collaborationsSlice = createSlice({
    name: 'collaborations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(toggleCollaboration.pending, (state, { meta }) => {
                state[meta.arg] = state[meta.arg] || {};
            })
            .addCase(toggleCollaboration.fulfilled, (state, { meta }) => {
                state[meta.arg].status = DataLoadingState.Idle;
                state[meta.arg].isCollaborating =
                    !state[meta.arg].isCollaborating;
            })
            .addCase(
                fetchBookedByCouplesList.fulfilled,
                (state, { payload }) => {
                    payload.data.forEach(({ id, collaborating }) => {
                        state[id] = state[id] || {};
                        state[id].isCollaborating = collaborating;
                    });
                },
            )
            .addCase(removeCollaboration.fulfilled, (state, { payload }) => {
                delete state[payload];
            })
            .addMatcher(
                isPending(removeCollaboration, toggleCollaboration),
                (state, { meta }) => {
                    state[meta.arg].status = DataLoadingState.Loading;
                },
            );
    },
});
