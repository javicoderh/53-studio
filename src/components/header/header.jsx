import React from "react";
import '../Landing/Landing.css'
import logo from '../../assets/logo.png'
import LogoutButton from "../usersManagement/LogoutButton";
import LoginButton from "../usersManagement/Loginbutton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const isAuthenticated = useAuth0();

    return (
     <header className="header">
        <img className="logo" src={logo} alt="" height={100} />
        <h1>Studio 53</h1>      
        {isAuthenticated && <LogoutButton />}
    </header>
          
    );
  };
  
  export default Header;