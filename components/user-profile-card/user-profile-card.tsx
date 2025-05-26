"use client";
import { useFavorites } from "@/hooks/useFavorites";
import { User } from "@/types";
import { useEffect, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import SafeImage from "../safe-image/safe-image";
import styles from "./user-profile-card.module.scss";

interface UserProfileCardProps {
  user: User;
}

const UserProfileCard = ({ user }: UserProfileCardProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const [isInFavorite, setIsInFavorite] = useState(false);

  useEffect(() => {
    setIsInFavorite(isFavorite(user.email));
  }, [isFavorite, user.email]);

  const toggleFavorite = () => {
    if (isInFavorite) {
      removeFavorite(user.email);
    } else {
      addFavorite(user);
    }
    setIsInFavorite(!isInFavorite);
  };

  return (
    <div className={`${styles["user-profile-card"]}`}>
      {user.picture?.medium && (
        <SafeImage
          width={96}
          height={96}
          src={user.picture.medium}
          alt="avatar"
          className={styles["user-profile-card__avatar"]}
          unoptimized
        />
      )}

      <h3 className={styles["user-profile-card__name"]}>
        {user.name.first} {user.name.last}
      </h3>
      <p className={styles["user-profile-card__email"]}>{user.email}</p>
      <div className={styles["user-profile-card__actions"]}>
        <button
          onClick={toggleFavorite}
          className={`${styles["user-profile-card__favorite-btn"]} ${
            isInFavorite
              ? styles["user-profile-card__favorite-btn--active"]
              : ""
          }`}
        >
          <IoIosHeart className={styles["user-profile-card__favorite-icon"]} />
          {isInFavorite ? "Favorited !!!" : "Add to Favorite"}
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
