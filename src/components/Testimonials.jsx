import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import bgImg from '../assets/Sprinkle.svg'
import 'animate.css';


const Testimonials = () => {

  const reviews = [
    {
      "id": 1,
      "name": "Emily Green",
      "review": "The mangrove forest tour was unforgettable! The guide's knowledge and the eco-friendly approach made it extra special.",
      "rating": 4.8,
      "image": "https://i.ibb.co/XkrNjSH/weman-1.jpg",
      "profession": "Environmental Scientist"
    },
    {
      "id": 2,
      "name": "Michael Rivera",
      "review": "Camping retreat in the mountains was breathtaking! Loved the eco-friendly initiatives, though the nights were a bit chilly.",
      "rating": 4.5,
      "image": "https://i.ibb.co/YX7nNFH/man-1.jpg",
      "profession": "Photographer"
    },
    {
      "id": 3,
      "name": "Aisha Khan",
      "review": "Ocean dive experience was thrilling! The instructors emphasized conservation and safety, making it enriching and fun.",
      "rating": 4.9,
      "image": "https://i.ibb.co/CJ1gytk/man-2.jpg",
      "profession": "Marine Biologist"
    },
    {
      "id": 4,
      "name": "Raj Patel",
      "review": "Wildlife safari provided close encounters with animals in their natural habitat. A bit pricey, but well worth it for true nature lovers.",
      "rating": 4.7,
      "image": "https://i.ibb.co/FmbwLwL/man-3jpg.jpg",
      "profession": "Travel Blogger"
    },
    {
      "id": 5,
      "name": "Sophie Martinez",
      "review": "River adventure was a perfect mix of excitement and relaxation. Appreciated the sustainability efforts and experienced guides.",
      "rating": 4.6,
      "image": "https://i.ibb.co/zRdMfRg/women-2.jpg",
      "profession": "Outdoor Enthusiast"
    }
  ];

  return (
    <div style={{ backgroundImage: `url('${bgImg}')` }} className="bg-no-repeat bg-cover bg-center">
      <div className="py-20 rounded shadow bg-black bg-opacity-5 px-4">
        <div className="mb-12 text-center">
          <h4 className="font-medium text-lg md:text-xl animate__animated animate__fadeInLeft">Client Testimonials</h4>
          <h3 className="font-bold text-4xl md:text-5xl animate__animated animate__fadeInRight">What Our Adventurous Client Say</h3>
        </div>
        <div className="space-y-4 flex flex-col-reverse md:flex-row gap-8 justify-center items-center">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper w-full md:w-1/2"
          >
            {reviews.map((review) => (<SwiperSlide key={review.id}>
              <div className="flex flex-col justify-center items-center text-center w-11/12 mx-auto p-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-48 h-48 rounded-full object-cover"
                />
                <div className="mt-6">
                  <p className="text-lg w-11/12  md:w-1/2 mx-auto">"{review.review}"</p>
                  <p className="text-lg font-semibold mt-5">{review.name}</p>
                  <p>{review.profession}</p>
                  <div className="flex  items-center justify-center gap-2">
                    <div className="rating rating-md">
                      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                      <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="text-xl">{review.rating}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>))}
          </Swiper>
          <div className='md:w-1/2 w-full h-full '>
            <img className='w-full h-full rounded-md' src="https://i.ibb.co/k6g6fCQ/Testimonial.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;