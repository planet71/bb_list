import { AppConfig } from '../app/config';
import { bookedByCouplesServiceFactory } from './BookedByCouples/bookedByCouplesServiceFactory';

export type Services = ReturnType<typeof setupServices>;
export const setupServices = (appConfig: AppConfig) => {
    const bookedByCouples = bookedByCouplesServiceFactory(appConfig);
    return { bookedByCouples };
};
