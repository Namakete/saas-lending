'use client';

import { Grid } from '@component/ui/Grid/grid';
import React, { FC, useMemo, useState } from 'react';

import { ToolCard } from './tool-card';
import { ToolFilter } from './tool-filter';
import { ToolPagination } from './tool-pagination';

type ToolContainerProps = {
  technologies: any;
};

export const ToolContainer: FC<ToolContainerProps> = ({ technologies }) => {
  const [sortOption, setSortOption] = useState<string>('a-z');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const sortedTechnologies = useMemo(() => {
    return [...technologies].sort((a, b) => {
      if (sortOption === 'a-z') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [technologies, sortOption]);

  const paginatedTechnologies = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return sortedTechnologies.slice(startIndex, endIndex);
  }, [currentPage, sortedTechnologies]);

  const tolalPages = Math.ceil(sortedTechnologies.length / itemsPerPage);

  return (
    <div className="flex w-full flex-col items-center py-10">
      <ToolFilter onSortChange={handleSortChange} />
      <div className="mb-14 mt-5">
        <Grid>
          <ToolCard technologies={paginatedTechnologies} />
        </Grid>
      </div>
      <ToolPagination
        currentPage={currentPage}
        totalPages={tolalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
