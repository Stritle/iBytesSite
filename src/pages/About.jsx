import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const About = () => {
    return (
        <div className="about" >
            <div id="about">
                <h4>Creative Agency</h4>
                <h1>IgnitedBytes</h1>
                <p>Na Ignitedbyes presamos pela satisfação do cliente a todos os niveis,
                    desde o inicio do projeto até ao final. O que mais nos satisfaz é ter o cliente totalmente satisfeito
                    e com os objetivos que desejava alcançaar com o projeto, serem concretizados.</p>
                <b className='bold'>Somos mais do que uma agência de marketing digital!</b>
                <p>O que fazemos? Criamos uma estratégia de marketing digital à medida de cada um dos nossos clientes.</p>
                <p className='lastP'>Fala connosco. Nós vamos dar à tua empresa o impulso que precisa para conquistar a tua área de negócio.</p>
                <Link to="#contactos">Contactos</Link>
            </div>
            <div id="aboutMobile">
                {/*Div para imagem about - Associada ao Background da div no css*/}
            </div>

        </div>
    )
}

export default About
