import React from "react";
import './header.css'

const Header = () => {
    return(
        <div className="header" id="header">
            <div className="navbar">
                <a href="#home">Início</a>
                <a href="#projects">Projetos</a>
                <a href="#contact">Contato</a>
            </div>
        </div>
    )
}

export default Header