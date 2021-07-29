export const bookedByCouplesStyles = {
    wrapper: {
        minHeight: '112px',
        minWidth: '768px',
        boxSizing: 'border-box',
        background: 'rgba(255, 255, 255)',
        borderRadius: '6px',
        border: '1px solid rgba(222, 226, 229)',
        padding: '7px',
        margin: '0 0 .7rem',
        paddingRight: '15px',
        display: 'grid',
        gap: '.7rem',
        gridTemplateColumns:
            '100px minmax(100px, 8rem) 1fr minmax(150px, auto) 150px',
        gridTemplateRows: '1fr 1fr',
        gridTemplateAreas: `"profilePhoto date   partners collaboration aside"
                            "profilePhoto guests contact  collaboration aside"`,
    },
    profilePhoto: {
        gridArea: 'profilePhoto',
    },
    weddingDate: {
        gridArea: 'date',
        alignSelf: 'end',
    },
    guests: {
        gridArea: 'guests',
        alignSelf: 'start',
    },
    partners: {
        gridArea: 'partners',
        alignSelf: 'end',
    },
    contact: {
        gridArea: 'contact',
        alignSelf: 'start',
    },
    collaboration: {
        gridArea: 'collaboration',
        placeSelf: 'center',
    },
    aside: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-evenly',
        gridArea: 'aside',
        alignSelf: 'center',
        justifySelf: 'stretch',
    },
};
