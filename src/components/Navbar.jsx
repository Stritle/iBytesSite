import React, { useState } from 'react'
import logo from '../imgs/logo.png'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
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
                    <img src={logo} alt="Ignitedbytes"></img>
                </div>

                <div className="navLinks">
                    <ul>
                        <li><Link to="#about">Sobre</Link></li>
                        <li><Link to="#serviços">Serviços</Link></li>
                        <li><Link to="#trabalhos">Portefólio</Link></li>
                        <li><Link to="#contactos">Contactos</Link></li>

                    </ul>
                </div>

                <div className="navSocial">
                    <a href="https://www.facebook.com/ignitedbytes"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/ignitedbytes/?hl=pt"><FaInstagram /></a>
                    <a href="https://wa.me/351934425911" ><FaWhatsapp /></a>
                    <a href="mailto:ignitedbytes@gmail.com?subject=Hello%20again"><FaRegEnvelope /></a>
                </div>

            </div>
            <a className="navBtn" onClick={handleToggle}><FaAlignJustify /></a>
            {
                isOpen ? <div className="navLinksMobile">
                    <ul>
                        <li><Link to="#aboutMobile" onClick={handleToggle}>Sobre</Link></li>
                        <li><Link to="#serviços" onClick={handleToggle}>Serviços</Link></li>
                        <li><Link to="#trabalhos" onClick={handleToggle}>Portefólio</Link></li>
                        <li><Link to="#contactos" onClick={handleToggle}>Contactos</Link></li>
                    </ul>
                    <div className="logo"><img src={logo} alt="Ignitedbytes"></img></div>
                    <div className="navSocialMobile">

                        <a href="https://www.facebook.com/ignitedbytes"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/ignitedbytes/?hl=pt"><FaInstagram /></a>
                        <a href="https://wa.me/351934425911" ><FaWhatsapp /></a>
                        <a href="mailto:ignitedbytes@gmail.com?subject=Hello%20again"><FaRegEnvelope /></a>
                    </div>
                </div>
                    : <div></div>

            }
        </>
    )
}

export default Navbar
