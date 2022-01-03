import React, { Component } from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'


export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="socialMediaIcons">
                    <a href="https://www.facebook.com/ignitedbytes"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/ignitedbytes/?hl=pt"><FaInstagram /></a>
                    <a href="https://wa.me/351934425911" ><FaWhatsapp /></a>
                    <a href="mailto:ignitedbytes@gmail.com?subject=Hello%20again"><FaRegEnvelope /></a>
                </div>
                {/* http://m.me/zitacletomakeup"  messenger */}
                <div className="footer-text">

                    <p>  IgnitedBytes –  Todos os direitos reservados<b> © 2022 </b></p>
                </div>
                <div className="footer-links">
                    <Link to="/politicadeprivacidade">Politica de Privacidade</Link>
                </div>



            </div>
        )
    }
}
