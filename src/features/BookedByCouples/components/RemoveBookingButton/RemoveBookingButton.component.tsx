import React, { FC } from 'react';

import { Button, ButtonTypes } from '../../../../components/Button/Button';
import { removeBookingButtonStyles } from './removeBookingButtonStyles';

interface RemoveBookingButtonComponentProps {
    onCollaborationRemove(): void;
    isPending: boolean;
}

export const RemoveBookingButton: FC<RemoveBookingButtonComponentProps> = ({
    onCollaborationRemove,
    isPending,
}) => (
    <>
        <Button
            onClick={onCollaborationRemove}
            type={ButtonTypes.Secondary}
            disabled={isPending}
            styles={removeBookingButtonStyles.removeBookingButton}
        >
            Not my booking!
        </Button>
    </>
);
