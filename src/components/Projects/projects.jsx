import React from "react";
import './projects.css'
import { FaEye } from "react-icons/fa";

const Projects = () => {
    return(
        
        <div className="projects" id="projects">
            <div className="projects-title">
                <h3>Meu trabalho</h3>
                <p>Veja projetos em destaque</p>
            </div>

            <div className="projects-cards">
                <div className="project">
                    <img src="/barbershop-pic.png" alt="" />
                    <p><strong>Barbershop landing page</strong> <button><a href="https://barbershop-landing-page-pi.vercel.app" target="blank"><FaEye /> Deploy</a></button></p>
                    <p>Landing page para uma barbearia, destacando serviços, estilo e agendamento prático, com design moderno. </p>
                </div>

                <div className="project">
                    <img src="/elddora.png" alt="" />
                    <p><strong>Elddora University</strong> <button><a href="https://elddora-university.vercel.app" target="blank"><FaEye /> Deploy</a></button></p>
                    <p>Webpage institucional para uma universidade</p>
                </div>

                <div className="project">
                    <img src="/lolpage-pic.png" alt="" />
                    <p><strong>League of Legends webpage</strong> <button><a href="https://lol-webpage-40.vercel.app" target="blank"><FaEye /> Deploy</a></button></p>
                    <p>Webpage inspirada no jogo League of Legends. </p>
                </div>
            </div>
        </div>
    )
}

export default Projects