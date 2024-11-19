import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";
import {
  HistoryImageList,
  HistoryTab2List,
  HistoryTextList,
} from "@/helper/utility";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const t = useTranslations("MainPage");
  const [activeTab, setActiveTab] = useState("tab1");
  const PageBannerText = t("Page_Banner_Text");

  const SubMenu = [
    { subId: "11", title: t("Ceo Greeting"), link: "/about/greetings" },
    { subId: "12", title: t("Company History"), link: "/about/history" },
    { subId: "13", title: t("Our Company"), link: "/about" },
  ];

  const HistorytImages = HistoryImageList();
  const HistoryTexts = HistoryTextList();

  const HistoryTab2 = HistoryTab2List();

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <Layout type="main">
      <PageBanner mainText={PageBannerText} />
      <PageTabMenu sub={SubMenu} />
      <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep">
        <div className="flex w-full justify-center items-center gap-3">
          <button
            type="button"
            onClick={() => changeTab("tab1")}
            className={`text-[18] font-semibold w-[160px] h-[45px] border border-[#6C7B9F] ${
              activeTab === "tab1"
                ? "bg-[#6C7B9F] text-white"
                : "text-[#6C7B9F] "
            }`}
          >
            {t("Company_History")}
          </button>
          <button
            type="button"
            onClick={() => changeTab("tab2")}
            className={`text-[18] font-semibold w-[160px] h-[45px] border border-[#6C7B9F] ${
              activeTab === "tab2"
                ? "bg-[#6C7B9F] text-white"
                : "text-[#6C7B9F] "
            }`}
          >
            {t("Certificates")}
          </button>
        </div>
        <div className={` mt-[60px]`}>
          <div className={`${activeTab === "tab1" ? "" : "hidden"}`}>
            <div className="grid grid-cols-12">
              <div className="col-span-6 max-lg:hidden">
                <div className=" h-full ">
                  {HistorytImages?.map((item, index) => {
                    return (
                      <div key={index} className="mb-3">
                        <Image
                          src={item?.image}
                          alt={``}
                          className=" h-[300px] w-full max-w-[496px] object-cover object-center rounded-xl"
                          width="200"
                          height="200"
                          unoptimized={true}
                          priority={true}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-span-6 max-lg:col-span-12">
                <div className=" h-full max-lg:px-5 flex flex-col justify-between">
                  {HistoryTexts?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="relative  border-gray-300  mb-3 "
                      >
                        <div className="mb-10 ml-20 max-xl:ml-10 ">
                          <span className="absolute mt-2 -left-2 w-[13px] h-[13px] bg-primary rounded-full ring-8 ring-white"></span>
                          <h3 className="text-[40px] mb-5 leading-7 font-semibold text-primary ">
                            {item?.date}
                          </h3>
                          {item?.history?.map((key, i) => {
                            return (
                              <div
                                key={i}
                                className="mt-2 mb-2 flex gap-3 items-center"
                              >
                                <div className=" w-[6px] h-[6px] bg-primary rounded-full  "></div>
                                <div className="text-[#353644] text-md leading-6 w-full font-[400]">
                                  {key?.text}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className={`${activeTab === "tab2" ? "" : "hidden"}`}>
            <div className="grid grid-cols-12 gap-6">
              {HistoryTab2?.map((item, index) => {
                return (
                  <div key={index} className="col-span-2 ">
                    <div className="">
                      <Image
                        src={item?.image}
                        alt={``}
                        className=" h-[224px] w-full max-w-[200px] object-cover object-center rounded-xl"
                        width="184"
                        height="224"
                        unoptimized={true}
                        priority={true}
                      />
                    </div>
                    <div className="text-[#353644] w-full text-center text-sm mt-5 font-light">
                      {item?.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    props: {
      messages,
    },
  };
};
