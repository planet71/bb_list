import { AxiosRequestConfig } from 'axios';

export interface Ajax {
    get<R>(
        url: string,
        config?: AxiosRequestConfig,
    ): Promise<{ data: R; total: number }>;
}
