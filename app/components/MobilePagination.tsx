import React from 'react';
import PointerIcon from './PointerIcon';

interface MobilePaginationProps {
  currentPages: number;
  currentPage: number;
  handlePagination: (page: number) => void;
}

const MobilePagination: React.FC<MobilePaginationProps> = ({
  currentPages,
  currentPage,
  handlePagination,
}) => {
  const paginationArray = Array.from({ length: currentPages });

  const shortPagination = () => {
    console.log(currentPage);
    console.log(paginationArray.length);
    if (currentPage === 1) return [1, 2, 3];
    if (currentPage >= paginationArray.length)
      return [currentPage - 2, currentPage - 1, currentPage];
    if (currentPage >= 2)
      return [currentPage - 1, currentPage, currentPage + 1];
  };
  return (
    <nav className="flex flex-row justify-center text-sm">
      <PointerIcon
        currentPages={currentPages}
        currentPage={currentPage}
        handlePagination={handlePagination}
        direction={'left'}
        size={64}
        alt={'bläddra bakåt'}
      />
      {shortPagination()?.map((pagination, index) => (
        <button
          key={index}
          className={`p-2 w-10 h-10 m-1 border ${
            Number(currentPage) === pagination
              ? 'bg-green text-basic-white'
              : ''
          }`}
          onClick={() => {
            if (currentPage === pagination) return;
            else handlePagination(pagination - 1);
          }}>
          {pagination}
        </button>
      ))}
      <PointerIcon
        currentPages={currentPages}
        currentPage={currentPage}
        handlePagination={handlePagination}
        direction={'right'}
        size={64}
        alt={'bläddra framåt'}
      />
    </nav>
  );
};

export default MobilePagination;
