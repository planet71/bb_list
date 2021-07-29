import React, { FC } from 'react';

import { Button } from '../../../../components/Button/Button';
import { collaborateButtonStyles } from './collaborateButtonStyles';

interface CollaborateButtonProps {
    onCollaborationConfirmation(): void;
    isPending: boolean;
}

export const CollaborateButton: FC<CollaborateButtonProps> = ({
    onCollaborationConfirmation,
    isPending,
}) => (
    <Button
        onClick={onCollaborationConfirmation}
        disabled={isPending}
        styles={collaborateButtonStyles.collaborationButton}
    >
        Confirm booking
    </Button>
);
