import React from 'react'
import ServiçosComponent from '../components/ServiçosComponent'
import logoMarketing from '../imgs/marketingImg.png'

const Serviços = () => {
    return (
        <div className="serviços" id="serviços">
            <div className="serviçosDescrição" >

                <h1>Os nossos serviços</h1>


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