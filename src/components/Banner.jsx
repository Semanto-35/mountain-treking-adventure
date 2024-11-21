import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'animate.css';

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/r47VQ9Y/cool-background-1.jpg" className="w-full h-[550px] object-cover" />
          <div className="absolute top-1/3 left-32 w-1/2 space-y-2">
            <h4 className="text-2xl font-medium text-white animate__animated animate__fadeInDownBig animate__repeat-1	1">Mountain Trekking</h4>
            <h2 className="text-4xl font-semibold text-white animate__animated animate__fadeInUpBig animate__repeat-1	1">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/ynsVzsC/slider-4.jpg" className="w-full h-[550px] object-cover" />
          <div className="absolute top-1/3 left-32 w-1/2 space-y-2">
            <h4 className="text-2xl font-medium text-white animate__animated animate__fadeInDownBig animate__repeat-1	1">Mountain Trekking</h4>
            <h2 className="text-4xl font-semibold text-white animate__animated animate__fadeInUpBig animate__repeat-1	1">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/HHSRqH3/slider-2.jpg" className="w-full h-[550px] object-cover" />
          <div className="absolute top-1/3 left-32 w-1/2 space-y-2">
            <h4 className="text-2xl font-medium text-white animate__animated animate__fadeInDownBig animate__repeat-1	1">Mountain Trekking</h4>
            <h2 className="text-4xl font-semibold text-white animate__animated animate__fadeInUpBig animate__repeat-1	1">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/pjr16GM/slider-3.jpg" className="w-full h-[550px] object-cover" />
          <div className="absolute top-1/3 left-32 w-1/2 space-y-2">
            <h4 className="text-2xl font-medium text-white animate__animated animate__fadeInDownBig animate__repeat-1	1">Mountain Trekking</h4>
            <h2 className="text-4xl font-semibold text-white animate__animated animate__fadeInUpBig animate__repeat-1	1">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/XsxyFv8/slider-1.jpg" className="w-full h-[550px] object-cover" />
          <div className="absolute top-1/3 left-32 w-1/2 space-y-2">
            <h4 className="text-2xl font-medium text-white animate__animated animate__fadeInDownBig animate__repeat-1	1">Mountain Trekking</h4>
            <h2 className="text-4xl font-semibold text-white animate__animated animate__fadeInUpBig animate__repeat-1	1">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;