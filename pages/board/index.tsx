import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";
import Accordion from "@/helper/Accordion";
import AccordionWhite from "@/helper/AccordionWhite";
import { getBoardList } from "@/hooks/useData";

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
            link: "/contact",
        },
    ];

    const getData = async () => {
        const response = await getBoardList(4);
        console.log(response);
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
            <PageBanner
                mainText={PageBannerText}
                banner="/images/board_banner.png"
            />
            <PageTabMenu sub={SubMenu} />
            <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep max-md:px-4">
                <div className="text-center text-2xl font-semibold text-primary ">
                    FAQ
                </div>

                <div className="mx-auto w-full mt-24 flex flex-col gap-3">
                    <Accordion
                        title="대기압 플라즈마란 무엇인가?"
                        content="대기압 플라즈마란 무엇인가?"
                    />

                    <Accordion
                        title="대기압 플라즈마는 어떤 종류가 있는가?"
                        content="대기압 플라즈마는 어떤 종류가 있는가?"
                    />
                    <Accordion
                        title="대기압 플라즈마는 어떻게 발생시키는가?"
                        content="대기압 플라즈마는 어떻게 발생시키는가?"
                    />
                    <Accordion
                        title="Dielectric barrier discharge(DBD)란 무엇인가?"
                        content="Dielectric barrier discharge(DBD)란 무엇인가?"
                    />
                    <Accordion
                        title="대기압 플라즈마의 진단 및 응용"
                        content="대기압 플라즈마의 진단 및 응용"
                    />
                </div>

                <div className="text-center text-2xl font-semibold text-primary mt-20">
                    {t("Paper data")}
                </div>

                <div className="mx-auto w-full mt-24 flex flex-col gap-3">
                    <AccordionWhite
                        title="Escherichia coli deactivation study controlling the atmospheric pressure plasma discharge conditions"
                        content="<strong> Escherichia coli deactivation study controlling the atmospheric pressure plasma discharge conditions </strong> <br/>
Bio-applications of plasma have been widely studied in recent years. However, considering the high interests, the inactivation mechanisms of micro-organisms by plasma have not been clearly explained. The goal of this study was to find the sterilization mechanisms and define the major sterilization factors with the atmospheric pressure radio-frequency helium glow discharge. For the sterilization target the Escherichia coli was used. To begin with the sterilization study, the plasma characteristics were investigated by means of electrical and optical diagnostics. Especially, the gas temperature was controlled under 50 °C by keeping the input power less than 70 W to eliminate the thermal effects. Contribution of the UV irradiation from the plasma was studied and it turned out to be negligible. On the other hand,"
                    />

                    <AccordionWhite
                        title="Polydimethylsiloxane Microlens Arrays Fabricated Through Liquid-Phase Photopolymerization and Molding"
                        content=""
                    />

                    <AccordionWhite
                        title="The Effect of Openair® Atmospheric Plasma on the Adhesion of UV Curable Coatings to Plastics"
                        content=""
                    />
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
