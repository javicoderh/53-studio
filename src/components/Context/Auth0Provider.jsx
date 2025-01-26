import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || "/");
  };

  return (
    <Auth0Provider
      domain="dev-epk0vphz3k7odhlz.us.auth0.com"
      clientId="Q9AsJxrTR2W6gbHz1pILLHrxLaRlt4b2"
      authorizationParams={{
        redirect_uri: "https://53-studio.vercel.app",
        prompt: "login"
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
