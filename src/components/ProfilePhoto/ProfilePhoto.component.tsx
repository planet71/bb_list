import React, { FC } from 'react';
import { useFela } from 'react-fela';

import { useIsImgLoaded } from '../../hooks/useIsImgLoaded';
import { Loader } from '../Loader/Loader';
import { profilePhotoStyles } from './profilePhotoStyles';

interface ProfilePhotoProps {
    src: string;
}

export const ProfilePhoto: FC<ProfilePhotoProps> = ({ src }) => {
    const { css } = useFela();
    const isImgLoaded = useIsImgLoaded(src);
    return isImgLoaded ? (
        <figure className={css(profilePhotoStyles.profilePhotoWrapper)}>
            <img
                src={src}
                className={css(profilePhotoStyles.profilePhoto)}
                alt="Profile photo"
                title="Profile photo"
            />
        </figure>
    ) : (
        <Loader />
    );
};
