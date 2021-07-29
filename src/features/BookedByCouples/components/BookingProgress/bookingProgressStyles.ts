export const bookingProgressStyle = (progressValue: number = 0) => ({
    wrapper: {
        position: 'relative',
        top: '-22px',
        marginTop: '10px',
        '&::after': {
            content: '""',
            position: 'absolute',
            zIndex: '0',
            bottom: '-20px',
            left: '0',
            width: '100%',
            height: '5px',
            backgroundColor: 'rgba(237, 239, 240)',
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            zIndex: '1',
            bottom: '-20px',
            left: '0',
            width: `${progressValue}%`,
            height: '5px',
            backgroundColor: 'rgba(93, 183, 167)',
        },
    },
});
