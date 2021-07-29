import React, { FC } from 'react';
import { useFela } from 'react-fela';

import { fontStyles } from '../../fontStyles';

interface ContactProps {
    email: string;
}

export const Contact: FC<ContactProps> = ({ email }) => {
    const { css } = useFela();
    return (
        <a
            href={`mailto: ${email}`}
            title={email}
            className={css(fontStyles.secondary)}
        >
            {email}
        </a>
    );
};
