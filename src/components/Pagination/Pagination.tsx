import React, { FC, useState } from 'react';
import { useFela } from 'react-fela';

import { fontStyles } from '../../features/BookedByCouples/fontStyles';
import { Button, ButtonTypes } from '../Button/Button';
import { paginationStyles } from './paginationStyles';

interface PaginationProps {
    pages: number;
    perPage: number;
    onPageClick(page: number): void;
}

export const Pagination: FC<PaginationProps> = ({
    pages,
    perPage,
    onPageClick,
}) => {
    const { css } = useFela();
    const [currentPage, setCurrentPage] = useState<number>(0);
    return (
        <>
            <span className={css(fontStyles.secondary)}>Page:</span>
            <ol className={css(paginationStyles.wrapper)}>
                {Array.from(Array(Math.ceil(pages / perPage)).keys()).map(
                    (n, index) => {
                        const pageNumber = n + 1;
                        return (
                            <li
                                key={pageNumber}
                                className={css(paginationStyles.item)}
                            >
                                <Button
                                    type={ButtonTypes.Secondary}
                                    styles={
                                        index === currentPage
                                            ? paginationStyles.current
                                            : {}
                                    }
                                    onClick={() => {
                                        setCurrentPage(n);
                                        onPageClick(pageNumber);
                                    }}
                                >
                                    <span className={css(fontStyles.secondary)}>
                                        {pageNumber}
                                    </span>
                                </Button>
                            </li>
                        );
                    },
                )}
            </ol>
        </>
    );
};
