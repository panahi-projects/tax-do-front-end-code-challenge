import Image from "next/image";
import styles from "./user-card.module.scss";
import { User } from "@/types";
import config from "@/config";
import { useRouter } from "next/navigation";

interface UserCardProps {
  user: User;
  index?: number;
}

const UserCard: React.FC<UserCardProps> = ({ user, index }) => {
  const router = useRouter();
  const onRedirectToProfile = () => {
    router.push(`/user-profile/${user.id.value}`);
  };
  return (
    <div className={styles["user-card"]} onClick={onRedirectToProfile}>
      {index && <div className={styles["user-card__index"]}>{index}</div>}

      {user.picture.medium && (
        <Image
          src={user.picture.medium}
          width={48}
          height={48}
          alt="alt"
          className={styles["user-card__avatar"]}
        />
      )}

      <div className={styles["user-card__main-name"]}>
        <div className={styles["user-card__name"]}>
          {user.name.first} {user.name.last}
        </div>
        <div className={styles["user-card__gender"]}>{user.gender}</div>
      </div>
      <div className={styles["user-card__info"]}>
        <div>{user.phone}</div>
        <div className={styles["user-card__info__email"]}>{user.email}</div>
        <div className={styles["user-card__info__address"]}>
          <span>{user.location.postcode}</span>
          <span>{user.location.street.name}</span>
          <span>({user.location.street.number})</span>
          <span>{user.location.city}</span>
          <span>{user.location.state}</span>
          <span>{user.location.country}</span>
        </div>
      </div>

      {/* Country Flag */}
      <Image
        src={`${config.flagCDN}${(user.nat || "ir").toLocaleLowerCase()}.webp`}
        width={24}
        height={18}
        alt={user.nat}
        loading="lazy"
        className={styles["user-card__flag"]}
      />
    </div>
  );
};

export default UserCard;
