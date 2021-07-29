import React, { FC, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useId } from '../../../../contexts/idContext';
import { removeCollaboration } from '../../actions';
import {
    getCollaborationStatus,
    isCollaborationPending,
} from '../../selectors';
import { RemoveBookingButton as RemoveBookingButtonComponent } from './RemoveBookingButton.component';

export const RemoveBookingButton: FC = () => {
    const id = useId();
    const dispatch = useAppDispatch();

    const onCollaborationRemove = useCallback(() => {
        dispatch(removeCollaboration(id));
    }, [dispatch, id]);

    const isPending = useAppSelector((state) =>
        isCollaborationPending(state, id),
    );
    const isCollaborating = useAppSelector((state) =>
        getCollaborationStatus(state, id),
    );
    return !isCollaborating ? (
        <RemoveBookingButtonComponent
            onCollaborationRemove={onCollaborationRemove}
            isPending={isPending}
        />
    ) : null;
};
