import React from 'react'

const About = () => {
    return (
        <div className="about" >
            <div id="about">
                <h4>Creative Agency</h4>
                <h1>IgnitedBytes</h1>
                <p>Na Ignitedbyes presamos pela satisfação do cliente a todos os niveis,
                desde o inicio do projeto até ao final. O que mais satisfaz é ter o cliente totalmente satisfeito
                     e com os objetivos que desejava alcançaar com o projeto a ser alcançados.</p>
                <a>Contacte-nos</a>
            </div>
            <div id="aboutMobile">
                {/*Div para imagem about - Associada ao Background da div no css*/}
            </div>

        </div>
    )
}

export default About
