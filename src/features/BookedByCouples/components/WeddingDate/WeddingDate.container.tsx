import React, { FC } from 'react';

import { useAppSelector } from '../../../../app/hooks';
import { useId } from '../../../../contexts/idContext';
import { getBookedByCoupleWeddingDate } from '../../selectors';
import { WeddingDate as WeddingDateComponent } from './WeddingDate.component';

export const WeddingDate: FC = () => {
    const id = useId();
    const date = useAppSelector((state) =>
        getBookedByCoupleWeddingDate(state, id),
    );

    return <WeddingDateComponent date={date} />;
};
