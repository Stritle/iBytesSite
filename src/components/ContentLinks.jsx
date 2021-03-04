import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../imgs/logo.png'

export default class ContentLinks extends Component {
    render() {
        return (
            <div className="content-links">

                <div className="container-content-links">
                    <Link to="#"><img src={logo} alt="IgnitedBytes" width="100%" ></img></Link>
                    {/* <p>Telefone:+351 934 425 911</p>
                    <p>E-mail: info@ignitedbytes.pt</p>
                    <p>Largo Doutor Henrique Botelho Filho,<br></br>
                    3c 2ºEsquerdo<br></br>
                     5000-665 Vila Real - Portugal</p> */}
                </div>
                <div className="container-content-links-1">
                    <a href="#ancora-marketing">SEO</a><br></br>
                    <a href="#ancora-marketing">Redes Sociais</a><br></br>
                    <a href="#ancora-marketing">Google Adwords</a><br></br>
                    <a href="#ancora-marketing">E-mail Marketing</a>
                </div>
                <div className="container-content-links-1">
                    <a href="#ancora-websites">Dominios</a><br></br>
                    <a href="#ancora-websites">Websites</a><br></br>
                    <a href="#ancora-websites">E-commerce</a><br></br>
                    <a href="#ancora-websites">Landing-Pages</a><br></br>
                    <a href="#ancora-websites">Alojamento Web</a>
                </div>
                <div className="container-content-links-1">

                    <a href="#ancora-websites">Portefólio</a><br></br>
                    <a href="#ancora-websites">E-commerce</a><br></br>
                    <a href="#ancora-websites">Landing-Pages</a><br></br>
                    <a href="#ancora-websites">Alojamento Web</a>

                </div>

            </div>
        )
    }
}
