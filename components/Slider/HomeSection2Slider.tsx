import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Autoplay,
} from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { HomeSection2SliderItem } from "@/helper/utility";
const HomeSection2Slider: React.FC = () => {
    const itemList = HomeSection2SliderItem();
    return (
        <div className="  w-full  ">
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                centeredSlides={false}
                
                pagination={{
                    clickable: true,
                }}
                modules={[ Autoplay, Navigation]}
                className="mySwiper w-full  "
            >
                {itemList?.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="max-w-[460px] max-lg:max-w-[350px] max-sm:max-w-[280px]">
                            <Image
                                src={item?.image}
                                alt={""}
                                className=" h-[322px] min-w-[460px] max-lg:h-[282px] max-lg:min-w-[350px] max-sm:min-w-[270px] max-sm:h-[180px] bg-cover  "
                                width="130"
                                height="130"
                                unoptimized={true}
                                priority={true}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default HomeSection2Slider;
