import React from "react";
import '../Landing/Landing.css'
import logo from '../../assets/logo.png'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../usersManagement/LogoutButton";
import LoginButton from "../usersManagement/Loginbutton";

const Header = () => {
    const isAuthenticated = useAuth0();

    return (
     <header className="header">
        <img className="logo" src={logo} alt="" height={100} />
        <h1>Studio 53</h1>
        {isAuthenticated ?  <LoginButton /> : <LogoutButton />}
    </header>
          
    );
  };
  
  export default Header;