import React, { FC } from 'react';

import { useAppSelector } from '../../../../app/hooks';
import { useId } from '../../../../contexts/idContext';
import {
    getBookedByCoupleCreationDate,
    getCollaborationStatus,
} from '../../selectors';
import { CreationDate as CreationDateComponent } from './CreationDate.component';

export const CreationDate: FC = () => {
    const id = useId();
    const creationDate = useAppSelector((state) =>
        getBookedByCoupleCreationDate(state, id),
    );
    const isCollaborating = useAppSelector((state) =>
        getCollaborationStatus(state, id),
    );

    return isCollaborating ? (
        <CreationDateComponent creationDate={creationDate} />
    ) : null;
};
