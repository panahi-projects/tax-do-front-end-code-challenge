"use client";
import { useDebounce } from "@/hooks/useDebounce";
import useInfiniteScrollApi from "@/hooks/useInfiniteScrollApi";
import { RandomUserApiResponse, RelativeUrl } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoRefresh } from "react-icons/io5";
import SearchInput from "../search-input/search-input";
import UserCard from "../user-card/user-card";
import styles from "./user-card-list.module.scss";
import GenderFilter from "../gender-filter/gender-filter";

const UserCardList = () => {
  const [nat, setNat] = useState<string | null>("");
  const isInitialMount = useRef(true);
  const debouncedNat = useDebounce(nat, 500);
  const [gender, setGender] = useState<"male" | "female" | "any">("any");
  const initialUrl = useRef(`/?nat=gb&gender=any&page=1&results=10&seed=abc`);

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
    initialUrl: initialUrl.current as RelativeUrl,
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

    // Only update if URL actually changed
    if (newUrl !== initialUrl.current) {
      setUrl(newUrl);
      initialUrl.current = newUrl;
    }
  }, [debouncedNat, gender, setUrl]);

  const handleSearchChange = (value: string) => {
    setNat(value.trim().toLowerCase());
  };

  const handleGenderChange = (value: "male" | "female" | "any") => {
    setGender(value);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading && !data.length) {
    return (
      <div className="flex justify-center py-8">Loading initial data...</div>
    );
  }

  return (
    <div className={`${styles["user-list"]} container`}>
      <div className={styles["user-list__action-bar"]}>
        <div className={styles["user-list__search"]}>
          <div>
            <SearchInput
              value={nat || ""}
              onChange={handleSearchChange}
              placeholder="Search by Nationality (e.g., gb, us, fr)"
            />
          </div>
          <div>
            <GenderFilter value={gender} onChange={handleGenderChange} />
          </div>
        </div>
        <button
          onClick={refresh}
          disabled={isLoading}
          className={styles["user-list__refresh-btn"]}
        >
          <IoRefresh size={18} />
        </button>
      </div>

      <AnimatePresence>
        {data.map((user, index) => (
          <motion.div
            key={user.login.uuid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles["user-list__card"]}
          >
            <div className={styles["user-cards"]}>
              <UserCard key={user.id.value} index={index + 1} user={user} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Subtle loading indicator at bottom */}
      <div ref={loadingRef} className={styles["user-list__loading"]}>
        {isLoadingMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles["user-list__loading-indicator"]}
          >
            <div className={styles["user-list__loading-spinner"]}></div>
            <span>Loading more...</span>
          </motion.div>
        )}
        {!hasMore && data.length > 0 && (
          <p className={styles["user-list__loading-message"]}>
            You've reached the end
          </p>
        )}
      </div>
    </div>
  );
};

export default UserCardList;
