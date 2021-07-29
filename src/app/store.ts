import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { bookedByCouplesSlice } from '../features/BookedByCouples/slices/bookedByCouplesSlice';
import { bookedByCouplesDetailsSlice } from '../features/BookedByCouples/slices/bookedByCouplesSliceDetails';
import { collaborationsSlice } from '../features/BookedByCouples/slices/collaborationsSlice';
import { setupServices } from '../services/services';
import { appConfig } from './config';

export const store = configureStore({
    reducer: {
        bookedByCouples: bookedByCouplesSlice.reducer,
        bookedByCouplesDetails: bookedByCouplesDetailsSlice.reducer,
        collaborations: collaborationsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: { extraArgument: setupServices(appConfig) },
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
