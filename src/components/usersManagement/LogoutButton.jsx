import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../Landing/Landing.css'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
