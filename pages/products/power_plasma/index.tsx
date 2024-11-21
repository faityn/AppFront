import { productsListAtom } from "@/components/atom";
import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";

import { getProductsList } from "@/hooks/useData";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const Page = () => {
  const t = useTranslations("MainPage");
  const [activeTab, setActiveTab] = useState("tab1");
  const [itemsList, setItemsList] = useRecoilState(productsListAtom);
  const PageBannerText = t("Page_Banner_Text");
  const SubMenu = [
    { subId: "31", title: t("ARP Plasma"), link: "/products" },
    { subId: "32", title: t("N2 Plasma"), link: "/products/n2_plasma" },
    {
      subId: "33",
      title: t("Air Plasma"),
      link: "/products/air_plasma",
    },
    {
      subId: "34",
      title: t("Power Plasma"),
      link: "/products/power_plasma",
    },
  ];

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  const getData = async () => {
    const response = await getProductsList(4);

    if (response?.result?.success) {
      setItemsList(response?.result?.responseObject);
    }
  };
  useEffect(() => {
    //eslint-disable-next-line react-hooks/exhaustive-deps
    getData();
  }, []);
  return (
    <Layout type="main">
      <PageBanner mainText={PageBannerText} />
      <PageTabMenu sub={SubMenu} />
      <div className="mx-auto max-w-[1224px] mt-[60px] mb-[150px] whitespace-pre-line break-keep">
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
            Power Supply
          </button>
        </div>

        <div className={`${activeTab === "tab1" ? "" : "hidden"} mt-20`}>
          <div className="grid grid-cols-12 gap-5 max-md:px-4">
            {itemsList?.map((item, index) => {
              if (item?.sub_category === 1) {
                return (
                  <div
                    key={index}
                    className="col-span-3 max-md:col-span-6 max-sm:col-span-12"
                  >
                    <div className="">
                      <div className="">
                        <Image
                          src={`/images/products/p1.png`}
                          alt={``}
                          className=" w-full min-h-[200px] max-h-[254px] max-sm:max-h-[304px]"
                          width="392"
                          height="200"
                          unoptimized={true}
                          priority={true}
                        />
                      </div>
                      <div className="text-xl max-sm:text-md mt-[10px] text-[#353644]">
                        {item?.title}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className={`${activeTab === "tab2" ? "" : "hidden"} mt-20`}>
          <div className="grid grid-cols-12 gap-5 max-md:px-4">
            {itemsList?.map((item, index) => {
              if (item?.sub_category === 2) {
                return (
                  <div
                    key={index}
                    className="col-span-3 max-md:col-span-6 max-sm:col-span-12"
                  >
                    <div className="">
                      <div className="">
                        <Image
                          src={`/images/products/p1.png`}
                          alt={``}
                          className=" w-full min-h-[200px] max-h-[254px] max-sm:max-h-[304px]"
                          width="392"
                          height="200"
                          unoptimized={true}
                          priority={true}
                        />
                      </div>
                      <div className="text-xl max-sm:text-md mt-[10px] text-[#353644]">
                        {item?.title}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className={`${activeTab === "tab3" ? "" : "hidden"} mt-20`}>
          <div className="grid grid-cols-12 gap-5 max-md:px-4">
            {itemsList?.map((item, index) => {
              if (item?.sub_category === 3) {
                return (
                  <div
                    key={index}
                    className="col-span-3 max-md:col-span-6 max-sm:col-span-12"
                  >
                    <div className="">
                      <div className="">
                        <Image
                          src={`/images/products/p1.png`}
                          alt={``}
                          className=" w-full min-h-[200px] max-h-[254px] max-sm:max-h-[304px]"
                          width="392"
                          height="200"
                          unoptimized={true}
                          priority={true}
                        />
                      </div>
                      <div className="text-xl max-sm:text-md mt-[10px] text-[#353644]">
                        {item?.title}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
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
