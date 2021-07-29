export type AppConfig = typeof appConfig;

export const appConfig = {
    perPage: 10,
    urls: {
        bookedByCouplesService: process.env.REACT_APP_BOOKED_BY_COUPLES_SERVICE,
    },
};
