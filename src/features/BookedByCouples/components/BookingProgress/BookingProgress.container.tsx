import React, { FC } from 'react';

import { useAppSelector } from '../../../../app/hooks';
import { useId } from '../../../../contexts/idContext';
import {
    getChecklistCompletion,
    getCollaborationStatus,
} from '../../selectors';
import { BookingProgress as BookingProgressComponent } from './BookingProgress.component';

export const BookingProgress: FC = () => {
    const id = useId();
    const completion = useAppSelector((state) =>
        getChecklistCompletion(state, id),
    );
    const isCollaborating = useAppSelector((state) =>
        getCollaborationStatus(state, id),
    );

    return isCollaborating ? (
        <BookingProgressComponent completion={completion} />
    ) : null;
};
