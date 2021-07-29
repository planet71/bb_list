import React, { FC } from 'react';

import { useAppSelector } from '../../../../app/hooks';
import { useId } from '../../../../contexts/idContext';
import { getBookedByCoupleFirstUserEmail } from '../../selectors';
import { Contact as ContactComponent } from './Contact.component';

export const Contact: FC = () => {
    const id = useId();
    const email = useAppSelector((state) =>
        getBookedByCoupleFirstUserEmail(state, id),
    );

    return <ContactComponent email={email} />;
};
