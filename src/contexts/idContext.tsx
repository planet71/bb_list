import React, { createContext, FC, useContext } from 'react';

const IdContext = createContext<string | null>(null);
interface IdProviderProps {
    id: string;
}

export const IdProvider: FC<IdProviderProps> = ({ children, id }) => (
    <IdContext.Provider value={id}>{children}</IdContext.Provider>
);

export const useId = () => {
    const id = useContext(IdContext);

    if (!id) {
        throw new Error('useId must be used inside IdProvider');
    }

    return id;
};
