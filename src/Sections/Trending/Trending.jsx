import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import SwiperCore, {
  EffectCoverflow,
  EffectFlip,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Card from "./Card";
SwiperCore.use([EffectCoverflow, Pagination]);

const Trending = () => {
  return (
    <div className="bg-gradient-to-r from-[#c8f7c6] via-[#eef3dc] to-[#c8f7c6] py-10">
      <p className="text-center text-3xl font-bold">Trending</p>
      <div className="mx-auto h-auto scroll-smooth hover:scroll-auto py-10 my-10 flex flex-nowrap items-center  justify-evenly overflow-x-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          slideToClickedSlide={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 1,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card
              title="Harvester"
              lnk="https://images.tractorgyan.com/uploads/26907/63159f84cb1e3_combine-harvester-1.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Tractor"
              lnk="https://eu-images.contentstack.com/v3/assets/bltdd43779342bd9107/blt35322b80864a72bc/639730cffba3005089ad3dcd/5-claas-real-time-sensor_0.jpg?width=700&auto=webp&quality=80&disable=upscale"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title="Sprinkler"
              lnk="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxNgP6oDcotLS9oeX2moo8gYMxKWU_9LfpuVdT411qcDpwVixrbjplFetTKHQFBOcHcz0&usqp=CAU"
            />
          </SwiperSlide>
        </Swiper>
        {/*
        <Card title="Harvester" lnk="https://images.tractorgyan.com/uploads/26907/63159f84cb1e3_combine-harvester-1.webp" />
        <Card title="Tractor" lnk="https://o.remove.bg/downloads/da270fa2-16d7-4cbc-ae73-77875c672dec/75-758237_tractor-png-transparent-png-removebg-preview.png" scale={true} />
        <Card title="Sprinkler" lnk="https://o.remove.bg/downloads/72cc2100-7688-4ab3-a4ed-de96fe218db3/close-up-seeder-attached-tractor-field_146671-19087-removebg-preview.png" />
    */}{" "}
      </div>
    </div>
  );
};

export default Trending;
