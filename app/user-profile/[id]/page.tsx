"use client";
import UserCard from "@/components/user-card/user-card";
import UserProfileCard from "@/components/user-profile-card/user-profile-card";
import { apiClient } from "@/lib/api-client";
import { RandomUserApiResponse, User } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfilePage = () => {
  //   const [user, setUser] = useState<User | null>({
  //     gender: "female",
  //     name: { title: "Mrs", first: "Simona", last: "Støle" },
  //     location: {
  //       street: { number: 9188, name: "Granhekkveien" },
  //       city: "Heggenes",
  //       state: "Finnmark - Finnmárku",
  //       country: "Norway",
  //       postcode: "6443",
  //       coordinates: { latitude: "43.6510", longitude: "54.4102" },
  //       timezone: {
  //         offset: "-6:00",
  //         description: "Central Time (US & Canada), Mexico City",
  //       },
  //     },
  //     email: "simona.stole@example.com",
  //     login: {
  //       uuid: "dd53e444-880c-4fc2-b14c-919d0581f87a",
  //       username: "silvermeercat207",
  //       password: "datsun",
  //       salt: "GdV7WjBh",
  //       md5: "ba8ac29a1f4f5da756917cde0a641c75",
  //       sha1: "2711d4e71e4ca054b00cfa9eeecd4fb5ceb8c177",
  //       sha256:
  //         "c294a5d63a4d352cabc20be926f274e912f72cfb098f6546bf2d3d1bc872ffb9",
  //     },
  //     dob: { date: "1977-09-15T20:03:21.437Z", age: 47 },
  //     registered: { date: "2019-09-23T14:28:14.229Z", age: 5 },
  //     phone: "55095464",
  //     cell: "49152546",
  //     id: { name: "FN", value: "15097705821" },
  //     picture: {
  //       large: "https://randomuser.me/api/portraits/women/0.jpg",
  //       medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
  //       thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
  //     },
  //     nat: "NO",
  //   });
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
