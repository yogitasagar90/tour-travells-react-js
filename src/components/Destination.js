import DestinationData from './DestinationData';
import './DestinationStyles.css';

const Destination = () => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot,within a time frame.</p>
            <DestinationData
                className='first-des'
                heading='Jaipur'
                text='Jaipur is a regal paradise of culture and legacy, rich with architectural jewels, and is affectionately dubbed "The Pink City" for the pink color of its old structures. City Palace provides you a sense of the opulent lifestyle enjoyed by Jaipurs royal family. The astronomy equipment of the Jantar Mantar observatory, located just next door, brings the wonders of space to Earth.'
                img1='https://www.voyageinde.fr/cdn/in-public/jaipur.jpg'
                img2='https://i.pinimg.com/originals/3b/ce/c6/3bcec66d24088a5356538543279e248e.jpg'
            />
            <DestinationData
                className='first-des-reverse'
                heading='Manali'
                text='Manali is a town, near Kullu town in Kullu district in the Indian state of Himachal Pradesh. It is situated in the northern end of the Kullu Valley, formed by the Beas River. The town is located in the Kullu district, approximately 270 kilometres (170 mi) north of the state capital of Shimla and 544 kilometres (338 mi) northeast of the national capital of New Delhi. With a population of 8,096 people recorded in the 2011 Indian census Manali is the beginning of an ancient trade route.'
                img1='https://wallpaperaccess.com/full/4802552.jpg'
                img2='https://th.bing.com/th/id/R.763b5c119c2d7a5b37f7dafe66a5d6ef?rik=o5gzEly2Z1Vv9g&riu=http%3a%2f%2fwww.irrawaddy.com%2fwp-content%2fuploads%2f2016%2f10%2fSTV_5561.jpg&ehk=dA5YXens407r6K9G4s3Bl21aSaieEB4BKRxUOaVBj3U%3d&risl=&pid=ImgRaw&r=0'
            />
        </div>
    );
};
export default Destination;