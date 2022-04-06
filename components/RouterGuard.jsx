import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const RouterGuard = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    const check = () => {
      if (!user) {
        router.replace("/auth/login");
        return <h1>Loading...</h1>;
      }
    };
     check();
  }, [router, user]);

  return <>{children}</>;
};

export default RouterGuard;
