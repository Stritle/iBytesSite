import videoBackground from '../imgs/videoContainer.mp4'
import Navbar from '../components/Navbar'
import logo from '../imgs/logo.png'
import About from './About'
import Serviços from './Serviços'
import Contactos from '../components/Contactos'
import ContentLinks from '../components/ContentLinks'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <div className="home">
                <Navbar />

                <div className="content-background">
                    <video autoPlay muted loop playsinline >
                        <source src={videoBackground} type="video/mp4"></source>
                    </video>
                    <div className="container">
                        <img src={logo}></img>
                        <h1>We make</h1><h1> digital beautiful!</h1>
                        <h6>______</h6><br />
                        <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.
                        Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com
                        mais de 2000 anos. Richard McClintock, um professor de Latim no Colégio Hampden
                             -Sydney, na Virgínia, procurou uma das palavras em Latim mai</p>

                    </div>
                </div>

            </div>
            <About />
            <Serviços />
            <Contactos />
            <ContentLinks />
            <Footer />

        </>

    )
}

export default Home;
