import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { assets } from "../assets/assets_frontend/assets";

const Testimonials = () =>  {
  return (
    <div className="py-16 px-8 bg-primary rounded-lg mt-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-primary mb-12">
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
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4 italic">
                “Safari Nurse Agency connected me with my dream job abroad, and their support throughout the process was exceptional!”
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-primary font-semibold">James Kimani</p>
                  <p className="text-gray-500 text-sm">Registered Nurse, UK</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4 italic">
                “The team at Safari Nurse Agency was compassionate, professional, and made the entire recruitment process seamless."”
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-primary font-semibold">Bilhah Cheruiyot</p>
                  <p className="text-gray-500 text-sm">Medical Student, Canada</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4 italic">
                “Thanks to Safari Nurse Agency, I received top-notch training and landed a life-changing opportunity in healthcare.”
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-primary font-semibold">Kimutai Emmanuel</p>
                  <p className="text-gray-500 text-sm">Nurse Practitioner, USA</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4 italic">
                “I’m forever grateful to Safari Nurse Agency for helping me find a job that aligns with my skills and passion for patient care.”
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-primary font-semibold">Agatha Mwikali</p>
                  <p className="text-gray-500 text-sm">Pediatrician, Thailand</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4 italic">
                “Their commitment to excellence and the well-being of nurses truly sets Safari Nurse Agency apart from the rest.”
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-primary font-semibold">Jared Ouma</p>
                  <p className="text-gray-500 text-sm">General physician, France</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6 */}
          <SwiperSlide>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4 italic">
                “I’ve never felt more supported in my career journey—Safari Nurse Agency is the best recruitment agency for healthcare professionals!”
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-primary font-semibold">Makena Mwanga</p>
                  <p className="text-gray-500 text-sm">Dermatologist, India</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        

        
      </div>
    </div>
  );
}
export default Testimonials
