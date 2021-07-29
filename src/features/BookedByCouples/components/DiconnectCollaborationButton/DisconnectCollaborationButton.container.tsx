import React, { FC, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useId } from '../../../../contexts/idContext';
import { toggleCollaboration } from '../../actions';
import {
    getCollaborationStatus,
    isCollaborationPending,
} from '../../selectors';
import { DisconnectCollaborationButton as DisconnectCollaborationButtonComponent } from './DisconnectCollaborationButton.component';

export const DisconnectCollaborationButton: FC = () => {
    const id = useId();
    const dispatch = useAppDispatch();
    const isCollaborating = useAppSelector((state) =>
        getCollaborationStatus(state, id),
    );
    const isPending = useAppSelector((state) =>
        isCollaborationPending(state, id),
    );
    const onClick = useCallback(() => {
        dispatch(toggleCollaboration(id));
    }, [dispatch, id]);

    return (
        <DisconnectCollaborationButtonComponent
            isCollaborating={isCollaborating}
            onClick={onClick}
            disabled={isPending}
        />
    );
};
