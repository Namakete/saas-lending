import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@component/ui/Pagination';

import React from 'react';

type ToolPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const ToolPagination = (props: ToolPaginationProps) => {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageClick = (page: number) => onPageChange(page);

  const getPaginationItems = () => {
    const items = [];
    const delta = 2;
    const rangeStart = Math.max(2, currentPage - delta);
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

    if (rangeStart > 2) items.push('...');
    
    for (let i = rangeStart; i <= rangeEnd; i++) items.push(i);

    if (rangeEnd < totalPages - 1) items.push('...');

    return [1, ...items, totalPages].filter(
      (page, index, self) => self.indexOf(page) === index,
    );
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="mr-10">
          <PaginationPrevious onClick={handlePrevious} />
        </PaginationItem>

        {getPaginationItems().map((page, index) => (
          <PaginationItem key={`page-${index}`} className="mx-1">
            {typeof page === 'number' ? (
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </PaginationLink>
            ) : (
              <span>{page}</span>
            )}
          </PaginationItem>
        ))}

        <PaginationItem className="ml-10">
          <PaginationNext onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
