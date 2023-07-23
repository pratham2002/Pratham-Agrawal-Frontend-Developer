import { useState } from "react";

export default function useTablePagination() {
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return [page, handleChangePage];
}
