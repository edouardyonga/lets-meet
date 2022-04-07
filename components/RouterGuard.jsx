import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

export const withPublic  = (Component) => {
  return function WithPublic(props) {
    const auth = useAuth();
    const router = useRouter();

    if (auth.user) {
      router.replace("/home");
      return <h1>Loading...</h1>;
    }
    return <Component {...props} />;
  };
}

export const withProtected = (Component) => {
  return function WithProtected(props) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.user) {
      router.replace("/auth/login");
      return <h1>Loading...</h1>;
    }
    return <Component {...props} />;
  };
}
