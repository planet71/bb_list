import { format } from 'date-fns';
import React, { FC } from 'react';

interface WeddingDateProps {
    date: number;
}

export const WeddingDate: FC<WeddingDateProps> = ({ date }) => (
    <>{format(date, 'd LLL, yyyy')}</>
);
