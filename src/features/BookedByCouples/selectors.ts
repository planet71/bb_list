import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { DataLoadingState } from '../../domain/DataLoadingState';

const getId = (state: RootState, id: string) => id;
const getBookedByCouples = (state: RootState) => state.bookedByCouples;
const getBookedByCouplesDetails = (state: RootState) =>
    state.bookedByCouplesDetails;
const getCollaborations = (state: RootState) => state.collaborations;

export const getBookedByCouplesList = createSelector(
    getBookedByCouples,
    ({ list }) => list,
);

const getBookedByCoupleBy = createSelector(
    getBookedByCouplesDetails,
    getId,
    (details, id) => details[id],
);

export const getBookedByCoupleProfilePhoto = createSelector(
    getBookedByCoupleBy,
    ({ profilePhoto }) => profilePhoto,
);

export const getBookedByCoupleWeddingDate = createSelector(
    getBookedByCoupleBy,
    ({ weddingDate }) => weddingDate,
);

export const getBookedByCoupleNumberOfGuests = createSelector(
    getBookedByCoupleBy,
    ({ guestsInitialTarget }) => guestsInitialTarget,
);

export const getBookedByCouplePartners = createSelector(
    getBookedByCoupleBy,
    ({ partners }) => partners,
);

export const getChecklistCompletion = createSelector(
    getBookedByCoupleBy,
    ({ tasksDone, tasksTotal }) =>
        tasksDone && tasksTotal && Math.ceil((tasksDone / tasksTotal) * 100),
);

export const getBookedByCoupleCreationDate = createSelector(
    getBookedByCoupleBy,
    ({ createdAt }) => createdAt,
);

export const getBookedByCoupleFirstUserEmail = createSelector(
    getBookedByCoupleBy,
    ({ emails }) => emails[0],
);

export const getBookedByCouplesTotalItems = createSelector(
    getBookedByCouples,
    ({ total }) => total,
);

const getCollaborationBy = createSelector(
    getCollaborations,
    getId,
    (collaborations, id) => collaborations[id] || {},
);

export const getCollaborationStatus = createSelector(
    getCollaborationBy,
    ({ isCollaborating }) => isCollaborating,
);

export const isCollaborationPending = createSelector(
    getCollaborationBy,
    ({ status }) => status === DataLoadingState.Loading,
);
