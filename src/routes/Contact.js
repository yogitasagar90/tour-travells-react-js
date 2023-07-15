import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Imbbb from '../assets/ccc.png';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero-mid1'
                heroImg={Imbbb}
                title='Contact'
                btnClass='hide'
            />
            <ContactForm/>
            <Footer />
        </>
    )
}
export default Contact;