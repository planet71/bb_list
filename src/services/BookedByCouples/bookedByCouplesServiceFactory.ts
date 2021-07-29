import { AppConfig } from '../../app/config';
import { ajaxServiceFactory } from '../Ajax/ajaxServiceFactory';
import { BookedByCouplesService } from './BookedByCouplesService';

export const bookedByCouplesServiceFactory = (appConfig: AppConfig) => {
    const httpClient = ajaxServiceFactory();
    return new BookedByCouplesService(httpClient, appConfig);
};
