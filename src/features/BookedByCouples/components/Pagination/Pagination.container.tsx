import React, { FC, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { Pagination as PaginationComponent } from '../../../../components/Pagination/Pagination';
import { useAppConfig } from '../../../../contexts/appConfig';
import { fetchBookedByCouplesList } from '../../actions';
import { getBookedByCouplesTotalItems } from '../../selectors';

export const Pagination: FC = () => {
    const dispatch = useAppDispatch();
    const pages = useAppSelector(getBookedByCouplesTotalItems);
    const onPageClick = useCallback(
        (page: number) => {
            dispatch(fetchBookedByCouplesList(page));
        },
        [dispatch],
    );
    const perPage = useAppConfig().perPage;

    return (
        <PaginationComponent
            pages={pages}
            perPage={perPage}
            onPageClick={onPageClick}
        />
    );
};
