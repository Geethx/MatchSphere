import { useState, useCallback } from "react";

interface UsePaginatedListResult<T> {
  items: T[];
  page: number;
  hasMore: boolean;
  loadMore: () => void;
  reset: () => void;
}

export const usePaginatedList = <T>(
  allItems: T[],
  pageSize: number = 20
): UsePaginatedListResult<T> => {
  const [page, setPage] = useState(1);

  const items = allItems.slice(0, page * pageSize);
  const hasMore = items.length < allItems.length;

  const loadMore = useCallback(() => {
    if (hasMore) {
      setPage(prev => prev + 1);
    }
  }, [hasMore]);

  const reset = useCallback(() => {
    setPage(1);
  }, []);

  return {
    items,
    page,
    hasMore,
    loadMore,
    reset,
  };
};
