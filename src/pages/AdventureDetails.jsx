import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaUserTie } from "react-icons/fa";
import { FaMapLocationDot, FaRegCalendarDays } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { SiLevelsdotfyi } from "react-icons/si";
import { MdAirplaneTicket } from "react-icons/md";
import Swal from 'sweetalert2'

const AdventureDetails = () => {
  const { detailsId } = useParams();
  const allData = useLoaderData();
  const adventure = allData.find(item => item.id === parseInt(detailsId));

  const { image, adventureTitle, shortDescription, adventureCost, bookingAvailability, location, duration, includedItems, specialInstructions, maxGroupSize, ecoFriendlyFeatures, categoryName, adventureLevel } = adventure;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const currentTime = new Date().getHours();
  const handleTalkWithExpert = () => {
    if (currentTime >= 10 && currentTime <= 20) {
      window.open('https://meet.google.com', '_blank');
    } else {
      Swal.fire({
        title: "Consultation Time",
        text: "Talk to our expert between 10:00 am to 8:00 pm",
        icon: "info"
      });
    }
  };

  return (
    <div className="max-w-5xl mx-4 md:mx-auto p-6 md:p-12 mt-10 border my-12 bg-[#ced3db] text-[#333333] flex flex-col md:flex-row gap-10 rounded-md">
      <div data-aos="fade-up" className="w-full rounded-lg overflow-hidden">
        <img
          src={image}
          alt={adventureTitle}
          className="rounded-lg shadow-lg w-full h-80 md:h-full object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div>
        <h3 className="text-3xl text-[#2a9d8f] font-bold mb-2" data-aos="fade-right">
          {adventureTitle}
        </h3>
        <p className="text-lg mb-4" data-aos="fade-left">
          <strong>Category:</strong> {categoryName}
        </p>
        <div className="space-y-4">
          <p data-aos="fade-up" className="text-lg">
            <strong>Description:</strong> {shortDescription}
          </p>
          <div className="flex justify-between items-center">
            <p data-aos="fade-right" className="text-lg flex items-center gap-2">
              <RiMoneyDollarCircleFill className="text-[#2a9d8f]"/> {adventureCost}$ only
            </p>
            <p data-aos="fade-left" className="text-lg flex items-center gap-2">
              <FaUserTie className="text-[#2a9d8f]"/> {maxGroupSize} People
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p data-aos="fade-right" className="text-lg flex items-center gap-2">
              <FaMapLocationDot className="text-[#2a9d8f]"/> {location}
            </p>
            <p data-aos="fade-left" className="text-lg flex items-center gap-2">
              <FaRegCalendarDays className="text-[#2a9d8f]"/> {duration}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p data-aos="fade-up" className="text-lg flex items-center gap-2">
              <SiLevelsdotfyi className="text-[#2a9d8f]"/> {adventureLevel}
            </p>
            <p data-aos="fade-up" className="text-lg flex items-center gap-2">
              <MdAirplaneTicket className="text-[#2a9d8f]" /> {bookingAvailability}
            </p>
          </div>
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mt-4">Included Items</h3>
            <ul className="list-disc list-inside">
              {includedItems.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mt-4">Eco-Friendly Features</h3>
            <ul className="list-disc list-inside">
              {ecoFriendlyFeatures.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold mt-4">Special Instructions</h3>
            <ul className="list-disc list-inside">
              {specialInstructions.map((instruction, index) => (
                <li key={index} className="text-gray-700">
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          data-aos="fade-up"
          className="btn mt-6 text-lg text-white bg-[#2a9d8f]"
          onClick={() => handleTalkWithExpert()}
        >
          Talk with Expert
        </button>
      </div>
    </div>
  );
};

export default AdventureDetails;