import React, { FC } from 'react';

import { useAppSelector } from '../../../../app/hooks';
import { ProfilePhoto as ProfilePhotoComponent } from '../../../../components/ProfilePhoto/ProfilePhoto.component';
import { useId } from '../../../../contexts/idContext';
import { getBookedByCoupleProfilePhoto } from '../../selectors';

export const ProfilePhoto: FC = () => {
    const id = useId();
    const src = useAppSelector((state) =>
        getBookedByCoupleProfilePhoto(state, id),
    );
    return <ProfilePhotoComponent src={src} />;
};
