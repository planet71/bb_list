import React, { createContext, FC, useContext } from 'react';

import { AppConfig, appConfig } from '../app/config';

const AppConfigContext = createContext<AppConfig>(appConfig);

export const AppConfigProvider: FC = ({ children }) => (
    <AppConfigContext.Provider value={appConfig}>
        {children}
    </AppConfigContext.Provider>
);

export const useAppConfig = () => useContext(AppConfigContext);
