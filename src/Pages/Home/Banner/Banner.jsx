import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/image/college1.png'
import img2 from '../../../assets/image/college2.png'
import img3 from '../../../assets/image/college3.jpg'
import img4 from '../../../assets/image/college4.png'
import img5 from '../../../assets/image/college5.jpg'
import img6 from '../../../assets/image/college6.jpg'

const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={img1} alt="" />
          </div>
        <div>
            <img src={img2} />
            
        </div>
        <div>
            <img src={img3} />
        </div>
        <div>
            <img src={img4} />
        </div>
        <div>
            <img src={img5} />
        </div>
        <div>
            <img src={img6} />
        </div>
    </Carousel>
    );
};

export default Banner;