import React, { FC, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useId } from '../../../../contexts/idContext';
import { toggleCollaboration } from '../../actions';
import {
    getCollaborationStatus,
    isCollaborationPending,
} from '../../selectors';
import { CollaborateButton as CollaborateButtonComponent } from './CollaborateButton.component';

export const CollaborateButton: FC = () => {
    const id = useId();
    const dispatch = useAppDispatch();

    const onCollaborationConfirmation = useCallback(() => {
        dispatch(toggleCollaboration(id));
    }, [dispatch, id]);

    const isPending = useAppSelector((state) =>
        isCollaborationPending(state, id),
    );
    const isCollaborating = useAppSelector((state) =>
        getCollaborationStatus(state, id),
    );

    return !isCollaborating ? (
        <CollaborateButtonComponent
            onCollaborationConfirmation={onCollaborationConfirmation}
            isPending={isPending}
        />
    ) : null;
};
