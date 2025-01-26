import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const handleLogin = async () => {
    // Redirigir al login de Auth0
    await loginWithRedirect({
      authorizationParams: {
        redirect_uri: "https://53-studio.vercel.app", // URL de tu frontend
        prompt: "login",
      },
    });

    // Si el usuario está autenticado, enviar los datos al backend
    if (isAuthenticated && user) {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.sub, // ID único del usuario desde Auth0
            userName: user.name, // Nombre del usuario desde Auth0
          }),
        });

        const data = await response.json();
        console.log("Login result:", data);
        alert(`Welcome ${user.name}, your role is: ${data.role}`);
      } catch (error) {
        console.error("Error registering/verifying user:", error);
      }
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <button
        onClick={handleLogin}
        style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          cursor: "pointer",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default LoginButton;
