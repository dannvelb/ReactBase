import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-cool-inview";

export const useInfiniteLoading = (props) => {
  const { getItems } = props; /* 1 */
  const [items, setItems] = useState<Array<any>>([]);
  const [page, setPage] = useState<number>(0);
  const initialPageLoaded = useRef(false);
  const [hasMore, setHasMore] = useState(true);

  const loadItems = async () => {
    const data: { data: Array<any>; total: number,page:number } = await getItems(page + 1);
    const newItems = [...items, ...data.data];
    setPage(data.page)
    setItems(newItems);
    setHasMore(data.total > newItems.length);
  };
  const { observe: loadMoreRef } = useInView({
    onEnter: () => {
      loadItems();
    },
  });

  useEffect(() => {
    if (initialPageLoaded.current) {
      return;
    }

    loadItems();
    initialPageLoaded.current = true;
  }, [loadItems]);

  return {
    items,
    hasMore,
    loadItems,
    loadMoreRef,
  };
};

export default useInfiniteLoading;
