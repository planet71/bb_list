import React, { FC } from 'react';
import { useFela } from 'react-fela';

import { fontStyles } from '../../fontStyles';
import { bookingProgressStyle } from './bookingProgressStyles';

interface BookingProgressProps {
    completion?: number;
}

export const BookingProgress: FC<BookingProgressProps> = ({ completion }) => {
    const { css } = useFela();
    return (
        <div
            className={css([
                bookingProgressStyle(completion).wrapper,
                fontStyles.secondary,
            ])}
        >{`Checklist completion: ${completion || 0}%`}</div>
    );
};
