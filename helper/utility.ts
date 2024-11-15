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
            video_link: "https://res.cloudinary.com/do5useihi/video/upload/v1731403539/APP_video_1_olx606.mp4",
            
        },
        {
            text: t("Banner_2_text"),
            video_link: "https://res.cloudinary.com/do5useihi/video/upload/v1731402243/ILP-1500Sss-online-video-cutter.com-1_czrjs2.mp4",
            
        },
        {
            text: t("Banner_3_text"),
            video_link: "https://res.cloudinary.com/do5useihi/video/upload/v1731402246/ILP-600HM-online-video-cutter.com-1-1_tjzyur.mp4",
            
        },
       {
            text: t("Banner_4_text"),
            video_link: "https://res.cloudinary.com/do5useihi/video/upload/v1731402239/Untitled_video_-_Made_with_Clipchamp_2_ofgaqh.mp4",
            
        },
    ];
    return data;
};
