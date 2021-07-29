import React from 'react';
import { useFela } from 'react-fela';

import { BookedByCouple } from '../BookedByCouple/BookedByCouple.component';
import { bookedByCouplesStyles } from './bookedByCouplesStyles';

interface BookedByCouplesListProps {
    list: string[];
}

export const BookedByCouplesList = ({ list }: BookedByCouplesListProps) => {
    const { css } = useFela();

    return (
        <ol className={css(bookedByCouplesStyles.wrapper)}>
            {list.map((id) => (
                <li key={id} className={css(bookedByCouplesStyles.item)}>
                    <BookedByCouple id={id} />
                </li>
            ))}
        </ol>
    );
};
