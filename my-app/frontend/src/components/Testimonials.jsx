import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { assets } from "../assets/assets_frontend/assets";

const Testimonials = () => {
  return (
    <div className="py-16 px-8 bg-primary rounded-lg mt-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-white mb-12">
          What Our Clients Say
        </h2>

        {/* Swiper container */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg">
              <img
                src="/src/assets/assets_frontend/avatarmeta.jpg"
                alt="James Kimani"
                className="w-24 h-24 rounded-full mb-4 border-4 border-white"
              />
              <p className="text-lg mb-4 italic">
                “Metamind Limited transformed our business! Their IT solutions streamlined our operations and boosted productivity. The team is knowledgeable and responsive, making every interaction smooth. Highly recommend!”
              </p>
              <p className="font-semibold"> Sarah L.</p>
              <p className="text-sm">Operations Manager</p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-lg">
              <img
                src="/src/assets/assets_frontend/avatarmeta.jpg"
                alt="Bilhah Cheruiyot"
                className="w-24 h-24 rounded-full mb-4 border-4 border-white"
              />
              <p className="text-lg mb-4 italic">
                “Working with Metamind Limited has been a game changer for our startup. They provided us with cutting-edge tech solutions that are scalable and reliable. The support team is always available to help us navigate any challenges. Truly a top-notch service!"”
              </p>
              <p className="font-semibold">Mike.T</p>
              <p className="text-sm">Founder & CEO</p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-lg shadow-lg">
              <img
                src="/src/assets/assets_frontend/avatarmeta.jpg"
                alt="Kimutai Emmanuel"
                className="w-24 h-24 rounded-full mb-4 border-4 border-white"
              />
              <p className="text-lg mb-4 italic">
                “Metamind’s Limited expertise in cybersecurity has given us peace of mind. Their tailored solutions protect our sensitive data and keep us compliant with regulations. The team is professional and attentive to our needs. Couldn't ask for a better partner!”
              </p>
              <p className="font-semibold">Emma J.</p>
              <p className="text-sm">IT Director</p>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-lg shadow-lg">
              <img
                src="/src/assets/assets_frontend/avatarmeta.jpg"
                alt="Agatha Mwikali"
                className="w-24 h-24 rounded-full mb-4 border-4 border-white"
              />
              <p className="text-lg mb-4 italic">
                “We turned to Metamind Limited for our cloud migration, and it was one of the best decisions we made. They handled everything seamlessly and ensured minimal downtime. The transition was smooth, and our team is now more efficient than ever!”
              </p>
              <p className="font-semibold">David K.</p>
              <p className="text-sm">IT Manager</p>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg shadow-lg">
              <img
                src="/src/assets/assets_frontend/avatarmeta.jpg"
                alt="Jared Ouma"
                className="w-24 h-24 rounded-full mb-4 border-4 border-white"
              />
              <p className="text-lg mb-4 italic">
                “Metaminde’s customer support is exceptional! They are always quick to respond and provide solutions that fit our unique requirements. Their proactive approach has helped us stay ahead in the ever-evolving tech landscape."”
              </p>
              <p className="font-semibold">Jessica M.</p>
              <p className="text-sm">Business Analyst</p>
            </div>
          </SwiperSlide>

          {/* Slide 6 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-lg shadow-lg">
              <img
                src="/src/assets/assets_frontend/avatarmeta.jpg"
                alt="Makena Mwanga"
                className="w-24 h-24 rounded-full mb-4 border-4 border-white"
              />
              <p className="text-lg mb-4 italic">
                “I can't recommend Metaminde enough! Their team designed a custom software solution that perfectly meets our needs. The quality of their work is impressive, and their commitment to client satisfaction is evident. Thank you, Metaminde!”
              </p>
              <p className="font-semibold"> Alan R.</p>
              <p className="text-sm">Product Owner</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Testimonials;
