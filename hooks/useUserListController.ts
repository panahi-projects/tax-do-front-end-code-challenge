// hooks/useUserListController.ts
import { useDebounce } from "@/hooks/useDebounce";
import useInfiniteScrollApi from "@/hooks/useInfiniteScrollApi";
import { RandomUserApiResponse, RelativeUrl } from "@/types";
import { useEffect, useRef, useState } from "react";

type Gender = "male" | "female" | "any";

export const useUserListController = (initialSeed = "abc") => {
  const [nat, setNat] = useState<string | null>("");
  const [gender, setGender] = useState<Gender>("any");
  const debouncedNat = useDebounce(nat, 500);
  const isInitialMount = useRef(true);

  const initialUrl = useRef(
    `/?nat=gb&gender=any&page=1&results=10&seed=${initialSeed}` as RelativeUrl
  );

  const {
    data,
    isLoading,
    isLoadingMore,
    error,
    hasMore,
    loadingRef,
    setUrl,
    refresh,
  } = useInfiniteScrollApi<RandomUserApiResponse>({
    initialUrl: initialUrl.current,
    pageSize: 10,
    threshold: 500,
  });

  // Update API URL when filters/search change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const genderParam = gender === "any" ? "" : `&gender=${gender}`;
    const newUrl = `/?nat=${
      debouncedNat || ""
    }${genderParam}&page=1&results=10` as RelativeUrl;

    if (newUrl !== initialUrl.current) {
      setUrl(newUrl);
      initialUrl.current = newUrl;
    }
  }, [debouncedNat, gender, setUrl]);

  return {
    nat,
    gender,
    setNat,
    setGender,
    data,
    isLoading,
    isLoadingMore,
    error,
    hasMore,
    loadingRef,
    refresh,
  };
};
