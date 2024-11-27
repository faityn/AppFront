import { faqListAtom, paperDataListAtom } from "@/components/atom";
import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";
import Accordion from "@/helper/Accordion";
import AccordionWhite from "@/helper/AccordionWhite";
import { getBoardList } from "@/hooks/useData";

import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Page = () => {
  const t = useTranslations("MainPage");
  const PageBannerText = t("Page_Banner_Text");
  const SubMenu = [
    { subId: "61", title: t("News"), link: "/board" },
    { subId: "62", title: t("Branch Office"), link: "/board/branch" },
    {
      subId: "63",
      title: t("Contact Us"),
      link: "/contact",
    },
  ];
  const [itemsList, setItemsList] = useRecoilState(faqListAtom);

  const [itemsList2, setItemsList2] = useRecoilState(paperDataListAtom);

  const getData = async () => {
    const response = await getBoardList(4);

    const res = await getBoardList(3);
    if (response?.result?.success) {
      setItemsList(response?.result?.responseObject);
    }

    if (res?.result?.success) {
      setItemsList2(res?.result?.responseObject);
    }
  };
  useEffect(() => {
    //eslint-disable-next-line react-hooks/exhaustive-deps
    getData();
  }, []);
  return (
    <Layout type="main">
      <PageBanner mainText={PageBannerText} banner="/images/board_banner.png" />
      <PageTabMenu sub={SubMenu} />
      <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep max-md:px-4">
        <div className="text-center text-2xl font-semibold text-primary ">
          FAQ
        </div>

        <div className="mx-auto w-full mt-24 flex flex-col gap-3">
          {itemsList?.map((item, index) => {
            return (
              <Accordion
                key={index}
                title={String(item?.title)}
                content={String(item?.content)}
              />
            );
          })}
        </div>

        <div className="text-center text-2xl font-semibold text-primary mt-20">
          {t("Paper data")}
        </div>

        <div className="mx-auto w-full mt-24 flex flex-col gap-3">
          {itemsList2?.map((item, index) => {
            return (
              <AccordionWhite
                key={index}
                title={String(item?.title)}
                content={String(item?.content)}
              />
            );
          })}
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
