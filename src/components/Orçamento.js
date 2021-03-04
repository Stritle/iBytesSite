import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const Orçamento = () => {
    const [showParagraph, setSowParagraph] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9f8881q', 'ignitedbytes_email', e.target, 'user_POeHWNCfq0ManJeMLGMx7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setTimeout(() => {
            e.target.reset();
            setSowParagraph({ showParagraph: true });
        }, 1000);
    }



    return (
        <div className="orçamento" id="orçamento">

            <div className="orçamento-text">
                <h1> Sobre a IgnitedBytes</h1><br></br>
                <p>Somos a IgnitedBytes, uma Agência de Marketing Digital, Criação de Websites e Design Gráfico com sede em Vila Real.</p><br></br>

                <p>A nossa equipa de criativos, designers, web developers e digital marketers tem um espírito criativo, ideias frescas e uma enorme capacidade de aceitar e abraçar desafios, para ir ao encontro das suas ideias de negócio.</p><br></br>

                <p>Confie-nos a criação ou reformulação do seu website! A nossa vasta experiência em desenvolvimento web para clientes das mais diversas áreas de atuação, garante-lhe a criação de uma plataforma moderna, organizada e com fácil gestão de conteúdos através de um backoffice simplificado e intuitivo.</p>
                <br></br> <p><b>A nossa agência de marketing ajuda-o em tudo o que precisa para atrair novos clientes e fechar mais negócios! Entre em contacto connosco! </b></p>
            </div>
            <div className="orçamento-dados" id="orçamento-dados">

                <h1> PEÇA ORÇAMENTO DOS NOSSOS SERVIÇOS</h1><br></br>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <label>Nome:</label>
                    <input className="textarea" type="text" name="name" />
                    <label>Email:</label>
                    <input className="textarea" type="email" name="email" />
                    <label>Telefone:</label>
                    <input className="textarea" type="text" name="telefone" />
                    <label>Fale-nos do seu projeto:</label>
                    <textarea className="textAreaLarge" name="message" />
                    <div className="btn-center">
                        <input className="button" type="submit" value="Submeter Mensagem" />
                    </div>
                    <h4>{showParagraph ? "Mensagem enviada com sucesso!" : null}</h4>
                </form>



            </div >

        </div >
    )
}

export default Orçamento;