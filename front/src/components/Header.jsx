import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/Header.css";

function Header() {
    return (
        <div className="HeaderContainer">
            <div className="Menu">
                <Link to={`/`}>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                
                <div className="LienMenu">
                    <Link to={`/`}>
                        <div>Accueil</div>
                    </Link>

                    <Link to={`...`}>
                        <div>Profil</div>
                    </Link>

                    <Link to={`...`}>
                        <div>Réglage</div>
                    </Link>

                    <Link to={`...`}>
                        <div>Communauté</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header