import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

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

  return (
    <Layout type="main">
      <PageBanner
        mainText={PageBannerText}
        banner="/images/business/banner.png"
      />
      <PageTabMenu sub={SubMenu} />
      <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep">
        <div className="text-center text-2xl font-semibold text-primary ">
          {t("Secondary Battery")}
        </div>

        <div className="mt-[50px] max-w-[700px] mx-auto">
          <div className="text-primary mb-5 text-[20px] text-center">
            {t("Business_page3_title_1")}
          </div>
          <div className="text-[#353644] mb-5 text-[30px] font-semibold text-center">
            {t("Business_page3_title_2")}
          </div>
        </div>

        <div className="mt-5 ">
          <div className="relative  ">
            <video
              controls={false}
              playsInline={true}
              autoPlay={true}
              loop
              muted
              preload="auto"
              className="w-full md:h-[670px] max-sm:h-[256px] object-cover  "
            >
              <source src="/images/secondary_battery.mp4" type="video/mp4" />
            </video>
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
