import React, { Component } from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import logo from '../imgs/logo.png'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="socialMediaIcons">
                    <FaFacebookF />
                    <FaInstagram />
                    < FaWhatsapp />
                    < FaLinkedinIn />
                    < FaRegEnvelope />
                </div>

                <div className="footer-text">

                    <p>  IgnitedBytes –  Todos os direitos reservados<b> © 2021 </b></p>
                </div>
                <div className="footer-links">
                    <Link to="/politicadeprivacidade">Politica de Privacidade</Link>
                </div>



            </div>
        )
    }
}
