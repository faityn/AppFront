import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";

import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const Page = () => {
  const t = useTranslations("MainPage");
  const PageBannerText = t("Page_Banner_Text");
  const SubMenu = [
    { subId: "61", title: t("News"), link: "/board" },
    { subId: "62", title: t("Branch Office"), link: "/board/branch" },
    {
      subId: "63",
      title: t("Contact Us"),
      link: "/board/contact",
    },
  ];

  const getData = async () => {
    //const response = await getBoardList(4);
    // if (response?.result?.success) {
    //   setItemsList(response?.result?.responseObject);
    // }
  };
  useEffect(() => {
    //eslint-disable-next-line react-hooks/exhaustive-deps
    getData();
  }, []);
  return (
    <Layout type="main">
      <PageBanner mainText={PageBannerText} banner="/images/board_banner.png" />
      <PageTabMenu sub={SubMenu} />
      <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep">
        <div className="text-center text-2xl font-semibold text-primary ">
          FAQ
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
