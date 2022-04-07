import React from "react";
import Logout from "../components/Auth/Logout";
import {withProtected} from "../components/RouterGuard";
const home = () => {
  return (
    <div>
      <h1>{"Meet's Home"}</h1>
      <Logout />
    </div>
  );
};

export default withProtected(home);
