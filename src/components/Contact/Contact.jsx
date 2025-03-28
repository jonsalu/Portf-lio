import React from "react";
import './contact.css'
import { FaWhatsapp } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"


const Contact = () => {
    return(
        <div className="contact" id="contact">
            <div className="contact-title">
                <h1>Contato</h1>
            </div>

            <ul className="contacts">
                <li><a href="https://wa.me/+5579999394452" target="blank"><FaWhatsapp /> (79) 9 9939-4452</a></li>
                <li><a href="mailto:jonathansalustiano@hotmail.com" target="blank"><PiMicrosoftOutlookLogoFill /> jonathansalustiano@hotmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/jonathan-salustiano-8174671a3/" target="blank"><FaLinkedin /> Linkedin</a></li>
                <li><a href="https://github.com/jonsalu"><FaGithub /> GitHub</a></li>
            </ul>

            <div className="link-back">
                <a href="#header">Voltar ao topo</a>
            </div>
        </div>
    )
}

export default Contact