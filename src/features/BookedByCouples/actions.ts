import { createAsyncThunk } from '@reduxjs/toolkit';

import { RawBookedByCouple } from '../../services/BookedByCouples/BookedByCouples';
import { Services } from '../../services/services';

export const fetchBookedByCouplesList = createAsyncThunk<
    { data: RawBookedByCouple[]; total: number },
    number,
    { extra: Services }
>(
    'fetchBookedByCouplesList',
    async (page, { extra }) => await extra.bookedByCouples.get(page),
);

export const toggleCollaboration = createAsyncThunk<
    string,
    string,
    { extra: Services }
>(
    'toggleCollaboration',
    async (id) =>
        await new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve(id);
            }, 1000);
        }),
);

export const removeCollaboration = createAsyncThunk<
    string,
    string,
    { extra: Services }
>(
    'removeCollaboration',
    async (id) =>
        await new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve(id);
            }, 1000);
        }),
);
