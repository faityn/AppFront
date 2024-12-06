import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";
import {
  BusinessPage4List1,
  BusinessPage4List2,
  BusinessPage4List3,
} from "@/helper/utility";
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
  const itemList = BusinessPage4List1();
  const itemList2 = BusinessPage4List2();
  const itemList3 = BusinessPage4List3();
  return (
    <Layout type="main">
      <PageBanner
        mainText={PageBannerText}
        banner="/images/business/banner.png"
      />
      <PageTabMenu sub={SubMenu} />
      <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep">
        <div className="text-center text-2xl font-semibold text-primary ">
          {t("Part-Materials")}
        </div>

        <div className="mt-10 max-md:px-4">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6 max-md:col-span-12">
              <Image
                src={"/images/business/part1.png"}
                alt={``}
                className=" w-full h-[480px] max-md:h-[200px] sm:object-cover object-center rounded-[20px] z-10"
                width="200"
                height="200"
                unoptimized={true}
                priority={true}
              />

              <div className="mt-6">
                <div className="text-2xl font-semibold text-black mb-[10px]">
                  {t("Camera modul Process")}
                </div>
                <div className="text-[#555555]">
                  <div>Before - Lamination : OCA film, DAT film</div>
                  <ul className="list-disc ml-5 text-[18px] font-light">
                    {itemList?.map((item, index) => {
                      return <li key={index}>{item?.text}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-6 max-md:col-span-12">
              <div className="">
                <div className="text-2xl font-semibold text-black mb-[10px]">
                  {t("Bio Process")}
                </div>
                <div className="text-[#555555] text-[18px] ">
                  <div>Petridish treatment</div>
                  <ul className="list-disc ml-5 font-light">
                    {itemList2?.map((item, index) => {
                      return <li key={index}>{item?.text}</li>;
                    })}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <div className="text-2xl font-semibold text-black mb-[10px]">
                  {t("Solar cell Process")}
                </div>
                <div className="text-[#555555] text-[18px] ">
                  <ul className="list-decimal ml-5 font-light leading-7">
                    {itemList3?.map((item, index) => {
                      return <li key={index}>{item?.text}</li>;
                    })}
                  </ul>
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
