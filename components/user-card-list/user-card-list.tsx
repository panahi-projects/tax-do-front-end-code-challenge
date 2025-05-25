"use client";
import { RandomUserApiResponse, User } from "@/types";
import UserCard from "../user-card/user-card";
import styles from "./user-card-list.module.scss";
import { apiClient } from "@/lib/api-client";
import useInfiniteScrollApi from "@/hooks/useInfiniteScrollApi";
import { motion, AnimatePresence } from "framer-motion";

const MOCK: RandomUserApiResponse = {
  results: [
    {
      gender: "female",
      name: { title: "Mrs", first: "Simona", last: "Støle" },
      location: {
        street: { number: 9188, name: "Granhekkveien" },
        city: "Heggenes",
        state: "Finnmark - Finnmárku",
        country: "Norway",
        postcode: "6443",
        coordinates: { latitude: "43.6510", longitude: "54.4102" },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "simona.stole@example.com",
      login: {
        uuid: "dd53e444-880c-4fc2-b14c-919d0581f87a",
        username: "silvermeercat207",
        password: "datsun",
        salt: "GdV7WjBh",
        md5: "ba8ac29a1f4f5da756917cde0a641c75",
        sha1: "2711d4e71e4ca054b00cfa9eeecd4fb5ceb8c177",
        sha256:
          "c294a5d63a4d352cabc20be926f274e912f72cfb098f6546bf2d3d1bc872ffb9",
      },
      dob: { date: "1977-09-15T20:03:21.437Z", age: 47 },
      registered: { date: "2019-09-23T14:28:14.229Z", age: 5 },
      phone: "55095464",
      cell: "49152546",
      id: { name: "FN", value: "15097705821" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/0.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
      },
      nat: "NO",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Simona", last: "Støle" },
      location: {
        street: { number: 9188, name: "Granhekkveien" },
        city: "Heggenes",
        state: "Finnmark - Finnmárku",
        country: "Norway",
        postcode: "6443",
        coordinates: { latitude: "43.6510", longitude: "54.4102" },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "simona.stole@example.com",
      login: {
        uuid: "dd53e444-880c-4fc2-b14c-919d0581f87a",
        username: "silvermeercat207",
        password: "datsun",
        salt: "GdV7WjBh",
        md5: "ba8ac29a1f4f5da756917cde0a641c75",
        sha1: "2711d4e71e4ca054b00cfa9eeecd4fb5ceb8c177",
        sha256:
          "c294a5d63a4d352cabc20be926f274e912f72cfb098f6546bf2d3d1bc872ffb9",
      },
      dob: { date: "1977-09-15T20:03:21.437Z", age: 47 },
      registered: { date: "2019-09-23T14:28:14.229Z", age: 5 },
      phone: "55095464",
      cell: "49152546",
      id: { name: "FN", value: "15097705822" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/0.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
      },
      nat: "NO",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Simona", last: "Støle" },
      location: {
        street: { number: 9188, name: "Granhekkveien" },
        city: "Heggenes",
        state: "Finnmark - Finnmárku",
        country: "Norway",
        postcode: "6443",
        coordinates: { latitude: "43.6510", longitude: "54.4102" },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "simona.stole@example.com",
      login: {
        uuid: "dd53e444-880c-4fc2-b14c-919d0581f87a",
        username: "silvermeercat207",
        password: "datsun",
        salt: "GdV7WjBh",
        md5: "ba8ac29a1f4f5da756917cde0a641c75",
        sha1: "2711d4e71e4ca054b00cfa9eeecd4fb5ceb8c177",
        sha256:
          "c294a5d63a4d352cabc20be926f274e912f72cfb098f6546bf2d3d1bc872ffb9",
      },
      dob: { date: "1977-09-15T20:03:21.437Z", age: 47 },
      registered: { date: "2019-09-23T14:28:14.229Z", age: 5 },
      phone: "55095464",
      cell: "49152546",
      id: { name: "FN", value: "15097705823" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/0.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
      },
      nat: "NO",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Simona", last: "Støle" },
      location: {
        street: { number: 9188, name: "Granhekkveien" },
        city: "Heggenes",
        state: "Finnmark - Finnmárku",
        country: "Norway",
        postcode: "6443",
        coordinates: { latitude: "43.6510", longitude: "54.4102" },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "simona.stole@example.com",
      login: {
        uuid: "dd53e444-880c-4fc2-b14c-919d0581f87a",
        username: "silvermeercat207",
        password: "datsun",
        salt: "GdV7WjBh",
        md5: "ba8ac29a1f4f5da756917cde0a641c75",
        sha1: "2711d4e71e4ca054b00cfa9eeecd4fb5ceb8c177",
        sha256:
          "c294a5d63a4d352cabc20be926f274e912f72cfb098f6546bf2d3d1bc872ffb9",
      },
      dob: { date: "1977-09-15T20:03:21.437Z", age: 47 },
      registered: { date: "2019-09-23T14:28:14.229Z", age: 5 },
      phone: "55095464",
      cell: "49152546",
      id: { name: "FN", value: "15097705824" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/0.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
      },
      nat: "NO",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Simona", last: "Støle" },
      location: {
        street: { number: 9188, name: "Granhekkveien" },
        city: "Heggenes",
        state: "Finnmark - Finnmárku",
        country: "Norway",
        postcode: "6443",
        coordinates: { latitude: "43.6510", longitude: "54.4102" },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "simona.stole@example.com",
      login: {
        uuid: "dd53e444-880c-4fc2-b14c-919d0581f87a",
        username: "silvermeercat207",
        password: "datsun",
        salt: "GdV7WjBh",
        md5: "ba8ac29a1f4f5da756917cde0a641c75",
        sha1: "2711d4e71e4ca054b00cfa9eeecd4fb5ceb8c177",
        sha256:
          "c294a5d63a4d352cabc20be926f274e912f72cfb098f6546bf2d3d1bc872ffb9",
      },
      dob: { date: "1977-09-15T20:03:21.437Z", age: 47 },
      registered: { date: "2019-09-23T14:28:14.229Z", age: 5 },
      phone: "55095464",
      cell: "49152546",
      id: { name: "FN", value: "15097705820" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/0.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
      },
      nat: "NO",
    },
    {
      gender: "female",
      name: { title: "Mrs", first: "Simona", last: "Støle" },
      location: {
        street: { number: 9188, name: "Granhekkveien" },
        city: "Heggenes",
        state: "Finnmark - Finnmárku",
        country: "Norway",
        postcode: "6443",
        coordinates: { latitude: "43.6510", longitude: "54.4102" },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "simona.stole@example.com",
      login: {
        uuid: "dd53e444-880c-4fc2-b14c-919d0581f87a",
        username: "silvermeercat207",
        password: "datsun",
        salt: "GdV7WjBh",
        md5: "ba8ac29a1f4f5da756917cde0a641c75",
        sha1: "2711d4e71e4ca054b00cfa9eeecd4fb5ceb8c177",
        sha256:
          "c294a5d63a4d352cabc20be926f274e912f72cfb098f6546bf2d3d1bc872ffb9",
      },
      dob: { date: "1977-09-15T20:03:21.437Z", age: 47 },
      registered: { date: "2019-09-23T14:28:14.229Z", age: 5 },
      phone: "55095464",
      cell: "49152546",
      id: { name: "FN", value: "15097705825" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/0.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
      },
      nat: "NO",
    },
  ],
  info: { seed: "a84a3a7c718f08f5", results: 1, page: 1, version: "1.4" },
};

const UserCardList = () => {
  const items = MOCK.results;
  // const { data } = await apiClient.get<RandomUserApiResponse>(
  //   "/?page=1&results=5&seed=abc"
  // );

  // console.log(data);
  const {
    data,
    isLoading,
    isLoadingMore,
    error,
    hasMore,
    loadingRef,
    refresh,
  } = useInfiniteScrollApi<RandomUserApiResponse>({
    pageSize: 10,
    threshold: 300,
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading && !data.length) {
    return (
      <div className="flex justify-center py-8">Loading initial data...</div>
    );
  }

  return (
    <div className={styles["user-list"]}>
      <button
        onClick={refresh}
        disabled={isLoading}
        className={styles["user-list__refresh-btn"]}
      >
        Refresh
      </button>

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
            <div className={`${styles["user-cards"]} container`}>
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
