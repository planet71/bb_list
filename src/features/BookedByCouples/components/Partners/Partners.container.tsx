import React, { FC } from 'react';

import { useAppSelector } from '../../../../app/hooks';
import { useId } from '../../../../contexts/idContext';
import { getBookedByCouplePartners } from '../../selectors';
import { Partners as PartnersComponent } from './Partners.component';

export const Partners: FC = () => {
    const id = useId();
    const partners = useAppSelector((state) =>
        getBookedByCouplePartners(state, id),
    );
    return <PartnersComponent partners={partners} />;
};
