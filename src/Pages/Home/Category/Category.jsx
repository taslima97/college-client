import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Category.css'
import { EffectCoverflow, Pagination } from "swiper";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import image1 from "../../../assets/image/student1.jpg"
import image2 from "../../../assets/image/student2.jpg"
import image3 from "../../../assets/image/student3.png"
import image4 from "../../../assets/image/student.jpg"
import image5 from "../../../assets/image/student5.png"
import image6 from "../../../assets/image/student6.jpg"
import image7 from "../../../assets/image/student7.jpg"
import image8 from "../../../assets/image/student8.jpg"
import image9 from "../../../assets/image/student9.jpg"

const Category = () => {
    return (
     <section>
        <SectionTitle heading={'graduate group'}></SectionTitle>
         <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image9}/>
        </SwiperSlide>
      </Swiper>
     </section>
    );
};

export default Category;