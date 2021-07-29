export const disconnectCollaborationButtonStyles = {
    button: {
        position: 'relative',
        cursor: 'pointer',
        borderRadius: '25px',
        fontSize: '.75rem',
        padding: '4px 7px',
        width: '100px',
        textTransform: 'uppercase',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        color: 'rgba(93, 183, 167)',
        border: '1px solid rgba(93, 183, 167)',
        transition: 'border-color 0.3s ease, color 0.3s ease',

        '&:hover': {
            borderColor: 'rgba(201,65,54)',
            color: 'rgba(201,65,54)',
        },
        '&:active:enabled': {
            top: '1',
        },
        '&[disabled]': {
            borderColor: 'rgba(0, 0, 0, .3)',
            color: 'rgba(0, 0, 0, .3)',
        },
    },
};
