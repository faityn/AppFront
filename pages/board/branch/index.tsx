import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";

import Image from "next/image";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { useState } from "react";
import BranchListOneItem from "@/components/support/BranchListOneItem";

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
    const [activeTab, setActiveTab] = useState("tab1");

    const changeTab = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <Layout type="main">
            <PageBanner
                mainText={PageBannerText}
                banner="/images/board_banner.png"
            />
            <PageTabMenu sub={SubMenu} />
            <div className="mx-auto max-w-[1224px] mt-[60px] mb-[150px] whitespace-pre-line break-keep max-md:px-4">
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
                        {t("branch_tab_1_text")}
                    </button>
                    <button
                        type="button"
                        onClick={() => changeTab("tab2")}
                        className={`text-[18] font-semibold w-[160px] h-[45px] border border-[#6C7B9F] ${
                            activeTab === "tab2"
                                ? "bg-[#6C7B9F] text-white"
                                : "text-[#6C7B9F] "
                        }`}
                    >
                        {t("branch_tab_2_text")}
                    </button>
                </div>

                <div
                    className={`${activeTab === "tab1" ? "" : "hidden"} mt-20`}
                >
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.5928428731136!2d127.08595430000001!3d37.1623798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b465ed9f0d3df%3A0xf18c69775f630f99!2s7-12%20Dongtansandan%202-gil%2C%20Hwaseong-si%2C%20Gyeonggi-do%2C%20South%20Korea!5e0!3m2!1sen!2smn!4v1732598636924!5m2!1sen!2smn"
                            width="600"
                            height="450"
                            className="w-full"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    
                    <div className="flex justify-between max-sm:flex-col gap-4 mt-8">
                        <div className="">
                            <div className="flex items-center gap-2">
                                <div>
                                    {" "}
                                    <Image
                                        src={`/svg/marker.svg`}
                                        alt={``}
                                        className=" w-6 h-6  "
                                        width="24"
                                        height="24"
                                        unoptimized={true}
                                        priority={true}
                                    />
                                </div>

                                <div className="text-[#353644] text-[18px]">
                                    {t("branch_address_text_1")}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mt-3">
                                <div>
                                    {" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                    >
                                        <path
                                            d="M20.6633 19.2715C20.6633 19.2715 19.5047 20.4095 19.2207 20.7432C18.7582 21.2367 18.2132 21.4698 17.4988 21.4698C17.4301 21.4698 17.3568 21.4698 17.2881 21.4653C15.9279 21.3784 14.6639 20.8483 13.7159 20.3958C11.1238 19.1435 8.84771 17.3657 6.95629 15.1125C5.39461 13.2341 4.35044 11.4974 3.65891 9.63265C3.233 8.49464 3.07729 7.60799 3.14598 6.77162C3.19178 6.23689 3.39787 5.79357 3.77798 5.41423L5.33966 3.85574C5.56406 3.64551 5.80221 3.53125 6.03577 3.53125C6.32429 3.53125 6.55786 3.70492 6.70441 3.85117C6.70899 3.85574 6.71357 3.86031 6.71815 3.86489C6.99751 4.12539 7.26313 4.39504 7.54249 4.68298C7.68446 4.82923 7.83101 4.97548 7.97756 5.1263L9.22782 6.374C9.71327 6.85846 9.71327 7.30635 9.22782 7.79081C9.09501 7.92335 8.96678 8.05589 8.83397 8.18386C8.44927 8.5769 8.75147 8.27532 8.35304 8.63181C8.34388 8.64095 8.33472 8.64552 8.33014 8.65466C7.93629 9.04771 8.00956 9.43162 8.092 9.69213C8.09658 9.70584 8.10116 9.71955 8.10573 9.73326C8.43089 10.5194 8.88886 11.2598 9.58498 12.1418L9.58956 12.1464C10.8536 13.7003 12.1862 14.9115 13.6563 15.8392C13.8441 15.9581 14.0364 16.054 14.2196 16.1454C14.3845 16.2277 14.5402 16.3054 14.673 16.3877C14.6913 16.3968 14.7097 16.4105 14.728 16.4197C14.8837 16.4974 15.0302 16.5339 15.1814 16.5339C15.5615 16.5339 15.7996 16.2963 15.8775 16.2186L16.7752 15.3227C16.9309 15.1673 17.1782 14.98 17.4667 14.98C17.7506 14.98 17.9842 15.1582 18.1262 15.3136C18.1308 15.3182 18.1308 15.3182 18.1353 15.3227L20.6587 17.841C21.1305 18.3072 20.6633 19.2715 20.6633 19.2715Z"
                                            stroke="#3B77EA"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div className="text-[#353644] text-[18px]">
                                    {t("branch_address_text_2")}
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-2">
                                <div>
                                    {" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                    >
                                        <path
                                            d="M6.0001 20.8992L4.2001 23.2992M20.3186 23.2789L18.4663 20.9191M8.40057 17.3714V17.2992M15.6006 17.3714V17.2992M4.8001 14.2992H19.8001M12.0001 5.29922V13.6992M9.0001 1.69922H15.0001M6.5648 20.8992H17.4354C19.0728 20.8992 20.4001 19.5719 20.4001 17.9345V8.26392C20.4001 6.62656 19.0728 5.29922 17.4354 5.29922H6.5648C4.92744 5.29922 3.6001 6.62656 3.6001 8.26392V17.9345C3.6001 19.5719 4.92744 20.8992 6.5648 20.8992Z"
                                            stroke="#3B77EA"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>

                                <div className="text-[#353644] text-[18px]">
                                    {t("branch_address_text_3")}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mt-3">
                                <div>
                                    {" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 3.5C4.79086 3.5 3 5.29086 3 7.5V17.5C3 18.8113 3.84136 19.9262 5.0137 20.3341C5.00469 20.3881 5 20.4435 5 20.5V21.5C5 22.0523 5.44772 22.5 6 22.5H7C7.55228 22.5 8 22.0523 8 21.5V20.5H16V21.5C16 22.0523 16.4477 22.5 17 22.5H18C18.5523 22.5 19 22.0523 19 21.5V20.5C19 20.4435 18.9953 20.3881 18.9863 20.3341C20.1586 19.9262 21 18.8113 21 17.5V7.5C21 5.29086 19.2091 3.5 17 3.5H7ZM19 6.5H5V14.5H19V6.5ZM8 17C8 17.8284 7.32843 18.5 6.5 18.5C5.67157 18.5 5 17.8284 5 17C5 16.1716 5.67157 15.5 6.5 15.5C7.32843 15.5 8 16.1716 8 17ZM17.5 18.5C18.3284 18.5 19 17.8284 19 17C19 16.1716 18.3284 15.5 17.5 15.5C16.6716 15.5 16 16.1716 16 17C16 17.8284 16.6716 18.5 17.5 18.5Z"
                                            fill="#3B77EA"
                                        />
                                    </svg>
                                </div>

                                <div className="text-[#353644] text-[18px]">
                                    {t("branch_address_text_4")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`${activeTab === "tab2" ? "" : "hidden"} mt-16`}
                >
                    <div className="max-w-[600px] mx-auto text-center text-xl text-[#353644] ">
                        {t("branch_tab_2_text_2")}
                    </div>

                    <div className="grid grid-cols-12 gap-5 mt-[60px] ">
                        <div className="col-span-4 max-xl:col-span-6 max-sm:col-span-12">
                            <BranchListOneItem
                                title={t("branch_1_title")}
                                image="/images/board/dep1.png"
                                phone="+84-093-5205-921"
                                email="calebyoo@applasma.com"
                                address="#550000, UNETI, 218 Linh Nam Street,Hoang Mai District, Hanoi, Vietnam (1103 Room)"
                                link="https://maps.app.goo.gl/Rr8UMSDJ2JKH1Mhq6"
                            />
                        </div>
                        <div className="col-span-4 max-xl:col-span-6 max-sm:col-span-12">
                            <BranchListOneItem
                                title={t("branch_2_title")}
                                image="/images/board/dep2.png"
                                phone="+81-80-1316-5693"
                                email="hwlee@applasma.com"
                                address="#218 Minamisawa 5-19-24, Higashikurume Tokyo 203-0023 Japan"
                                link="https://maps.app.goo.gl/7HT1VvkVk3Q3gX637"
                            />
                        </div>
                        <div className="col-span-4 max-xl:col-span-6 max-sm:col-span-12">
                            <BranchListOneItem
                                title={t("branch_3_title")}
                                image="/images/board/dep3.png"
                                phone="+86-183-7316-8665"
                                email="jason@applasma.com"
                                email2="howard@applasma.com"
                                address="Room 1110, part2, No.7 Building, Shangdu Huayuancheng,No.2 Nanshan Road, Xingsha County, Changsha City,Hunan Province, China"
                                link="https://maps.app.goo.gl/mJj7Tzcy3C8mxWCE6"
                            />
                        </div>
                        <div className="col-span-4 max-xl:col-span-6 max-sm:col-span-12">
                            <BranchListOneItem
                                title={t("branch_4_title")}
                                image="/images/board/dep4.png"
                                phone="+1-408-232-5431"
                                email="kevin@applasma.com"
                                address="#315,3003 N,FirstStreet,San Jose, CA 95134"
                                link="https://maps.app.goo.gl/Fmd1dyB5TytQeg3B6"
                            />
                        </div>
                        <div className="col-span-4 max-xl:col-span-6 max-sm:col-span-12">
                            <BranchListOneItem
                                title={t("branch_5_title")}
                                image="/images/board/dep5.png"
                                phone="+91-92-2121-3131"
                                email="david@applasma.com"
                                address="1st Floor, Plot no13, Cama Industrial Estate, Goregaon East, Mumbai, Maharashtra 400063, INDIA"
                                link="https://maps.app.goo.gl/3oJ2K5ubt3qCnZQG9"
                            />
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
