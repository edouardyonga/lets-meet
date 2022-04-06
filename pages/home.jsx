import React from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const home = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const out = () => {
    const logOut = logout()
      .then((res) => {
        router.push("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(logOut);
  };

  return (
    <div>
      <h1>Meet's Home</h1>
      <button onClick={out}>Logout</button>
    </div>
  );
};

export default home;
