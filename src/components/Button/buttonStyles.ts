import { CSSProperties } from 'react';

const buttonCommonStyles = {
    position: 'relative',
    display: 'inline-block',
    border: '0',
    padding: '8px 15px',
    borderRadius: '3px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',

    '&:active': {
        top: 1,
    },
} as CSSProperties;

export const buttonStyles = {
    primary: {
        ...buttonCommonStyles,
        backgroundColor: 'rgba(93, 183, 167)',
        color: 'rgba(255, 255,255)',
        '&:hover:enabled': {
            backgroundColor: 'rgba(80, 154, 133)',
        },
    },
    secondary: {
        ...buttonCommonStyles,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        '&:hover:enabled': {
            backgroundColor: 'rgba(0, 0, 0, .03)',
        },
    },
};
