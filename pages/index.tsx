import Image from "next/image";

import Layout from "@/components/Layout";
import HomeMainBanner from "@/components/Banner/HomeMainBanner";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
    const t = useTranslations("MainPage");
    return (
        <Layout type="main">
            <div className={`whitespace-pre-line`}>
                <HomeMainBanner />
                <div id="section_1" className=" bg-white mt-[100px] ">
                    <div className="mx-auto max-w-[1224px] ">
                        <div className="flex w-full gap-5 text-[#353644]">
                            <div className="w-full  ">
                                <div className="text-[48px] leading-[64px] font-bold max-w-[496px]">
                                    {t("Home_section_1_text_1")}
                                </div>
                            </div>
                            <div className="w-full text-xl font-light">
                                {t("Home_section_1_text_2")}
                                <div>
                                    <Link
                                        href="#"
                                        className="mt-5 border border-black rounded-3xl w-[122px] h-[43px] text-sm text-black font-medium flex items-center justify-center"
                                    >
                                        더 알아보기
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className=" w-full mt-[108px]">
                            <div className="text-primary text-2xl border-b border-[#D9D9D9]">
                                Businesses
                            </div>

                            <div className="w-full mt-[36px]">
                                <div className="grid grid-cols-12 gap-5 w-full mb-5">
                                    <div className="col-span-7">
                                        <Image
                                            src={`/images/h1.png`}
                                            alt={`images/h1.png`}
                                            className=" h-[289px] w-full object-cover object-center rounded-3xl"
                                            width="130"
                                            height="50"
                                            unoptimized={true}
                                            priority={true}
                                        />
                                    </div>
                                    <div className="col-span-5">
                                        <Image
                                            src={`/images/h2.png`}
                                            alt={`images/h2.png`}
                                            className=" h-[289px] w-full object-cover object-center rounded-3xl"
                                            width="130"
                                            height="50"
                                            unoptimized={true}
                                            priority={true}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 gap-5 w-full mb-5">
                                    <div className="col-span-5">
                                        <Image
                                            src={`/images/h3.png`}
                                            alt={`images/h3.png`}
                                            className=" h-[289px] w-full object-cover object-center rounded-3xl"
                                            width="130"
                                            height="50"
                                            unoptimized={true}
                                            priority={true}
                                        />
                                    </div>
                                    <div className="col-span-7">
                                        <Image
                                            src={`/images/h4.png`}
                                            alt={`images/h4.png`}
                                            className=" h-[289px] w-full object-cover object-center rounded-3xl"
                                            width="130"
                                            height="50"
                                            unoptimized={true}
                                            priority={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const messages = (await import(`../messages/${locale}.json`)).default;

    return {
        props: {
            messages,
        },
    };
};
