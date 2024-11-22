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
    { subId: "41", title: t("Surface Treatment"), link: "/technology" },
    { subId: "42", title: t("Reduction"), link: "/technology/reduction" },
    {
      subId: "43",
      title: t("Etching"),
      link: "/technology/etching",
    },
    {
      subId: "44",
      title: t("Deposition"),
      link: "/technology/deposition",
    },
  ];

  return (
    <Layout type="main">
      <PageBanner mainText={PageBannerText} banner="/images/tech/banner.png" />
      <PageTabMenu sub={SubMenu} />
      <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep">
        <div className="text-center text-2xl font-semibold text-primary ">
          {t("Deposition")}
        </div>

        <div className="mt-16 max-w-[983px] mx-auto max-md:px-4 border">
          <Image
            src={"/images/tech/t15.png"}
            alt={``}
            className=" w-full max-h-[663px] max-md:max-h-[200px] "
            width="392"
            height="200"
            unoptimized={true}
            priority={true}
          />
        </div>

        <div className="mt-10 text-xl text-[#353644] px-5">
          웨이퍼 표면에 얇은 막을 씌워 전기적 특성을 갖도록 만드는 공정. <br />
          <br />
          증착 공정은 웨이퍼 표면에 원하는 물질을 박막의 두께로 입혀 전기적인
          특성을 갖게 하는 과정이다. <br />
          <br />
          이 과정에서 분자 또는 원자 단위의 물질을 웨이퍼에 여러 겹으로 쌓게
          되는데, 박막을 얼마나 얇고 균일하게 입혔느냐에 따라 반도체의 품질이
          좌우되기 때문에 매우 중요한 공정 중 하나이다. 또한 박막의 두께가 워낙
          얇기 때문에 정교하고 세밀한 기술이 필요하다.
          <br />
          <br />
          증착은 크게 물리적 기상증착방법(PVD, Physical Vapor Deposition)과
          화학적 기상증착방법(CVD, Chemical Vapor Deposition)으로 나뉜다. 물리적
          기상증착방법(PVD)은 금속 박막의 증착에 주로 사용되며 화학반응이
          수반되지는 않는다.
          <br />
          <br />
          이와 달리 화학적 기상증착방법(CVD)은 가스의 화학 반응으로 형성된
          입자들을 외부 에너지가 부여된 수증기 형태로 쏘아 증착 시키는 방법으로
          도체, 부도체, 반도체의 박막 증착에 모두 사용될 수 있다.
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
