import pluralize from 'pluralize';
import React, { FC } from 'react';
import { useFela } from 'react-fela';

import { fontStyles } from '../../fontStyles';

interface NumberOfGuestsProps {
    guests?: number;
}

export const NumberOfGuests: FC<NumberOfGuestsProps> = ({ guests }) => {
    const { css } = useFela();
    return (
        <span className={css(fontStyles.secondary)}>
            {guests
                ? `${guests} ${pluralize('guest', guests)}`
                : 'No guests invited!'}
        </span>
    );
};
