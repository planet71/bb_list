export enum DataLoadingState {
    Idle = 'idle',
    Loading = 'loading',
    Error = 'error',
}

export const isLoading = (status: DataLoadingState) =>
    status === DataLoadingState.Loading;
