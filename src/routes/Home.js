import Destination from '../components/Destination';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Trip from '../components/Trip';

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName='hero'
                heroImg='https://th.bing.com/th/id/R.122e08b54b8ffbca6b09c7620a1a8ba0?rik=y4ZcJXiIJ4tVRg&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f22600000%2fFall-beautiful-nature-22666764-900-562.jpg&ehk=p4f%2bZhciSkuAKR8djLfLv0EVUXrJ2OR5RWVOkVQMYjU%3d&risl=&pid=ImgRaw&r=0'
                title='! Its All About The JOURNEY !'
                text='Choose Your Favourite Destination.'
                buttonText='Travel Plan'
                url='/'
                btnClass='show'
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    )
}
export default Home;