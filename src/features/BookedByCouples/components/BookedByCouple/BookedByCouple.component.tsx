import React, { FC } from 'react';
import { useFela } from 'react-fela';

import { IdProvider } from '../../../../contexts/idContext';
import { BookingProgress } from '../BookingProgress/BookingProgress.container';
import { CollaborateButton } from '../CollaborateButton/CollaborateButton.container';
import { Contact } from '../Contact/Contact.container';
import { CreationDate } from '../CreationDate/CreationDate.container';
import { DisconnectCollaborationButton } from '../DiconnectCollaborationButton/DisconnectCollaborationButton.container';
import { NumberOfGuests } from '../NumberOfGuests/NumberOfGuests.container';
import { Partners } from '../Partners/Partners.container';
import { ProfilePhoto } from '../ProfilePhoto/ProfilePhoto.container';
import { RemoveBookingButton } from '../RemoveBookingButton/RemoveBookingButton.container';
import { WeddingDate } from '../WeddingDate/WeddingDate.container';
import { bookedByCouplesStyles } from './bookedByCoupleStyles';

interface BookedByCoupleProps {
    id: string;
}

export const BookedByCouple: FC<BookedByCoupleProps> = ({ id }) => {
    const { css } = useFela();
    return (
        <IdProvider id={id}>
            <div className={css(bookedByCouplesStyles.wrapper)}>
                <div className={css(bookedByCouplesStyles.profilePhoto)}>
                    <ProfilePhoto />
                </div>
                <div className={css(bookedByCouplesStyles.weddingDate)}>
                    <WeddingDate />
                </div>
                <div className={css(bookedByCouplesStyles.guests)}>
                    <NumberOfGuests />
                </div>
                <div className={css(bookedByCouplesStyles.partners)}>
                    <Partners />
                </div>
                <div className={css(bookedByCouplesStyles.collaboration)}>
                    <DisconnectCollaborationButton />
                </div>
                <div className={css(bookedByCouplesStyles.contact)}>
                    <Contact />
                </div>
                <div className={css(bookedByCouplesStyles.aside)}>
                    <CollaborateButton />
                    <RemoveBookingButton />
                    <CreationDate />
                    <BookingProgress />
                </div>
            </div>
        </IdProvider>
    );
};
