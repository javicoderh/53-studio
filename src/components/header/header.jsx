import React from "react";
import '../Landing/Landing.css'
import logo from '../../assets/logo.png'
import LogoutButton from "../usersManagement/LogoutButton";
import LoginButton from "../usersManagement/Loginbutton";

const Header = () => {

    return (
     <header className="header">
        <img className="logo" src={logo} alt="" height={100} />
        <h1>Studio 53</h1>        
    </header>
          
    );
  };
  
  export default Header;