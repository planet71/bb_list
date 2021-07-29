import React, { FC, useState } from 'react';
import { useFela } from 'react-fela';

import { disconnectCollaborationButtonStyles } from './disconnectCollaborationButtonStyles';

interface DisconnectCollaborationButtonProps {
    isCollaborating: boolean;
    disabled: boolean;
    onClick(): void;
}

export const DisconnectCollaborationButton: FC<DisconnectCollaborationButtonProps> =
    ({ isCollaborating, onClick, disabled }) => {
        const { css } = useFela();
        const [isHovering, setIsHovering] = useState<boolean>(false);
        const onMouseEvent = (value: boolean) => () => setIsHovering(value);

        return isCollaborating ? (
            <button
                className={css(disconnectCollaborationButtonStyles.button)}
                onClick={onClick}
                onMouseEnter={onMouseEvent(true)}
                onMouseLeave={onMouseEvent(false)}
                disabled={disabled}
            >
                {isHovering ? 'Disconnect' : 'Connected'}
            </button>
        ) : null;
    };
