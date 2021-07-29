import React, { FC } from 'react';

interface PartnersProps {
    partners: string[];
}

export const Partners: FC<PartnersProps> = ({ partners }) => (
    <>{partners.map(toNameOnly).join(' & ')}</>
);

const toNameOnly = (partner: string) => partner.split(' ')[0];
