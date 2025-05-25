"use client";
import { AnimatePresence, motion } from "framer-motion";
import { IoRefresh } from "react-icons/io5";
import SearchInput from "../search-input/search-input";
import UserCard from "../user-card/user-card";
import GenderFilter from "../gender-filter/gender-filter";
import styles from "./user-card-list.module.scss";
import { useUserListController } from "@/hooks/useUserListController";

const UserCardList = () => {
  const {
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
  } = useUserListController();

  const handleSearchChange = (value: string) => {
    setNat(value.trim().toLowerCase());
  };

  const handleGenderChange = (value: "male" | "female" | "any") => {
    setGender(value);
  };

  if (error) return <div>Error: {error.message}</div>;

  if (isLoading && !data.length)
    return (
      <div className="flex justify-center py-8">Loading initial data...</div>
    );

  return (
    <div className={`${styles["user-list"]} container`}>
      <div className={styles["user-list__action-bar"]}>
        <div className={styles["user-list__search"]}>
          <SearchInput
            value={nat || ""}
            onChange={handleSearchChange}
            placeholder="Search by Nationality (e.g., gb, us, fr)"
          />
          <GenderFilter value={gender} onChange={handleGenderChange} />
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
