import { IStyle } from 'fela';
import React, { FC } from 'react';
import { useFela } from 'react-fela';

import { buttonStyles } from './buttonStyles';

interface ButtonProps {
    onClick(): void;
    disabled?: boolean;
    type?: ButtonTypes;
    styles?: IStyle;
}

export enum ButtonTypes {
    Primary = 'primary',
    Secondary = 'secondary',
}

export const Button: FC<ButtonProps> = ({
    type = ButtonTypes.Primary,
    children,
    onClick,
    disabled,
    styles,
}) => {
    const { css } = useFela();
    return (
        <button
            onClick={onClick}
            className={css([buttonStyles[type], styles || {}])}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
