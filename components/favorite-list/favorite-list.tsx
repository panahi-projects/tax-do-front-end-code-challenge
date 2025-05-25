// components/FavoriteList.tsx
import { useFavorites } from "@/hooks/useFavorites";
import UserCard from "../user-card/user-card";

const FavoriteList = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container">
      <h2 style={{ margin: "8px auto" }}>Favorites</h2>
      {favorites.map((user, index) => (
        <UserCard key={user.login.uuid} index={index + 1} user={user} />
      ))}
    </div>
  );
};

export default FavoriteList;
