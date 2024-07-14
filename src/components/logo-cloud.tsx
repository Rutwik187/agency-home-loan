"use client";
import Heading from "./ui/heading";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const LogoCloud = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <Heading title="Choice of Partners" />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10">
        <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              type: "fraction",
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <SwiperSlide key={item}>
                <div>
                  <img
                    className="object-contain w-auto mx-auto h-14"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-1.png"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
