import React, { useState } from 'react'
import logo from '../imgs/logo.png'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaAlignJustify } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="navbar" >
                <div className="navLogo">
                    <img src={logo}></img>
                </div>

                <div className="navLinks">
                    <ul>
                        <li><Link to="#about">Sobre</Link></li>
                        <li><Link to="#serviços">Serviços</Link></li>
                        <li><Link to="#trabalhos">Outros Trabalhos</Link></li>
                        <li><Link to="#contactos">Contactos</Link></li>

                    </ul>
                </div>

                <div className="navSocial">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaWhatsapp />
                    <FaLinkedinIn />
                    <FaRegEnvelope />
                </div>

            </div>
            <a className="navBtn" onClick={handleToggle}><FaAlignJustify /></a>
            {
                isOpen ? <div className="navLinksMobile">
                    <ul>
                        <li><Link to="#aboutMobile" onClick={handleToggle}>Sobre</Link></li>
                        <li><Link to="#serviços" onClick={handleToggle}>Serviços</Link></li>
                        <li><Link to="#trabalhos" onClick={handleToggle}>Outros Trabalhos</Link></li>
                        <li><Link to="#contactos" onClick={handleToggle}>Contactos</Link></li>
                    </ul>
                </div>
                    : <div></div>

            }
        </>
    )
}

export default Navbar
