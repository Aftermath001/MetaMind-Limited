import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { assets } from "../assets/assets_frontend/assets";

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Project One", imageUrl: assets.doc1 },
    { id: 2, title: "Project Two", imageUrl: assets.doc2 },
    { id: 3, title: "Project Three", imageUrl: assets.doc3 },
    { id: 4, title: "Project Four", imageUrl: assets.doc4 },
    { id: 5, title: "Project Five", imageUrl: assets.doc5},
    { id: 6, title: "Project Six", imageUrl: assets.doc6 },
  ];
  return (
    <div className="bg-gray-100 dark:bg-primary py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-tertiary mb-8">
          Our Recent Projects
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                className="relative group overflow-hidden rounded-lg shadow-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-black dark:bg-gray-900 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
