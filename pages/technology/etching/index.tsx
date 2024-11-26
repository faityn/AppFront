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
            <PageBanner
                mainText={PageBannerText}
                banner="/images/tech/banner.png"
            />
            <PageTabMenu sub={SubMenu} />
            <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep">
                <div className="text-center text-2xl font-semibold text-primary ">
                    {t("Etching")}
                </div>

                <div className="mt-10 max-md:px-4 ">
                    <div className="text-xl text-[#353644] text-center">
                        {t("Etching_page_text_1")}
                    </div>

                    <div className="mt-20 mb-[10px] text-center text-xl font-semibold text-[#353644] ">
                        Nitride Etching
                    </div>
                    <div className="text-xl text-[#353644] text-center">
                        Sample: SiNx on Wafer
                    </div>
                    <div className="text-xl text-[#353644] text-center">
                        Treatment Speed: 10mm/s, 40 times, 200mm length
                    </div>
                    <div className="mt-10 max-md:px-4">
                        <div className="flex max-sm:flex-col gap-6 ">
                            <div className="w-full">
                                <Image
                                    src={"/images/tech/t7.png"}
                                    alt={``}
                                    className=" w-full h-[340px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                    width="200"
                                    height="200"
                                    unoptimized={true}
                                    priority={true}
                                />
                                <div className="text-center text-[#555555] text-md mt-3">
                                    Before
                                </div>
                            </div>
                            <div className="w-full">
                                <Image
                                    src={"/images/tech/t8.png"}
                                    alt={``}
                                    className=" w-full h-[340px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                    width="200"
                                    height="200"
                                    unoptimized={true}
                                    priority={true}
                                />
                                <div className="text-center text-[#555555] text-md mt-3">
                                    After
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 mb-[10px] text-center text-xl font-semibold text-[#353644] ">
                        Nitride Etching
                    </div>
                    <div className="text-xl text-[#353644] text-center">
                        Si₃N₄ films: 5cm x 5cm x 2,000A
                    </div>
                    <div className="mt-10 max-md:px-4">
                        <div className="flex max-sm:flex-col gap-6 ">
                            <div className="w-full">
                                <Image
                                    src={"/images/tech/t9.png"}
                                    alt={``}
                                    className=" w-full h-[340px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                    width="200"
                                    height="200"
                                    unoptimized={true}
                                    priority={true}
                                />
                                <div className="text-center text-[#555555] text-md mt-3">
                                    Before
                                </div>
                            </div>
                            <div className="w-full">
                                <Image
                                    src={"/images/tech/t10.png"}
                                    alt={``}
                                    className=" w-full h-[340px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                    width="200"
                                    height="200"
                                    unoptimized={true}
                                    priority={true}
                                />
                                <div className="text-center text-[#555555] text-md mt-3">
                                    After
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 mb-[10px] text-center text-xl font-semibold text-[#353644] ">
                        Ashing Etching
                    </div>
                    <div className="text-xl text-[#353644] text-center">
                        {t("Etching_page_text_5")}
                    </div>
                    <div className="mt-10 mb-[10px] text-center text-xl font-semibold text-[#353644] ">
                        Wafer Ashing
                    </div>
                    <div className="max-w-[319px] mx-auto text-xl text-[#353644] text-left ">
                        Wafer : 6inch <br />
                        PR thickness : 1um <br />
                        {t("PR Type")} : Positive (Model: GSR-601)
                        <br />
                    </div>

                    <div className="mt-[60px] flex max-sm:flex-col gap-5 w-full">
                        <div className="w-full flex flex-col items-center justify-center">
                            <Image
                                src={"/images/tech/t11.png"}
                                alt={``}
                                className=" w-full h-[340px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                width="200"
                                height="200"
                                unoptimized={true}
                                priority={true}
                            />
                            <div className="text-center text-[#555555] text-md mt-3">
                                Before
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center justify-center">
                            <Image
                                src={"/images/tech/t12.png"}
                                alt={``}
                                className=" w-full h-[340px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                width="200"
                                height="200"
                                unoptimized={true}
                                priority={true}
                            />
                            <div className="text-center text-[#555555] text-md mt-3">
                                After
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 mb-[10px] text-center text-xl font-semibold text-[#353644] ">
                        Color filter / OC layer Ashing
                    </div>
                    <div className="max-w-[332px] mx-auto text-xl text-[#353644] text-left ">
                        Sample : LCD Color filter <br />
                        Removal layer : Color filter / OC layer
                        <br />
                    </div>

                    <div className="mt-[60px] flex max-sm:flex-col gap-5 w-full">
                        <div className="flex max-sm:flex-col gap-6 ">
                            <div className="w-full">
                                <Image
                                    src={"/images/tech/t13.png"}
                                    alt={``}
                                    className=" w-full h-[340px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                    width="200"
                                    height="200"
                                    unoptimized={true}
                                    priority={true}
                                />
                                <div className="text-center text-[#555555] text-md mt-3">
                                    Before
                                </div>
                            </div>
                            <div className="w-full">
                                <Image
                                    src={"/images/tech/t14.png"}
                                    alt={``}
                                    className=" w-full h-[340px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                    width="200"
                                    height="200"
                                    unoptimized={true}
                                    priority={true}
                                />
                                <div className="text-center text-[#555555] text-md mt-3">
                                    After
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
