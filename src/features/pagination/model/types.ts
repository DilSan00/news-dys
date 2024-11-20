export interface IPaginationProps {
  totalPages: number;
  handlePreviousPage: () => void;
  handlePageClick: (page: number) => void;
  handleNextPage: (page: number) => void;
  currentPage: number;
}
