"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import urrMainImg from "../../../../public/bgImg/image1.png"
import urrSubImg from "../../../../public/bgImg/image5.png"
import product1 from "../../../../public/bgImg/product1.png"
import product2 from "../../../../public/bgImg/product2.png"
import product3 from "../../../../public/bgImg/product3.png"

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={urrMainImg} alt="mainImg" fill quality={100}></Image></SwiperSlide>
        <SwiperSlide><Image src={product1} alt="mainImg" fill quality={100}></Image></SwiperSlide>
        <SwiperSlide><Image src={product2} alt="mainImg" fill quality={100}></Image></SwiperSlide>
        <SwiperSlide><Image src={product3} alt="mainImg" fill quality={100}></Image></SwiperSlide>
        <SwiperSlide><Image src={urrSubImg} alt="mainImg" fill quality={100}></Image></SwiperSlide>

      </Swiper>
    </>
  );
}
