import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Banner } from "@/helper/utility";
const HomeMainBanner: React.FC = () => {
    const bannerList = Banner();
    return (
        <div className="">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                loop={true}
                slidesPerView={1}
                draggable={false}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                pagination={false}
                navigation={true}
                allowTouchMove={true}
                direction={"horizontal"}
                className="mySwiper w-full h-[647px] max-sm:h-[350px]"
            >
                {bannerList?.map((item, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            className="bg-[#111111] non-clickable"
                        >
                            <div className="w-full h-full max-sm:h-[350px] bg-cover relative">
                                <div className="bg-gradient-to-b from-black to-transparent opacity-80 absolute top-0 w-full h-full"></div>
                                <div className="text-center  items-center flex flex-col  justify-center ">
                                    <video
                                        controls={false}
                                        playsInline={true}
                                        autoPlay={true}
                                        muted
                                        loop
                                        preload="auto"
                                        className="w-full h-[647px] max-sm:h-[350px] object-cover"
                                    >
                                        <source
                                            src={item?.video_link}
                                            type="video/mp4"
                                        />
                                    </video>
                                    <div className="absolute max-w-[1200px] m-auto  text-[64px] max-sm:text-2xl font-semibold py-5 uppercase px-4">
                                        {item?.text}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default HomeMainBanner;
