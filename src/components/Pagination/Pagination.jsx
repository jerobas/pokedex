import React, { useState } from 'react'
import { PaginationContainer, PageItem, PageButton } from './Pagination.styles'
import { GrNext, GrPrevious } from 'react-icons/gr'

export default function Pagination({ totalPages, currentPage, onPageChange }) {
    const [currentPageNumber, setCurrentPageNumber] = useState(currentPage);

    const handlePageClick = (page) => {
        setCurrentPageNumber(page);
        onPageChange(page);
    };

    const generatePages = () => {
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <PageItem key={i}>
                    <PageButton active={currentPageNumber === i} onClick={() => handlePageClick(i)}>
                        {i}
                    </PageButton>
                </PageItem>
            );
        }

        return pages;
    };
    return (
        <PaginationContainer>
            <ul>
                <PageItem>
                    <PageButton
                        disabled={currentPageNumber === 1}
                        onClick={() => handlePageClick(currentPageNumber - 1)}
                    >
                        < GrPrevious />
                    </PageButton>
                </PageItem>
                {generatePages()}
                <PageItem>
                    <PageButton
                        disabled={currentPageNumber === totalPages}
                        onClick={() => handlePageClick(currentPageNumber + 1)}
                    >
                        < GrNext />
                    </PageButton>
                </PageItem>
            </ul>
        </PaginationContainer>
    )
}
