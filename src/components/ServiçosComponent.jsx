import React from 'react'
import { Link } from 'react-router-dom';

const ServiçosComponent = ({ title, descriçao, sourceImg }) => {

    return (
        <div className="contentServiçosComponent">
            <img src={sourceImg} alt={title}></img>
            <h1>{title}</h1>
            <p>{descriçao}</p>

            <Link to="serviços">Saber Mais</Link>
            <div></div>
            {/* <div className="branding" id="branding">
                        <h1>Branding</h1>
                        <h6>____</h6>
                        <p>
                            Ter uma marca com personalidade e propósito, criar identificação com as pessoas, com suas
                            histórias e suas causas. Assim, promover boas experiências de marca é a chave para a recomendação,
                            que hoje é uma das armas mais poderosas para aquisição de novos clientes.
                          </p>

                        <div className="containerImgBranding">

                            <img src={brandingImg} />
                            <div className="containerTextBranding">
                                <p>
                                    <i>
                                        "Uma marca é um conjunto de expectativas, memórias, histórias e relacionamentos que, juntos,
                        são responsáveis por fazer o consumidor escolher um produto ou serviço em vez de outro."<br /><br />
                        Seth Godin
                    </i>
                                </p>
                            </div>
                        </div>



                    </div>



                    <div className="webDesign" id="webDesign">
                        <h1>Web Design</h1>
                        <h6>_____</h6>
                        <div className="containerImgWebdesign">
                            <img />
                            <img />
                            <img />
                            <img />

                        </div>
                        <div className="containerTextWebdesign">
                            <p>

                                Web Design
                                Um Website é uma presença online essencial, assumindo-se a morada virtual de uma marca.

                                Os nossos websites são construídos em formato responsive, e pensados para permitir uma fácil navegação, aliada a um Design moderno e apelativo aos utilizadores cada vez mais exigentes.
                                Através do E-commerce ajudamos a levar o seu negócio mais além, encontrar potenciais clientes e aumentar vendas.

                                Aposte numa comunicação online estruturada, através dos seguintes meios:

                                Websites
                                Lojas online (E-Commerce)
                                Landing Pages
        </p>
                        </div>


                    </div>



                    <div className="marketing" id="marketing">
                        <h1>Marketing Digital & SEO</h1>
                        <h6>_____</h6>
                        <p>
                            Garantimos uma identidade única para as suas redes sociais, com conteúdos planeados
                            estrategicamente, dinâmicos e interactivos, que apelem ao seu público-alvo
                            e atraiam novos seguidores.

                            A Newsletter é outra ferramenta de marketing digital essencial que utilizamos como estratégia para a sua empresa, para divulgar notícias, novidades ou conteúdos relevantes aos clientes.

                            Através do SEO, trabalhamos estratégias com o objetivo de conferir maior visibilidade aos websites e conquistar um melhor posicionamento no ranking de resultados dos motores de pesquisa.
              </p>
                    </div> */}
        </div>
    )
}



export default ServiçosComponent;
