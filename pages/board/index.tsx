import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";
import Accordion from "@/helper/Accordion";
import AccordionWhite from "@/helper/AccordionWhite";
//import { getBoardList } from "@/hooks/useData";

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
        // const response = await getBoardList(4);
        // console.log(response);
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
                        title="What is atmospheric pressure plasma?"
                        content="Atmospheric pressure plasma literally means plasma in an atmospheric pressure atmosphere. Atmospheric pressure plasma is a gas in which electrons are separated from atoms or molecules in a gas under atmospheric pressure, causing electricity to flow and emit light."
                    />

                    <Accordion
                        title="What types of atmospheric pressure plasma are there?"
                        content="Atmospheric pressure plasma can be broadly divided into low-temperature plasma and thermal equilibrium plasma. Low-temperature plasma is a low-temperature plasma in which the plasma gas temperature and electron temperature are significantly different, and thermal plasma is a plasma in which the electron temperature and gas temperature are similar. Industrially, thermal plasma can be obtained at temperatures ranging from thousands to tens of thousands of degrees."
                    />
                    <Accordion
                        title="How is atmospheric pressure plasma generated?"
                        content="How is atmospheric pressure plasma generated? Plasma is generated electrically, and different types of atmospheric pressure plasma can be generated accordingly. Basic RF or AC discharge. Since the cathode and anode are alternately changed, the electrons also move back and forth accordingly."
                    />
                    <Accordion
                        title="What is dielectric barrier discharge (DBD)?"
                        content="The DBD method is a simple structure consisting of two electrodes and a dielectric.<br/>

When alternating current (AC) or pulse power is applied to one electrode of the DBD, charge is accumulated in the dielectric surrounding the electrode, and when the polarity of the electrode is changed, the charge accumulated in the dielectric is released, forming plasma between the electrodes.<br/><br/>



DBD can easily obtain discharge plasma even at high pressures such as atmospheric pressure, and the power frequency can be widely used from AC to RF.<br/><br/>



DBD can be divided into two types, low frequency and high frequency, depending on the power frequency.<br/><br/>

DBD (Dielectric Barrier)<br/><br/>

Dielecdtric Barrier Discharge<br/><br/>

In the case of low frequency DBD, it is also called “silent” or “atmospheric-pressure-glow discharge”, and at least one of the two electrodes has a dielectric barrier. The gap is several mm and the voltage is about 5 to 20 kV."
                    />
                    <Accordion
                        title="Diagnostics and Applications of Atmospheric Pressure Plasma"
                        content="Diagnosis and Application of Atmospheric Pressure Plasma<br/><br/>
An example of an easy diagnosis is the temperature of the plasma. In the case of low-temperature plasma, you can touch it with your hand, and even if you put paper in the plasma, it does not burn. In the case of thermal plasma, it is so hot that it is difficult to look directly at the plasma, and if you put a spoon in the plasma, it melts quickly."
                    />
                </div>

                <div className="text-center text-2xl font-semibold text-primary mt-20">
                    {t("Paper data")}
                </div>

                <div className="mx-auto w-full mt-24 flex flex-col gap-3">
                    <AccordionWhite
                        title="Improved ACF strength (improved bonding adhesion)"
                        content="The ACF bonding part of the pad of the Touch Cell is surface treated with plasma to increase the ACF bonding strength and improve reliability."
                    />

                    <AccordionWhite
                        title="Cover window reprocessing (removal of anti-fingerprint coating, anti-finger rework)"
                        content="During the coating process (AF, Anti-Finger) to prevent fingerprints or contamination of the cover window of the smart phone/PAD, plasma is used to clean and modify the surface before coating, thereby reducing the amount of coating liquid and improving the coating quality.<br/>
[Source] Cover Window AF (Anti-Finger Coating, Anti-Finger) Coating Pretreatment | Author AP<br/><br/>

https://blog.naver.com/appblog/220754173450"
                    />

                    <AccordionWhite
                        title="Cover window AF (Anti-fingerprint coating, Anti-Finger) coating pretreatment"
                        content="During the coating process (AF, Anti-Finger) to prevent fingerprints or contamination of the cover window of the smart phone/PAD, plasma is used to clean and modify the surface before coating, thereby reducing the amount of coating solution and improving the coating quality."
                    />
                    <AccordionWhite
                        title="Decomposition Reaction of Organophosphorus Nerve Agents on Solid Surfaces with Atmospheric"
                        content="Decomposition Reaction of Organophosphorus Nerve Agents on Solid Surfaces with Atmospheric<br/>
Radio Frequency Plasma Generated Gaseous Species<br/><br/>
Langmuir, Vol. 23, No. 15, (2007) 8075 <br/>"
                    />
                    <AccordionWhite
                        title="Surface_modification_effects_on_film_growth_with_atmospheric_Ar-Ar+O2_plasma"
                        content="Surface_modification_effects_on_film_growth_with_atmospheric_Ar-Ar+O2_plasma<br/><br/>
Surf. Coat. Technol. 174 –175, 1038 (2003)<br/>"
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
