"use client";
import UserProfileCard from "@/components/user-profile-card/user-profile-card";
import { apiClient } from "@/lib/api-client";
import { RandomUserApiResponse, User } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfilePage = () => {
  const params = useParams();
  const [user, setUser] = useState<User | null>(null);
  const id = params.id as string;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await apiClient.get<RandomUserApiResponse>(`/?id=${id}`);
      const data = response.data.results[0];
      console.log("data", data);

      setUser(data);
    };

    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className={`container`}>
      <UserProfileCard user={user} />
    </div>
  );
};

export default UserProfilePage;
