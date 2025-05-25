// hooks/useFavorites.ts
import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { User } from "@/types";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<User[]>([]);

  useEffect(() => {
    db.favorites.toArray().then(setFavorites);
  }, []);

  const addFavorite = async (user: User) => {
    await db.favorites.put(user);
    setFavorites(await db.favorites.toArray());
  };

  const removeFavorite = async (email: string) => {
    await db.favorites.delete(email);
    setFavorites(await db.favorites.toArray());
  };

  const isFavorite = (email: string) => {
    return favorites.some((u) => u.email === email);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
