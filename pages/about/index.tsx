import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";
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
            <div className="absolute bottom-0 w-[976px] mx-auto h-[54px] rounded-t-[20px] bg-white z-20"></div>
          </div>
          <div className="max-w-[976px]  mx-auto bg-white  text-[#555555] text-center  border ">
            {t("our_company_page_text_2")}
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
