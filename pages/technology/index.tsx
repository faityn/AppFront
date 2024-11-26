import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";
import {
    TechnologyPage1List1,
    TechnologyPage1List2,
    TechnologyPage1List3,
    TechnologyPage1List4,
} from "@/helper/utility";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/router";

const Page = () => {
    const router = useRouter();
    const { locale } = router;
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
    const itemList = TechnologyPage1List1();
    const itemList2 = TechnologyPage1List2();
    const itemList3 = TechnologyPage1List3();
    const itemList4 = TechnologyPage1List4();

    return (
        <Layout type="main">
            <PageBanner
                mainText={PageBannerText}
                banner="/images/tech/banner.png"
            />
            <PageTabMenu sub={SubMenu} />
            <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep">
                <div className="text-center text-2xl font-semibold text-primary ">
                    {t("Surface Treatment")}
                </div>

                <div className="mt-10 max-md:px-4 ">
                    <div className="grid grid-cols-8  gap-[10px]">
                        {itemList?.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="col-span-1 max-md:col-span-4"
                                >
                                    <div className="p-3 w-full h-[130px] text-md max-xl:text-sm flex items-center justify-center text-center bg-[#276CF3]/10 text-[#353644] rounded-[10px]">
                                        {item?.text}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-[100px] max-w-[808px] mx-auto max-md:px-4">
                        <div className="text-[#353644] text-xl font-bold text-center">
                            {t("Technology_Page_1_List_2_Title_1")}
                        </div>
                        <div className="mt-[30px] grid grid-cols-12 gap-[10px] ">
                            {itemList2?.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="col-span-3 max-md:col-span-6"
                                    >
                                        <div className="h-[100px]  w-full text-md max-xl:text-sm flex items-center justify-center text-center p-3 border text-[#353644] border-[#759BF1] rounded-xl ">
                                            {item?.text}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-[60px] max-md:px-4">
                        <div className="flex max-sm:flex-col gap-6 ">
                            <div className="w-full">
                                {locale === "kr" ? (
                                    <Image
                                        src={"/images/tech1_kr.png"}
                                        alt={``}
                                        className=" w-full h-[425px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                        width="200"
                                        height="200"
                                        unoptimized={true}
                                        priority={true}
                                    />
                                ) : (
                                    <Image
                                        src={"/images/tech1.png"}
                                        alt={``}
                                        className=" w-full h-[425px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                        width="200"
                                        height="200"
                                        unoptimized={true}
                                        priority={true}
                                    />
                                )}

                                <div className="text-center text-[#555555] text-md mt-3">
                                    {t("Technology_Page_image_title_1")}
                                </div>
                            </div>
                            <div className="w-full">
                                {locale === "kr" ? (
                                    <Image
                                        src={"/images/tech2_kr.png"}
                                        alt={``}
                                        className=" w-full h-[425px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                        width="200"
                                        height="200"
                                        unoptimized={true}
                                        priority={true}
                                    />
                                ) : (
                                    <Image
                                        src={"/images/tech2.png"}
                                        alt={``}
                                        className=" w-full h-[425px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                        width="200"
                                        height="200"
                                        unoptimized={true}
                                        priority={true}
                                    />
                                )}
                                <div className="text-center text-[#555555] text-md mt-3">
                                    {t("Technology_Page_image_title_2")}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[60px] max-md:px-4">
                        <div className="text-[#353644] text-xl font-bold text-center mb-[30px]">
                            유기물 제거
                        </div>

                        <div className=" grid grid-cols-12 gap-5 ">
                            {itemList3?.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="col-span-2 max-md:col-span-6"
                                    >
                                        <div className="p-3 w-full h-[130px] max-md:h-[100px] text-md max-xl:text-sm flex items-center justify-center text-center text-[#353644] border border-[#759BF1]  rounded-[10px]">
                                            {item?.text}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-[60px] max-md:px-4">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-4 max-md:col-span-12 ">
                                <div className="text-[#353644] text-xl font-bold text-center mb-[30px] mt-10">
                                     {t("Activation effect")}
                                </div>
                                <div className="grid grid-cols-12 gap-5">
                                    <div className="col-span-6 ">
                                        <div className="p-3 w-full h-[130px] max-md:h-[100px] text-md max-xl:text-sm flex items-center justify-center text-center text-[#353644] border border-[#759BF1]  rounded-[10px]">
                                            
                                            {t("Surface tension increased by plasma treatment")}
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="p-3 w-full h-[130px] max-md:h-[100px] text-md max-xl:text-sm flex items-center justify-center text-center text-[#353644] border border-[#759BF1]  rounded-[10px]">
                                            
                                            {t("Uniform surface activation even on large surfaces")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-6 max-md:col-span-12">
                                <div className="text-[#353644] text-xl font-bold text-center mb-[30px] mt-10">
                                    {t("Moisture removal")}
                                </div>
                                <div className="grid grid-cols-12 gap-5">
                                    <div className="col-span-2 w-full max-md:col-span-12"></div>
                                    <div className="col-span-8 w-full max-md:col-span-12">
                                        <div className="grid grid-cols-12 gap-5">
                                            <div className="col-span-6 ">
                                                <div className="p-3 w-full h-[130px] text-md max-xl:text-sm flex items-center justify-center text-center text-[#353644] border border-[#759BF1]  rounded-[10px]">
                                                  
                                                    {t("Laminating, Bonding Strength Improvement")}
                                                </div>
                                            </div>
                                            <div className="col-span-6">
                                                <div className="p-3 w-full h-[130px] text-md max-xl:text-sm flex items-center justify-center text-center text-[#353644] border border-[#759BF1]  rounded-[10px]">
                                                     {t("Improvement of post-processing characteristics such as Coating / Printing / Plating")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 w-full max-md:col-span-12"></div>
                                </div>
                            </div>
                            <div className="col-span-2 max-md:col-span-12">
                                <div className="text-[#353644] text-xl font-bold text-center mb-[30px] mt-10">
                                    {t("Surface treatment")}
                                </div>
                                <div className="grid grid-cols-12  ">
                                    <div className="max-md:col-span-3 col-span-12"></div>
                                    <div className="max-md:col-span-6 col-span-12 ">
                                        <div className="p-3 w-full h-[130px] text-md max-xl:text-sm flex items-center justify-center text-center text-[#353644] border border-[#759BF1]  rounded-[10px]">
                                            cf) AFM 해상도 : 0.1nm
                                        </div>
                                    </div>
                                    <div className="max-md:col-span-3 col-span-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[80px] max-md:px-4">
                        <div className=" grid grid-cols-10 gap-5 ">
                            {itemList4?.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="col-span-2 max-md:col-span-5"
                                    >
                                        <div className="">
                                            <Image
                                                src={item?.image}
                                                alt={``}
                                                className=" w-full max-h-[240px] max-md:max-h-[200px] "
                                                width="392"
                                                height="200"
                                                unoptimized={true}
                                                priority={true}
                                            />
                                        </div>
                                        <div className="px-4 mt-[10px] text-[#555555] text-[16px] text-center">
                                            {item?.text}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="mt-[80px] max-md:px-4">
                        <div className="flex max-sm:flex-col gap-6 ">
                            <div className="w-full">
                                <Image
                                    src={"/images/tech/t1.png"}
                                    alt={``}
                                    className=" w-full h-[425px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                    width="200"
                                    height="200"
                                    unoptimized={true}
                                    priority={true}
                                />
                            </div>
                            <div className="w-full">
                                <Image
                                    src={"/images/tech/t2.png"}
                                    alt={``}
                                    className=" w-full h-[425px] max-lg:max-h-[250px] sm:object-cover object-center rounded-[20px] z-10"
                                    width="200"
                                    height="200"
                                    unoptimized={true}
                                    priority={true}
                                />
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
