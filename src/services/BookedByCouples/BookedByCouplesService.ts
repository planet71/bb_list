import { AppConfig } from '../../app/config';
import { AjaxService } from '../Ajax/AjaxService';
import { BookedByCouples, RawBookedByCouple } from './BookedByCouples';

export class BookedByCouplesService implements BookedByCouples {
    constructor(private ajaxService: AjaxService, private config: AppConfig) {}

    get(page: number) {
        return this.ajaxService
            .get<RawBookedByCouple[]>(
                `${this.config.urls.bookedByCouplesService}/bookedByCouples?_page=${page}&_limit=${this.config.perPage}&_sort=collaborating,weddingDate&_order=asc`,
            )
            .catch((e) => {
                throw new Error(
                    `Could not fetch booked by couples items: ${e}`,
                );
            });
    }
}
