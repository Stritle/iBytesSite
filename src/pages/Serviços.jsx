import React from 'react'
import ServiçosComponent from '../components/ServiçosComponent'
import logoMarketing from '../imgs/marketingImg.png'

const Serviços = () => {
    return (
        <div className="serviços" id="serviços">
            <div className="serviçosDescrição" >
                <div>
                    {/*Div para imagem Serviços - Associada ao Background da div no css*/}
                </div>
                <div>
                    <h1>Os nossos serviços</h1>
                    <h6><b>Somos mais do que uma agência de marketing digital!</b></h6>
                    <p>O que fazemos? Criamos uma estratégia de marketing digital à medida de cada um dos nossos clientes.</p>
                    <p>Nós somos criativos e irreverentes, mas sempre com um toque metódico!</p>
                    <p>Conquistamos pela diferença e por irmos para além do óbvio.</p>
                    <p> Queres encontrar o lugar ao sol da tua empresa no mundo online? Nós somos a agência de marketing digital que vai fazer isso acontecer!</p>
                    <p> Fala connosco. Nós vamos dar à tua empresa o impulso que precisa para conquistar a tua área de negócio.</p>
                </div>
            </div>

            <div className="tipoServiços">
                <ServiçosComponent sourceImg={logoMarketing}
                    title="Web Design"
                    descriçao="Ter uma marca com personalidade e propósito, criar identificação com as pessoas, com suas
                        histórias e suas causas. Assim, promover boas experiências de marca é a chave para a recomendação,
                        que hoje é uma das armas mais poderosas para aquisição de novos clientes." />

                <ServiçosComponent sourceImg={logoMarketing}
                    title="Marketing Digital"
                    descriçao="Ter uma marca com personalidade e propósito, criar identificação com as pessoas, com suas
                        histórias e suas causas. Assim, promover boas experiências de marca é a chave para a recomendação,
                        que hoje é uma das armas mais poderosas para aquisição de novos clientes." />
                <ServiçosComponent sourceImg={logoMarketing}
                    title="Branding" descriçao="Ter uma marca com personalidade e propósito, criar identificação com as pessoas, com suas
                        histórias e suas causas. Assim, promover boas experiências de marca é a chave para a recomendação,
                        que hoje é uma das armas mais poderosas para aquisição de novos clientes." />

                <ServiçosComponent sourceImg={logoMarketing}
                    title="Otimização SEO"
                    descriçao="Esteja à frente da sua concorrência sempre que o seu potencial 
                    cliente pesquisa pelos seus serviços ou produtos no Google. Otimizamos
                     o seu website para que possa estar mais próximo de ser contactado, 
                     sem ter de pagar para aparecer no topo dos resultados Google." />

                <ServiçosComponent sourceImg={logoMarketing}
                    title="Anúncios Google"
                    descriçao="Anuncie a sua empresa quando o seu potencial
                     cliente procura pelos seus serviços ou produtos. Publicidade na pesquisa 
                     Google e/ou Publicidade nos sites parceiros da Google, Publicidade no Youtube,
                      Publicidade Mobile e Publicidade no Google Shopping." />

                <ServiçosComponent sourceImg={logoMarketing}
                    title="Gestão de Redes Sociais"
                    descriçao="Gestão de redes sociais com conteúdos interativos e personalizados.
                       Interaja com os seus clientes utilizando conteúdo que realmente valorizam.
                        Gere leads e contactos diretos. Publicidade no Facebook, Instagram, LinkedIn e Twitter." />
            </div>
        </div >
    )
}
export default Serviços;