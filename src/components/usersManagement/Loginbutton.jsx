import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <button
        onClick={() =>
          loginWithRedirect({
            redirectUri: window.location.origin,
          })
        }
        style={{ padding: "1rem 2rem", fontSize: "1.2rem", cursor: "pointer" }}
      >
        Log In
      </button>
    </div>
  );
};

export default LoginButton