import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";

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

    return (
        <Layout type="main">
            <PageBanner
                mainText={PageBannerText}
                banner="/images/tech/banner.png"
            />
            <PageTabMenu sub={SubMenu} />
            <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep">
                <div className="text-center text-2xl font-semibold text-primary ">
                    {t("Deposition")}
                </div>

                <div className="mt-16 max-w-[983px] mx-auto max-md:px-4 border">
                    {locale === "kr" ? (
                        <Image
                            src={"/images/tech/t15_kr.png"}
                            alt={``}
                            className=" w-full max-h-[663px] max-md:max-h-[200px] "
                            width="392"
                            height="200"
                            unoptimized={true}
                            priority={true}
                        />
                    ) : (
                        <Image
                            src={"/images/tech/t15_en.png"}
                            alt={``}
                            className=" w-full max-h-[663px] max-md:max-h-[200px] "
                            width="392"
                            height="200"
                            unoptimized={true}
                            priority={true}
                        />
                    )}
                </div>

                <div className="mt-10 text-xl text-[#353644] px-5">
                    {t("deposition_page_text")}
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
