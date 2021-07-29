import React from 'react';

import { Main } from './components/Main/Main';
import { AppConfigProvider } from './contexts/appConfig';
import { FelaProvider } from './contexts/felaRenderer';
import { BookedByCouplesList } from './features/BookedByCouples/components/BookedByCouplesList/BookedByCouplesList.container';
import { Header } from './features/BookedByCouples/components/Header/Header.component';
import { Pagination } from './features/BookedByCouples/components/Pagination/Pagination.container';

function App() {
    return (
        <AppConfigProvider>
            <FelaProvider>
                <Main>
                    <Header />
                    <BookedByCouplesList />
                    <Pagination />
                </Main>
            </FelaProvider>
        </AppConfigProvider>
    );
}

export default App;
