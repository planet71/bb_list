import React, { FC } from 'react';

import { useAppSelector } from '../../../../app/hooks';
import { useId } from '../../../../contexts/idContext';
import { getBookedByCoupleNumberOfGuests } from '../../selectors';
import { NumberOfGuests as NumberOfGuestsComponent } from './NumberOfGuests.component';

export const NumberOfGuests: FC = () => {
    const id = useId();
    const numberOfGuests = useAppSelector((state) =>
        getBookedByCoupleNumberOfGuests(state, id),
    );
    return <NumberOfGuestsComponent guests={numberOfGuests} />;
};
