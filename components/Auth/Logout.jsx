import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const Logout = () => {

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
    <>
      <button onClick={out}>Logout</button>
    </>
  )
}

export default Logout