import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Imbb from '../assets/bb.png';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid'
                heroImg={Imbb}
                title='About'
                btnClass='hide'
            />
            <AboutUs/>
            <Footer />
        </>
    )
}
export default About;