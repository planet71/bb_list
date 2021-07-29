import React, { FC } from 'react';
import { useFela } from 'react-fela';

import { fontStyles } from '../../fontStyles';

export const Header: FC = () => {
    const { css } = useFela();
    return (
        <>
            <h1>Your bookings</h1>
            <p className={css(fontStyles.secondary)}>
                If a booking is missing, ask your couple to mark your venue as
                booked in the Bridebook app, and they will appear below
                automatically.
            </p>
        </>
    );
};
