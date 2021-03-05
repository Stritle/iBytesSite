import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';




const Contactos = () => {

    const [openModal, setIsOpenModal] = useState(false);
    const [showParagraph, setShowParagraph] = useState(false);

    // variaveis validação 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [message, setMessage] = useState("");
    // variaveis validação erro

    const [firstNameErro, setFirstNameErro] = useState("");
    const [lastNameErro, setLastNameErro] = useState("");
    const [emailErro, setEmailErro] = useState("");
    const [telefoneErro, setTelefoneErro] = useState("");
    const [messageErro, setMessageErro] = useState("");
    const [messageSuccess, setMessageSuccess] = useState("");

    const handleToggleModal = () => setIsOpenModal(!openModal)

    const validate = () => {

        if (!firstName) {
            setFirstNameErro("O nome não pode estar em branco.")
            return false;
        }
        if (!lastName) {
            setLastNameErro("O nome não pode estar em branco.")
            return false;
        }
        if (!email.includes('@')) {
            setEmailErro("Endereço de Email Inválido")
            return false;

        } if (telefone.length < 9) {
            setTelefoneErro("o telefone deve conter 9 digitos.")
            return false;
        }
        if (!message) {
            setMessageErro("A mensagem não pode estar vazia.")
            return false;
        }
        return true;
    }

    const sendEmail = (e) => {
        e.preventDefault();

        const isValid = validate();
        if (isValid) {
            emailjs.sendForm('service_9f8881q', 'ignitedbytes_email', e.target, 'user_POeHWNCfq0ManJeMLGMx7')
                .then((result) => {
                    console.log(result.text);

                }, (error) => {
                    console.log(error.text);
                });

            setTimeout(() => {
                e.target.reset();
                setFirstName("");
                setFirstNameErro("");
                setLastName("");
                setLastNameErro("");
                setEmail("");
                setEmailErro("");
                setTelefone("");
                setTelefoneErro("");
                setMessage("");
                setMessageErro("");
                setMessageSuccess("Mensagem enviada com sucesso")
            }, 1000);
        }
    }


    return (<>
        <div className="containerContactos" id="contactos">
            <div className="containerContactosTitle"><h1>Tem alguma dúvida ?  </h1></div>
            <div className="containerContactosBtn"><a href="https://wa.me/351934425911">Falar com um Web Designer</a>
                <a onClick={handleToggleModal}>Enviar Mensagem</a>
            </div>

        </div>
        <div className="modalContactos">



            <div className={openModal ? "show-modal" : "show-modal-off"}>
                <h1>Mensagem</h1>

                <form className="contactForm" onSubmit={sendEmail}>
                    <select name="service" >
                        <option value="">Tipo de Serviço</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Marketing Digital">Marketing Digital</option>
                        <option value="Branding">Branding</option>
                    </select><br />
                    <input type="text" name="firstName" placeholder="Primeiro Nome" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    {firstNameErro}
                    <input type="text" name="lastName" placeholder="Ultimo Nome" value={lastName} onChange={e => setLastName(e.target.value)} /><br />
                    {lastNameErro}
                    <input type="text" name="email" placeholder="Endereço de Email" value={email} onChange={e => setEmail(e.target.value)} />
                    {emailErro}
                    <input type="number" name="telefone" placeholder="Número de Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} /><br />
                    {telefoneErro}
                    <textarea name="message" placeholder="Mensagem" value={message} onChange={e => setMessage(e.target.value)}></textarea><br />
                    {messageErro}
                    <input type="submit" className="btn-submit" value="Enviar Mensagem" />
                    {messageSuccess}
                </form>
                <a className="btnContactos" onClick={handleToggleModal}> <AiOutlineCloseCircle /></a>
                <div className="logoContactos"></div>
                <div className="socialModal">
                    <a href="https://www.facebook.com/ignitedbytes"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/ignitedbytes/?hl=pt"><FaInstagram /></a>
                    <a href="https://wa.me/351934425911" ><FaWhatsapp /></a>
                    <a href="mailto:ignitedbytes@gmail.com?subject=Email%20Ignited"><FaRegEnvelope /></a>
                </div>
            </div>
        </div>
    </>
    )
}
export default Contactos;