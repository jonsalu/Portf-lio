import React from "react";
import './home.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const Home = () => {
    return(
        <div className="home" id="home">
            <div className="first-text">
                <p>Hello world! Meu nome é <span>Jonathan Salustiano</span>, e sou</p>
                <h1>Desenvolvedor Front End</h1>
                <p>Sou estudante de <span>Análise e Desenvolvimento de Sistemas</span> e desenvolvo interfaces intuitivas e responsivas para aplicações web.</p>
            </div>

            <ul className="skills">
                <li><FaHtml5 />HTML</li>
                <li><FaCss3Alt />CSS</li>
                <li><IoLogoJavascript />Javascript</li>
                <li><FaReact />React</li>
            </ul>
        </div>
    )
}

export default Home
