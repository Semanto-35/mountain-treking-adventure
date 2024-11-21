import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import bgImage from '../assets/Animated Shape.svg'
import 'animate.css';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const AdventureCards = () => {
  const allData = useLoaderData();

  return (
    <div style={{ backgroundImage: `url('${bgImage}')` }} className="px-4  py-20 bg-cover bg-no-repeat bg-center">
      <div className="mb-12 text-center">
        <h4 className="font-medium text-lg md:text-xl animate__animated animate__fadeInLeft">Find your Best Adventure</h4>
        <h3 className="font-bold text-4xl md:text-5xl animate__animated animate__fadeInRight">Experience Adventure Ideas</h3>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // centeredSlides={true}
        style={{
          '--swiper-navigation-color': '#2f27ce',
          '--swiper-pagination-color': '#2f27ce',
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {
          allData.map((adventure) => <SwiperSlide key={adventure.id}>
            <div className="card bg-[#f7f7f7] shadow-2xl mb-8">
              <figure className="overflow-hidden">
                <img className="w-full h-80 object-cover transform transition-transform duration-300 hover:scale-110"
                  src={adventure.image}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[#2a9d8f]">{adventure.adventureTitle}</h2>
                <p className="font-semibold text-lg">Eco-Friendly Features:</p>
                {
                  adventure.ecoFriendlyFeatures.map((spa, index) => <li className="list-decimal text-[#09080F]/60" key={index}>{spa}</li>
                  )
                }
                <div className="card-actions mt-5">
                  <Link to={`/details/${adventure.id}`} className="btn
                  bg-[#2a9d8f] text-lg text-white">Explore Now</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default AdventureCards;