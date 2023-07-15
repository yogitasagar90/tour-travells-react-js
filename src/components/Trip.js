import './TripStyles.css';
import TripData from './TripData';

function Trip(){
    return(
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>Tou can discover unique destinations using Google Maps.</p>
            <div className='tripcard'>
                <TripData
                image='https://www.globaltimes.cn/Portals/0/attachment/2017/2017-01-17/92710d5a-bbc5-4817-829a-67dcb1aa065d.jpg'
                heading='Trip in Shimala'
                text='Shimla is the capital of Himachal Pradesh, well known for its beautiful pine and oak forests, gorgeous Himalayan foothills, colonial-style buildings, and handicraft shops. Shimla is one of the best destinations for honeymoons with its snow-covered mountains and lush greenery. Mall Road is the hottest destination for hangouts, shopping, handicrafts, pottery, woolen clothes, wooden products, restaurants, and cafes. The Ridge road is an open space for cultural activities and is the connectivity for all the famous destinations.'
                />
                <TripData
                image='https://earthnworld.com/wp-content/uploads/2017/12/GULMARG.jpg'
                heading='Trip in Kashmir'
                text='Kashmir is the northernmost geographical region of the Indian subcontinent. Until the mid-19th century, the term "Kashmir" denoted only the Kashmir Valley between the Great Himalayas and the Pir Panjal Range. Today, the term encompasses a larger area that includes the India-administered territories of Jammu and Kashmir and Ladakh, the Pakistan-administered territories of Azad Kashmir and Gilgit-Baltistan, and the Chinese-administered territories of Aksai Chin and the Trans-Karakoram Tract.'
                />
                <TripData
                image='https://th.bing.com/th/id/R.e871da359a5f0da8101825a87d43b2f9?rik=X5qhbn%2f6TUOW8g&riu=http%3a%2f%2fwww.klik.gr%2fuploads_image%2f2016%2f01%2f22%2fp1a9karl3a4ngf9d87hkf5kd_900.jpg&ehk=w%2b1k52EwzSM4EE43Kn6BYMn%2feYL7VbFmFa8wU9kHMFs%3d&risl=&pid=ImgRaw&r=0'
                heading='Trip in rajasthan'
                text='Rajasthan is a state in northern India. It covers 342,239 square kilometres (132,139 sq mi) or 10.4 per cent of Indias total geographical area. It is the largest Indian state by area and the seventh largest by population. It is on Indias northwestern side, where it comprises most of the wide and inhospitable Thar Desert (also known as the Great Indian Desert) and shares a border with the Pakistani provinces of Punjab to the northwest and Sindh to the west, along the Sutlej-Indus River valley. southeast; and Gujarat to the southwest.'
                />
            </div>
        </div>
    );
}
export default Trip;

