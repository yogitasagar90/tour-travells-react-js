import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Imbbbb from '../assets/dd.png';
import Footer from '../components/Footer';
import Trip from '../components/Trip';

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid2'
                heroImg={Imbbbb}
                title='Service'
                btnClass='hide'
            />
            <Trip />
            <Footer />
        </>
    )
}
export default Service;