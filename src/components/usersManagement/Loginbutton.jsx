import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '.././Landing/Landing.css'
import Header from "../header/header";
import AnimatedDoors from "../reef/reef";

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
    <div className="landing-page">      
      <Header />
      <main className="main-content">
        <AnimatedDoors />
        <button
          className="login"
          onClick={handleLogin}
        >
          Login
        </button>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Studio 53. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoginButton;
