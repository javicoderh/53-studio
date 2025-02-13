import React from "react";
import '../Landing/Landing.css'
import logo from '../../assets/Logo.png'
import LogoutButton from "../usersManagement/LogoutButton";
import LoginButton from "../usersManagement/Loginbutton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

    return (
     <header className="header">
        <img className="logo" src={logo} alt="" height={135} />
        <h1>Studio 53</h1>  
        {isAuthenticated && <img className="userPic" src={user.picture} height={50} />}    
        {isAuthenticated && <LogoutButton /> }
    </header>
          
    );
  };
  
  export default Header;