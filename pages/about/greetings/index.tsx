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
      <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] ">
        <div className="text-center text-2xl font-semibold text-primary h-[60px]">
          {t("Ceo Greeting")}
        </div>

        <div className="mt-[60px] px-3">
          <div className="grid grid-cols-11 max-sm:grid-cols-12 gap-20 max-xl:gap-10 max-sm:gap-0  ">
            <div className="col-span-5 max-sm:col-span-12 ">
              <div className="w-full">
                <Image
                  src={"/images/ceo.png"}
                  alt={``}
                  className=" w-full h-[649px] max-sm:max-w-full object-cover object-center rounded-[20px] "
                  width="200"
                  height="200"
                  unoptimized={true}
                  priority={true}
                />
              </div>
            </div>
            <div className="col-span-6 max-sm:col-span-12">
              <div className="fontSourceSerifRegular text-black text-[40px] max-xl:text-[30px] ">
                {t("Ceo Greeting")}
              </div>
              <div className="text-[#353644] mt-5 text-[16px] max-lg:text-sm max-lg:leading-[20px] leading-[25px] font-light break-keep whitespace-pre-line">
                {t("ceo_greating_text")}
              </div>

              <div className="flex gap-7 items-center mt-[35px]">
                <div className="text-md text-[#353644]">(주)APP CEO</div>

                <div className="">
                  <Image
                    src={"/svg/sign_en.svg"}
                    alt={``}
                    className=" w-[83px] h-[58px]  "
                    width="83"
                    height="58"
                    unoptimized={true}
                    priority={true}
                  />
                </div>
              </div>
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
