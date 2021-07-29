import React, { FC } from 'react';
import { useFela } from 'react-fela';

import { loader, loaderStyles } from './loaderStyles';

export const Loader: FC = () => {
    const { css, renderer } = useFela();
    return (
        <div
            className={css({
                ...loaderStyles(renderer.renderKeyframe(loader, {})).loader,
            })}
        >
            <div></div>
        </div>
    );
};
