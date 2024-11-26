import { productsDetailAtom, productsListAtom } from "@/components/atom";
import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";

import { getProductsDetail, getProductsList } from "@/hooks/useData";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiMiniArrowLeft } from "react-icons/hi2";
import { useRecoilState } from "recoil";

const Page = () => {
    const router = useRouter();
    const { locale } = router;
    const id = router?.query?.id;
    const t = useTranslations("MainPage");
    const [activeTab, setActiveTab] = useState("tab1");
    const [itemsList, setItemsList] = useRecoilState(productsListAtom);
    const [itemsDetail, setItemsDetail] = useRecoilState(productsDetailAtom);
    const PageBannerText = t("Page_Banner_Text");
    const SubMenu = [
        { subId: "31", title: t("ARP Plasma"), link: "/products" },
        { subId: "32", title: t("N2 Plasma"), link: "/products/n2_plasma" },
        {
            subId: "33",
            title: t("Air Plasma"),
            link: "/products/air_plasma",
        },
        {
            subId: "34",
            title: t("Power Plasma"),
            link: "/products/power_plasma",
        },
    ];

    const changeTab = (tab: string) => {
        setActiveTab(tab);
    };

    const getData = async () => {
        const response = await getProductsList(2);

        if (response?.result?.success) {
            setItemsList(response?.result?.responseObject);
        }
    };
    useEffect(() => {
        //eslint-disable-next-line react-hooks/exhaustive-deps
        getData();
    }, []);

    const getDetail = async () => {
        if (id !== undefined) {
            const response = await getProductsDetail(Number(id));

            if (response?.result?.success) {
                setItemsDetail([response?.result?.responseObject]);
            }
        }
    };
    useEffect(() => {
        if (id !== undefined) {
            //eslint-disable-next-line react-hooks/exhaustive-deps
            getDetail();
        }
    }, [id]);
    return (
        <Layout type="main">
            <PageBanner
                mainText={PageBannerText}
                banner="/images/products/banner.png"
            />
            <PageTabMenu sub={SubMenu} />
            <div className="mx-auto max-w-[1224px] mt-[60px] mb-[150px] whitespace-pre-line break-keep">
                <div className="flex w-full justify-center items-center gap-3">
                    <button
                        type="button"
                        onClick={() => changeTab("tab1")}
                        className={`text-[18] font-semibold w-[160px] h-[45px] border border-[#6C7B9F] ${
                            activeTab === "tab1"
                                ? "bg-[#6C7B9F] text-white"
                                : "text-[#6C7B9F] "
                        }`}
                    >
                        N2 Plasma
                    </button>
                </div>
                <div
                    className={`${router.query.id ? "hidden" : ""} text-black`}
                >
                    <div
                        className={`${
                            activeTab === "tab1" ? "" : "hidden"
                        } mt-20`}
                    >
                        <div className="grid grid-cols-12 gap-5 max-md:px-4">
                            {itemsList?.map((item, index) => {
                                if (item?.sub_category === 1) {
                                    return (
                                        <div
                                            key={index}
                                            className="col-span-3 max-md:col-span-6 max-sm:col-span-12"
                                        >
                                            <Link
                                                href={`/products/n2_plasma?id=${item?.id}`}
                                            >
                                                <div className="">
                                                    <div className="">
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_FOLDER}/${item?.productFile?.[0]?.file_name}`}
                                                            alt={``}
                                                            className=" w-full min-h-[200px] max-h-[254px] max-sm:max-h-[304px]"
                                                            width="392"
                                                            height="200"
                                                            unoptimized={true}
                                                            priority={true}
                                                        />
                                                    </div>
                                                    <div className="text-xl max-sm:text-md mt-[10px] text-[#353644]">
                                                        {locale === "kr"
                                                            ? item?.title
                                                            : item?.title_en}
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div
                    id="detail"
                    className={`${
                        router.query.id ? "" : "hidden"
                    } text-black pt-10 max-sm:px-4`}
                >
                    <div className="">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_FOLDER}/${itemsDetail[0]?.productFile?.[0]?.file_name}`}
                            alt={``}
                            className=" w-full min-h-[200px] max-h-[600px] object-cover object-center rounded-[20px] max-sm:max-h-[304px] "
                            width="392"
                            height="200"
                            unoptimized={true}
                            priority={true}
                        />
                    </div>

                    <div className="mt-[30px]">
                        <div className="">
                            <div className="text-black text-[30px] max-sm:text-xl font-semibold mb-5">
                                {locale === "kr"
                                    ? itemsDetail[0]?.title
                                    : itemsDetail[0]?.title_en}
                            </div>
                            {locale === "kr" ? (
                                <div
                                    className="text-[#555555]"
                                    dangerouslySetInnerHTML={{
                                        __html: itemsDetail[0]
                                            ?.content as string,
                                    }}
                                ></div>
                            ) : (
                                <div
                                    className="text-[#555555]"
                                    dangerouslySetInnerHTML={{
                                        __html: itemsDetail[0]
                                            ?.content_en as string,
                                    }}
                                ></div>
                            )}
                        </div>

                        <div className="mt-20">
                            <Link
                                href={"/products/n2_plasma"}
                                className="flex h-10 items-center gap-1 justify-center border border-[#6C7B9F] text-[#6C7B9F] rounded-lg w-32"
                            >
                                <HiMiniArrowLeft /> Back to list
                            </Link>
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
