import { AxiosInstance } from 'axios';

import { Ajax } from './Ajax';

export class AjaxService implements Ajax {
    constructor(private httpClient: AxiosInstance) {}
    get<R>(url: string) {
        return this.httpClient.get<R>(url).then(({ data, headers }) => ({
            data,
            total: parseInt(headers['x-total-count'], 10),
        }));
    }
}
