import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";
import { BusinessPage2List1, BusinessPage2List2 } from "@/helper/utility";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Page = () => {
  const t = useTranslations("MainPage");
  const PageBannerText = t("Page_Banner_Text");
  const SubMenu = [
    { subId: "21", title: t("Display"), link: "/business" },
    { subId: "22", title: t("Semiconductor"), link: "/business/semiconductor" },
    {
      subId: "23",
      title: t("Secondary Battery"),
      link: "/business/secondary_battery",
    },
    {
      subId: "24",
      title: t("Part-Materials"),
      link: "/business/part_materials",
    },
  ];
  const itemList = BusinessPage2List1();
  const itemList2 = BusinessPage2List2();
  return (
    <Layout type="main">
      <PageBanner mainText={PageBannerText} />
      <PageTabMenu sub={SubMenu} />
      <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep">
        <div className="text-center text-2xl font-semibold text-primary ">
          {t("Semiconductor")}
        </div>

        <div className="mt-[50px] max-w-[600px] mx-auto">
          <div className="text-[#353644] mb-5 text-[30px] text-center">
            {t("Business_page2_text_1")}
          </div>
        </div>

        <div className="mt-8 ">
          <div className="grid grid-cols-12 gap-6 ">
            {itemList?.map((item, index) => {
              return (
                <div key={index} className=" col-span-4 max-md:col-span-12 ">
                  <div className="">
                    <Image
                      src={item?.image}
                      alt={``}
                      className=" w-full min-h-[200px] "
                      width="392"
                      height="200"
                      unoptimized={true}
                      priority={true}
                    />
                  </div>
                  <div className="px-4 mt-[30px] text-black text-[18px] font-semibold text-center">
                    {item?.title}
                  </div>
                  <div className="px-4 mt-[10px] text-[#555555] text-[18px] text-center">
                    {item?.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-[150px]  ">
          <div className="text-[#353644] mb-5 text-[30px] text-center">
            {t("Business_page2_text_2")}
          </div>
          <div className="mt-8 ">
            <div className="grid grid-cols-12 gap-6 ">
              {itemList2?.map((item, index) => {
                return (
                  <div key={index} className=" col-span-4 max-md:col-span-12 ">
                    <div className="">
                      <Image
                        src={item?.image}
                        alt={``}
                        className=" w-full min-h-[200px] "
                        width="392"
                        height="200"
                        unoptimized={true}
                        priority={true}
                      />
                    </div>
                    <div className="px-4 mt-[30px] text-black text-[18px] font-semibold text-center">
                      {item?.title}
                    </div>
                    <div className="px-4 mt-[10px] text-[#555555] text-[18px] text-center">
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
