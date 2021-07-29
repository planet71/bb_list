export const loaderStyles = (animationName: string) => ({
    loader: {
        position: 'relative',
        width: '100%',
        height: '100%',
        '& div': {
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '14px',
            height: '14px',
            margin: '-11px 0 0 -11px',
            borderRadius: '50%',
            borderColor: 'rgba(0, 0, 0, .1) ',
            borderStyle: 'dotted',
            animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
            animationDuration: '.85s',
            animationIterationCount: 'infinite',
            animationName: `${animationName}`,
        },
    },
});

export const loader = () => ({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
});
