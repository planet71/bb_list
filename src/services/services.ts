import axios from 'axios';

import { AppConfig } from '../app/config';
import { AjaxService } from './Ajax/AjaxService';
import { BookedByCouplesService } from './BookedByCouples/BookedByCouplesService';

export type Services = ReturnType<typeof setupServices>;
export const setupServices = (appConfig: AppConfig) => {
    const httpClient = new AjaxService(axios);
    const bookedByCouples = new BookedByCouplesService(httpClient, appConfig);
    return { bookedByCouples };
};
