import faqImage from '../assets/faqs.svg'


const Faqs = () => {
  return (
    <div className='py-20 px-4 bg-[#ced3db]'>
      <div className="mb-12 text-center">
        <h4 className="font-medium text-lg md:text-xl animate__animated animate__fadeInLeft">FAQs</h4>
        <h3 className="font-bold text-4xl md:text-5xl animate__animated animate__fadeInRight">Answers to some questions you might have.</h3>
      </div>
      <div className='flex flex-col md:flex-row gap-8 mt-4'>
        <div className='md:w-1/2'>
          <img className='w-full object-cover' src={faqImage} alt="" />
        </div>
        <div className='md:w-1/2 flex flex-col justify-between gap-6'>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">What should I bring on a mountain trek?</div>
            <div className="collapse-content">
              <p>For a mountain trek, it's essential to pack light but wisely. You should bring sturdy hiking boots, weather-appropriate clothing (layers for warmth), a hydration system, a first-aid kit, snacks, a headlamp, sunscreen, and a camera to capture the views. Don’t forget your eco-friendly essentials, like reusable water bottles and biodegradable toiletries</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">Is a mountain trek suitable for beginners?</div>
            <div className="collapse-content">
              <p> Yes! Our mountain treks cater to all experience levels. If you are a beginner, we recommend starting with shorter and less challenging routes. Our expert guides will assist you along the way, ensuring your safety while offering support and guidance to make the trek enjoyable for you.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">What is the best time of year for a mountain trek?</div>
            <div className="collapse-content">
              <p>The best time for a mountain trek depends on the region and your preferred experience. Generally, spring (April to June) and fall (September to October) offer the most pleasant weather, with moderate temperatures and less risk of extreme weather conditions. However, some treks may be available year-round, with winter treks offering a unique, peaceful experience</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Are the mountain treks environmentally sustainable?</div>
            <div className="collapse-content">
              <p>Absolutely! Our treks prioritize eco-friendly practices. We follow Leave No Trace principles, minimize waste, and promote sustainable tourism. Our guides are trained to educate trekkers on the importance of respecting the environment, including wildlife conservation and preserving local ecosystems.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">What should I do if I get injured or feel unwell during the trek?</div>
            <div className="collapse-content">
              <p> If you feel unwell or get injured during the trek, immediately notify one of our trained guides. We carry basic first-aid kits and are prepared for emergencies. In case of serious injury, our team has access to communication tools to request assistance and evacuation if needed. Your safety is our priority.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;