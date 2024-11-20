import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";
import { AboutListItem } from "@/helper/utility";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Page = () => {
  const t = useTranslations("MainPage");
  const PageBannerText = t("Page_Banner_Text");
  const SubMenu = [
    { subId: "11", title: t("Ceo Greeting"), link: "/about/greetings" },
    { subId: "12", title: t("Company History"), link: "/about/history" },
    { subId: "13", title: t("Our Company"), link: "/about" },
  ];
  const itemList = AboutListItem();
  return (
    <Layout type="main">
      <PageBanner mainText={PageBannerText} />
      <PageTabMenu sub={SubMenu} />
      <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep">
        <div className="text-center text-2xl font-semibold text-primary ">
          {t("Our Company")}
        </div>

        <div className="mt-[60px] px-3">
          <div className="text-[#353644] mb-5 text-[30px] text-center">
            {t("our_company_page_text_1")}
          </div>

          <div className="relative z-10">
            <Image
              src={"/images/our_company.png"}
              alt={``}
              className=" w-full h-[272px] max-sm:max-w-full object-cover object-center rounded-[20px] z-10"
              width="200"
              height="200"
              unoptimized={true}
              priority={true}
            />
            <div className="absolute bottom-0 max-md:hidden w-full">
              <div className="max-w-[976px] mx-auto h-[55px] mb-[-1px] rounded-t-[20px] bg-white z-20"></div>
            </div>
          </div>
          <div className="max-w-[976px] max-md:mt-8 mx-auto bg-white text-[18px] text-[#555555] text-center px-10 max-md:px-4">
            {t("our_company_page_text_2")}
          </div>
        </div>

        <div className="mt-[100px] max-md:px-4">
          <div className="grid grid-cols-12 gap-6">
            {itemList?.map((item, index) => {
              return (
                <div key={index} className="col-span-4 max-md:col-span-6">
                  <div className="bg-[#EBEFF8] h-[188px] flex flex-col items-center justify-center p-4">
                    <div className="text-md text-[#555555]">{item?.title}</div>
                    <div className="text-primary text-xl text-center">
                      {item?.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-[100px] px-3">
          <div className="text-center text-2xl font-semibold text-primary mb-10">
            {t("Our Mission")}
          </div>

          <div className="relative z-10">
            <Image
              src={"/images/our_mission.png"}
              alt={``}
              className=" w-full h-[272px] max-md:h-[160px] sm:object-cover object-center rounded-[20px] z-10"
              width="200"
              height="200"
              unoptimized={true}
              priority={true}
            />
            <div className="absolute bottom-0 max-md:hidden w-full">
              <div className="max-w-[976px] mx-auto h-[55px] mb-[-1px] rounded-t-[20px] bg-white z-20"></div>
            </div>
          </div>
          <div className="max-md:mt-8 max-w-[976px]  mx-auto bg-white text-[18px] text-[#555555] text-center px-10 max-md:px-4 ">
            {t("our_company_page_text_3")}
          </div>
        </div>

        <div className="mt-[100px] px-3">
          <div className="text-center text-2xl font-semibold text-primary mb-10">
            {t("Our Vision")}
          </div>

          <div className="relative z-10">
            <Image
              src={"/images/our_vision.png"}
              alt={``}
              className=" w-full h-[272px] max-md:h-[160px] sm:object-cover object-center rounded-[20px] z-10"
              width="200"
              height="200"
              unoptimized={true}
              priority={true}
            />
            <div className="absolute bottom-0 max-md:hidden w-full">
              <div className="max-w-[976px] mx-auto h-[55px] mb-[-1px] rounded-t-[20px] bg-white z-20"></div>
            </div>
          </div>
          <div className="max-w-[976px] max-md:mt-10 mx-auto bg-white text-[18px] text-[#555555] text-center px-10 max-md:px-4">
            {t("our_company_page_text_4")}
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
