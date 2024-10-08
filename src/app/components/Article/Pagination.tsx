import React, { useState, useEffect } from 'react';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const [maxPageNumbersToShow, setMaxPageNumbersToShow] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      setMaxPageNumbersToShow(window.innerWidth <= 768 ? 3 : 8);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const totalPages = pageNumbers.length;
    const pageItems = [];

    const remainingPages = totalPages - currentPage;
    const maxDisplayPages = maxPageNumbersToShow;

    // Determine the starting and ending indices for displaying page numbers
    let startIndex = Math.max(1, currentPage - Math.floor(maxDisplayPages / 2));
    let endIndex = Math.min(totalPages, startIndex + maxDisplayPages - 1);

    // If we are nearing the end, display the last few pages fully
    if (remainingPages < maxDisplayPages) {
      startIndex = Math.max(1, totalPages - maxDisplayPages + 1);
      endIndex = totalPages;
    }

    // Add the first page(s) and the ellipsis if needed
    for (let i = startIndex; i <= endIndex; i++) {
      pageItems.push(
        <li key={i} className='page-item'>
          <button
            className={`page-link py-4 px-6 max-sm:py-2 max-sm:px-4 font-bold ${i === currentPage ? 'bg-red-500 text-white' : 'text-[#033C5A]'} hover:bg-red-500`}
            onClick={(e) => { e.preventDefault(); handlePaginationClick(i); }}
          >
            {i}
          </button>
        </li>
      );
    }

    // Add the ellipsis and last page number if needed
    if (endIndex < totalPages - 1) {
      pageItems.push(
        <li key="ellipsis-end" className='page-item'>
          <span className="page-link py-4 px-6 max-sm:py-2 max-sm:px-4 text-[#033C5A]">...</span>
        </li>
      );
      pageItems.push(
        <li key={totalPages} className='page-item'>
          <button
            className={`page-link py-4 px-6 max-sm:py-2 max-sm:px-4 font-bold ${totalPages === currentPage ? 'bg-red-500 text-white' : 'text-[#033C5A]'} hover:bg-red-500`}
            onClick={(e) => { e.preventDefault(); handlePaginationClick(totalPages); }}
          >
            {totalPages}
          </button>
        </li>
      );
    }

    return pageItems;
  };

  const handlePaginationClick = (pageNumber: number) => {
    paginate(pageNumber);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <nav className="flex items-center justify-center">
      <ul className='pagination flex items-center space-x-0'>
        <li className='page-item'>
          <button
            className="page-link py-4 px-6 max-sm:py-2 max-sm:px-4 font-bold text-[#033C5A] hover:bg-red-500"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage === 1) {
                handlePaginationClick(pageNumbers[pageNumbers.length - 1]);
              } else {
                handlePaginationClick(currentPage - 1);
              }
            }}
          >
            &laquo;
          </button>
        </li>
        {renderPageNumbers()}
        <li className='page-item'>
          <button
            className="page-link py-4 px-6 max-sm:py-2 max-sm:px-4 font-bold text-[#033C5A] hover:bg-red-500"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage === pageNumbers.length) {
                handlePaginationClick(pageNumbers[0]);
              } else {
                handlePaginationClick(currentPage + 1);
              }
            }}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
