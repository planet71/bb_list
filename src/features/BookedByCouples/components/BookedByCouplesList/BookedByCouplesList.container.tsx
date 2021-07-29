import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { fetchBookedByCouplesList } from '../../actions';
import { getBookedByCouplesList } from '../../selectors';
import { BookedByCouplesList as BookedByCouplesListComponent } from './BookedByCouplesList.component';

const initialPageNumber = 1;

export const BookedByCouplesList = () => {
    const list = useAppSelector(getBookedByCouplesList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBookedByCouplesList(initialPageNumber));
    }, [dispatch]);

    return <BookedByCouplesListComponent list={list} />;
};
