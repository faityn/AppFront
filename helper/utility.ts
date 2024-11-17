import { useTranslations } from "next-intl";

export const Menu = () => {
    const t = useTranslations("MainPage");
    const data = [
        {
            name: t("Our_Company"),
            link: "#",
            sub: [
                {
                    name: t("Ceo Greeting"),
                    link: "#",
                },
                {
                    name: t("Company History"),
                    link: "#",
                },
                {
                    name: t("Our Company"),
                    link: "#",
                },
            ],
        },
        {
            name: t("Our Business"),
            link: "#",
            sub: [
                {
                    name: t("Display"),
                    link: "#",
                },
                {
                    name: t("Semiconductor"),
                    link: "#",
                },
                {
                    name: t("Secondary Battery"),
                    link: "#",
                },
                {
                    name: t("Part-Materials"),
                    link: "#",
                },
            ],
        },
        {
            name: t("APP Products"),
            link: "#",
            sub: [
                {
                    name: t("Surface Treatment"),
                    link: "#",
                },
                {
                    name: t("Nano Coating"),
                    link: "#",
                },
                {
                    name: t("Nano Etching"),
                    link: "#",
                },
            ],
        },
        {
            name: t("APP Technology"),
            link: "#",
            sub: [
                {
                    name: t("Surface Treatment"),
                    link: "#",
                },
                {
                    name: t("Nano Coating"),
                    link: "#",
                },
                {
                    name: t("Nano Etching"),
                    link: "#",
                },
                {
                    name: t("Reduction"),
                    link: "#",
                },
                {
                    name: t("Cleaning"),
                    link: "#",
                },
            ],
        },
        {
            name: t("Recruit"),
            link: "#",
            sub: [
                {
                    name: t("Recruit"),
                    link: "#",
                },
            ],
        },
        {
            name: t("Support"),
            link: "#",
            sub: [
                {
                    name: t("News"),
                    link: "#",
                },
                {
                    name: t("Branch Office"),
                    link: "#",
                },
                {
                    name: t("Contact Us"),
                    link: "#",
                },
            ],
        },
    ];
    return data;
};

export const Banner = () => {
    const t = useTranslations("MainPage");
    const data = [
        {
            text: t("Banner_1_text"),
            video_link:
                "https://res.cloudinary.com/do5useihi/video/upload/v1731403539/APP_video_1_olx606.mp4",
        },
        {
            text: t("Banner_2_text"),
            video_link:
                "https://res.cloudinary.com/do5useihi/video/upload/v1731402243/ILP-1500Sss-online-video-cutter.com-1_czrjs2.mp4",
        },
        {
            text: t("Banner_3_text"),
            video_link:
                "https://res.cloudinary.com/do5useihi/video/upload/v1731402246/ILP-600HM-online-video-cutter.com-1-1_tjzyur.mp4",
        },
        {
            text: t("Banner_4_text"),
            video_link:
                "https://res.cloudinary.com/do5useihi/video/upload/v1731402239/Untitled_video_-_Made_with_Clipchamp_2_ofgaqh.mp4",
        },
    ];
    return data;
};

export const HomeSection2SliderItem = () => {
    const data = [
        {
            image: "/images/arp_series_1.png",
        },
        {
            image: "/images/arp_series_2.png",
        },
        {
            image: "/images/arp_series_3.png",
        },
    ];
    return data;
};

export const HomeSection3ListItem = () => {
    const t = useTranslations("MainPage");
    const data = [
        {
            number: "01",
            text: t("Home_section_3_list_item_1_text"),
            image: "/images/solution1.png",
        },
        {
            number: "02",
            text: t("Home_section_3_list_item_2_text"),
            image: "/images/solution2.png",
        },
        {
            number: "03",
            text: t("Home_section_3_list_item_3_text"),
            image: "/images/solution3.png",
        },
        {
            number: "04",
            text: t("Home_section_3_list_item_4_text"),
            image: "/images/solution4.png",
        },
    ];
    return data;
};
