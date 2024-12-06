import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";
import { BusinessListItem } from "@/helper/utility";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Page = () => {
  const t = useTranslations("MainPage");
  const PageBannerText = t("Page_Banner_Text");
  const SubMenu = [
    { subId: "22", title: t("Semiconductor"), link: "/business/semiconductor" },
    { subId: "21", title: t("Display"), link: "/business" },

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
  const itemList = BusinessListItem();
  return (
    <Layout type="main">
      <PageBanner
        mainText={PageBannerText}
        banner="/images/business/banner.png"
      />
      <PageTabMenu sub={SubMenu} />
      <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep">
        <div className="text-center text-2xl font-semibold text-primary ">
          {t("Display")}
        </div>

        <div className="mt-[60px]  max-w-[600px] mx-auto">
          <div className="text-[#353644] mb-5 text-[30px] text-center">
            {t("Business_text_1")}
          </div>
          <div className="">
            <Image
              src={"/images/business_img_1.png"}
              alt={``}
              className=" w-full h-[214px] max-md:h-[160px] sm:object-cover object-center rounded-[20px] z-10"
              width="200"
              height="200"
              unoptimized={true}
              priority={true}
            />
          </div>
          <div className="max-w-[200px] mt-16 mx-auto text-[#555555]">
            <ul className="list-disc">
              <li>{t("business_section_text1")}</li>
              <li>{t("business_section_text2")}</li>
              <li>{t("business_section_text3")}</li>
              <li>{t("business_section_text4")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-[120px]">
          <div className="text-[#353644] text-[30px] font-semibold text-center mb-10">
            {t("business_title_2")}
          </div>

          <div>
            <div className="grid grid-cols-12 gap-6">
              {itemList?.map((item, index) => {
                return (
                  <div key={index} className="col-span-4 max-md:col-span-6">
                    <div className="bg-[#EBEFF8] h-[160px] rounded-[20px] flex flex-col items-center justify-center p-4">
                      <div className="">
                        <Image
                          src={item?.image}
                          alt={``}
                          className=" w-[30px] h-[30px]"
                          width="30"
                          height="30"
                          unoptimized={true}
                          priority={true}
                        />
                      </div>
                      <div className="text-xl max-md:text-md font-semibold text-black mt-3 text-center">
                        {item?.title}
                      </div>
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
