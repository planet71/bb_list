import { formatDistanceToNowStrict } from 'date-fns';
import React, { FC } from 'react';
import { useFela } from 'react-fela';

import { fontStyles } from '../../fontStyles';

interface CreationDateProps {
    creationDate: number;
}

export const CreationDate: FC<CreationDateProps> = ({ creationDate }) => {
    const { css } = useFela();
    return (
        <span className={css(fontStyles.secondary)}>
            Added {formatDistanceToNowStrict(creationDate, { addSuffix: true })}
        </span>
    );
};
