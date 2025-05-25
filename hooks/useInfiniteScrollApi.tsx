// "use client";
import config from "@/config";
import { apiClient, CanceledError } from "@/lib/api-client";
import { RandomUserApiResponse, RelativeUrl, User } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseInfiniteScrollApiOptions<T> {
  initialPage?: number;
  initialData?: User[];
  pageSize?: number;
  threshold?: number;
  onError?: (error: Error) => void;
}

const useInfiniteScrollApi = <T extends RandomUserApiResponse>({
  initialPage = 10,
  initialData = [],
  pageSize = config.defaultPageSize,
  threshold = 200,
  onError,
}: UseInfiniteScrollApiOptions<T>) => {
  const [data, setData] = useState<User[]>(initialData);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [url, setUrl] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const isInitialMount = useRef(true);

  const fetchData = useCallback(
    async (page: number, isInitialLoad = false) => {
      if (!hasMore && !isInitialLoad) return;

      const loadingState = page > 1 ? setIsLoadingMore : setIsLoading;
      loadingState(true);
      setError(null);

      try {
        const urlWithParams: RelativeUrl = `/?page=${page}&results=${pageSize}&seed=abc`;
        const response = await apiClient.get<T>(urlWithParams);
        const newData = response.data;

        setData((prev) =>
          page === 1 ? newData.results : [...prev, ...newData.results]
        );
        setHasMore(newData.results.length >= pageSize);
        setCurrentPage(page);
      } catch (err) {
        if (err instanceof CanceledError) {
          return;
        }

        setError(err as Error);
        onError?.(err as Error);
      } finally {
        loadingState(false);
      }
    },
    [url, hasMore, pageSize, onError]
  );

  const loadNextPage = useCallback(() => {
    if (isLoadingMore || !hasMore) return;
    fetchData(currentPage + 1);
  }, [currentPage, fetchData, hasMore, isLoadingMore]);

  const refresh = useCallback(() => {
    fetchData(1, true);
  }, [fetchData]);

  useEffect(() => {
    if (isInitialMount.current || !hasMore) {
      isInitialMount.current = false;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadNextPage();
        }
      },
      {
        rootMargin: `${threshold}px`,
      }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadNextPage, hasMore, threshold]);

  // Initial load
  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    data,
    isLoading,
    isLoadingMore,
    error,
    currentPage,
    hasMore,
    loadNextPage,
    refresh,
    setUrl,
    loadingRef,
  };
};

export default useInfiniteScrollApi;
