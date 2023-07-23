import { useState } from "react";

export default function useTablePagination() {
  const [page, setPage] = useState(0);

  const handleChangePage = (value) => {
    setPage((p) => {
      if (p + value >= 0) {
        return p + value;
      }
      return 0;
    });
  };

  return [page, handleChangePage];
}
