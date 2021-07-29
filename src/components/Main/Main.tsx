import React, { FC } from 'react';
import { useFela } from 'react-fela';

import { mainStyles } from './mainStyles';

export const Main: FC = ({ children }) => {
    const { css } = useFela();
    return <main className={css(mainStyles.container)}>{children}</main>;
};
