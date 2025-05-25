"use client";
import { EmailString } from "@/types";
import styles from "./user-profile-card.module.scss";
import Image from "next/image";
import { useState } from "react";
import { IoIosHeart } from "react-icons/io";

interface UserProfileCardProps {
  avatarUrl?: string;
  name: string;
  gender?: string;
  email?: EmailString;
}

const UserProfileCard = ({
  avatarUrl,
  name,
  gender,
  email,
}: UserProfileCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={`${styles["user-profile-card"]}`}>
      {avatarUrl && (
        <Image
          width={96}
          height={96}
          src={avatarUrl}
          alt={name}
          className={styles["user-profile-card__avatar"]}
        />
      )}

      <h3 className={styles["user-profile-card__name"]}>{name}</h3>
      <p className={styles["user-profile-card__email"]}>{email}</p>
      <div className={styles["user-profile-card__actions"]}>
        <button
          onClick={toggleFavorite}
          className={`${styles["user-profile-card__favorite-btn"]} ${
            isFavorite ? styles["user-profile-card__favorite-btn--active"] : ""
          }`}
        >
          <IoIosHeart className={styles["user-profile-card__favorite-icon"]} />
          {isFavorite ? "Favorited" : "Add to Favorite"}
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
