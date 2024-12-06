import Image from "next/image";

import Layout from "@/components/Layout";
import HomeMainBanner from "@/components/Banner/HomeMainBanner";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
import HomeSection2Slider from "@/components/Slider/HomeSection2Slider";
import { HomeSection3ListItem, HomeSection4ListItem } from "@/helper/utility";
import MainButton from "@/components/Button/MainButton";

export default function Home() {
  const t = useTranslations("MainPage");
  const itemList = HomeSection3ListItem();
  const itemListSection4 = HomeSection4ListItem();

  return (
    <Layout type="main">
      <div className={`whitespace-pre-line`}>
        <HomeMainBanner />
        <div
          id="section_1"
          className=" bg-white py-[100px] max-xl:py-8 max-xl:px-5"
        >
          <div className="mx-auto max-w-[1224px] ">
            <div className="flex max-sm:flex-col w-full gap-5 text-[#353644]">
              <div className="w-full  ">
                <div className="text-[48px] leading-[64px] max-sm:text-2xl font-bold max-w-[496px] break-keep break-normal">
                  {t("Home_section_1_text_1")}
                </div>
              </div>
              <div className="w-full text-xl max-sm:text-sm font-light break-keep break-normal">
                {t("Home_section_1_text_2")}
                <div>
                  <Link
                    href="/about"
                    className="mt-5 border border-black rounded-3xl w-[122px] h-[43px] text-sm text-black font-medium flex items-center justify-center"
                  >
                    {t("more_button_text")}
                  </Link>
                </div>
              </div>
            </div>

            <div className=" w-full mt-[108px] max-sm:mt-14">
              <div className="text-primary text-2xl max-sm:text-[16px] border-b border-[#D9D9D9]">
                Businesses
              </div>

              <div className="w-full mt-[36px]">
                <div className="grid grid-cols-12 gap-5 max-sm:gap-2 w-full mb-5 max-sm:mb-2">
                  <div className="col-span-7 max-sm:col-span-12 relative">
                    <Link href={"/business/semiconductor"}>
                      <Image
                        src={`/images/h2.png`}
                        alt={`images/h2.png`}
                        className=" h-[289px] max-sm:h-[180px] w-full object-cover object-center rounded-3xl"
                        width="130"
                        height="100"
                        unoptimized={true}
                        priority={true}
                      />
                      <div className="absolute top-8 left-8 max-sm:top-5 max-sm:left-5 font-semibold text-[32px] max-lg:text-2xl uppercase">
                        {t("Semiconductor")}
                      </div>
                    </Link>
                  </div>
                  <div className="col-span-5 max-sm:col-span-12 relative">
                    <Link href={"/business"}>
                      <Image
                        src={`/images/h1.png`}
                        alt={`images/h1.png`}
                        className=" h-[289px] max-sm:h-[180px] w-full object-cover object-center rounded-3xl"
                        width="130"
                        height="50"
                        unoptimized={true}
                        priority={true}
                      />
                      <div className="absolute top-8 left-8 max-sm:top-5 max-sm:left-5 font-semibold text-[32px] max-lg:text-2xl uppercase">
                        {t("Display")}
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-5 max-sm:gap-2 w-full mb-5 max-sm:mb-2">
                  <div className="col-span-5 max-sm:col-span-12 relative">
                    <Link href={"/business/secondary_battery"}>
                      <Image
                        src={`/images/h3.png`}
                        alt={`images/h3.png`}
                        className=" h-[289px] max-sm:h-[180px] w-full object-cover object-center rounded-3xl"
                        width="130"
                        height="50"
                        unoptimized={true}
                        priority={true}
                      />
                      <div className="absolute top-8 left-8 max-sm:top-5 max-sm:left-5 font-semibold text-[32px] max-lg:text-2xl uppercase">
                        {t("Secondary Battery")}
                      </div>
                    </Link>
                  </div>
                  <div className="col-span-7 max-sm:col-span-12 relative">
                    <Link href={"/business/part_materials"}>
                      <Image
                        src={`/images/h4.png`}
                        alt={`images/h4.png`}
                        className=" h-[289px] max-sm:h-[180px] w-full object-cover object-center rounded-3xl"
                        width="130"
                        height="50"
                        unoptimized={true}
                        priority={true}
                      />
                      <div className="absolute top-8 left-8 max-sm:top-5 max-sm:left-5 font-semibold text-[32px] max-lg:text-2xl uppercase">
                        {t("Part-Materials")}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="section_2"
          className=" bg-[#F0F4FF] pt-[100px] pb-[58px] max-sm:pt-5 max-sm:pb-5  relative max-sm:px-4"
        >
          <div className="mx-auto max-w-[1224px] ">
            <div className="grid grid-cols-12 gap-5 w-full mb-5 ">
              <div className="col-span-5 max-sm:col-span-12 relative z-30">
                <div className="max-w-[484px] max-sm:min-w-full ">
                  <div className="text-[42px] max-lg:text-[28px] font-medium text-black max-sm:text-center ">
                    {t("Home_section_2_title")}
                  </div>
                  <div className="w-[76px] max-sm:mx-auto h-1 bg-primary"></div>
                  <p className="mt-5 text-xl max-lg:text-[16px] font-[400] text-grayText h-[140px] max-sm:h-[80px] ">
                    {t("Home_section_2_text")}
                  </p>
                  <div className="max-sm:hidden">
                    {" "}
                    <MainButton
                      text={t("Home_section_2_button")}
                      buttonLink={"/products"}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-7  max-sm:col-span-12 relative"></div>
            </div>
          </div>
          <div className="w-full  sm:absolute sm:top-[100px] h-full z-20 ">
            <div className="grid grid-cols-9 max-xxl:grid-cols-7 max-xl:grid-cols-12 sm:gap-5 w-full  ">
              <div className="col-span-4 max-sm:col-span-9 max-xxl:col-span-3 max-xl:col-span-5 relative "></div>
              <div className="col-span-5 max-sm:col-span-12 max-xxl:col-span-4 max-xl:col-span-7 border ">
                <HomeSection2Slider />
              </div>
            </div>

            <div className="sm:hidden flex justify-center ">
              {" "}
              <Link
                href="#"
                className="mt-5 bg-gradient-to-r from-[#276CF3] to-[#3042E4] rounded-lg w-[210px] max-lg:w-[200px] h-[56px] max-lg:h-[40px] text-[16px] max-lg:text-sm text-white font-semibold flex items-center gap-2 justify-center"
              >
                {t("Home_section_2_button")}{" "}
                <Image
                  src={`/svg/arrow-right-sm.svg`}
                  alt={``}
                  className=" h-6 max-sm:h-6 w-6 "
                  width="24"
                  height="24"
                  unoptimized={true}
                  priority={true}
                />
              </Link>
            </div>
          </div>
        </div>

        <div
          id="section_3"
          className=" bg-white py-[140px] max-xl:py-8 max-xl:px-5"
        >
          <div className="mx-auto max-w-[1224px] ">
            <div className=" w-full  max-sm:mt-14">
              <div className="text-primary text-2xl max-sm:text-[16px] border-b border-[#D9D9D9]">
                {t("Home_section_3_title")}
              </div>

              <div className="text-xl text-[#353644] mt-5 max-w-[558px]">
                {t("Home_section_3_text")}
              </div>

              <div className="grid grid-cols-12 gap-6 max-sm:gap-2 mt-14">
                {itemList?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="col-span-3 max-lg:col-span-6 h-[200px] max-sm:h-[130px] relative "
                    >
                      <div className="absolute top-4 left-7 text-[32px] max-lg:left-5 max-lg:text-xl text-white/40 font-bold">
                        {item?.number}.
                      </div>
                      <Image
                        src={item?.image}
                        alt={``}
                        className=" h-[200px] max-sm:h-[130px] w-full object-cover object-center rounded-2xl"
                        width="200"
                        height="200"
                        unoptimized={true}
                        priority={true}
                      />
                      <div className="absolute bottom-4 left-7 text-[24px] max-lg:left-5 max-lg:text-xl text-white font-semibold">
                        {item?.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          id="section_4"
          className=" bg-[#F0F4FF] py-[100px]  max-sm:py-5 relative max-sm:px-4"
        >
          <div className="mx-auto max-w-[1224px] mb-10">
            <div className="text-[42px] text-black font-medium w-full text-center">
              {t("Home_section_4_title")}
            </div>
            <div className="w-[76px] mx-auto h-1 bg-primary"></div>
            <div className="w-full mt-14">
              {itemListSection4?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-4 mb-10 items-center justify-between w-full"
                  >
                    <div className="text-xl max-sm:text-sm text-[#353644]">
                      {item?.text}
                    </div>
                    <div>
                      <Image
                        src={"/svg/arrow-right.svg"}
                        alt={``}
                        className=" h-6 min-w-6 max-sm:min-w-5 "
                        width="24"
                        height="24"
                        unoptimized={true}
                        priority={true}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex w-full justify-center">
              <MainButton text={t("See more")} buttonLink="#" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    props: {
      messages,
    },
  };
};
