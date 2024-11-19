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

export const HomeSection4ListItem = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      text: t("Home_section_4_text_1"),
    },
    {
      text: t("Home_section_4_text_2"),
    },
    {
      text: t("Home_section_4_text_3"),
    },
    {
      text: t("Home_section_4_text_4"),
    },
    {
      text: t("Home_section_4_text_5"),
    },
  ];
  return data;
};

export const HistoryImageList = () => {
  const data = [
    {
      image: "/images/history/his1.png",
    },
    {
      image: "/images/history/his2.png",
    },
    {
      image: "/images/history/his3.png",
    },
    {
      image: "/images/history/his4.png",
    },
    {
      image: "/images/history/his5.png",
    },
    {
      image: "/images/history/his6.png",
    },
    {
      image: "/images/history/his7.png",
    },
    {
      image: "/images/history/his8.png",
    },
    {
      image: "/images/history/his9.png",
    },
    {
      image: "/images/history/his10.png",
    },
    {
      image: "/images/history/his11.png",
    },
    {
      image: "/images/history/his12.png",
    },
    {
      image: "/images/history/his13.png",
    },
    {
      image: "/images/history/his14.png",
    },
    {
      image: "/images/history/his15.png",
    },
    {
      image: "/images/history/his16.png",
    },
    {
      image: "/images/history/his17.png",
    },
  ];
  return data;
};

export const HistoryTextList = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      date: "2024",
      history: [
        {
          text: t("timeline_text_1"),
        },
        {
          text: t("timeline_text_2"),
        },
      ],
    },
    {
      date: "2023",
      history: [
        {
          text: t("timeline_text_3"),
        },
        {
          text: t("timeline_text_4"),
        },
      ],
    },
    {
      date: "2022",
      history: [
        {
          text: t("timeline_text_5"),
        },
      ],
    },
    {
      date: "2021",
      history: [
        {
          text: t("timeline_text_6"),
        },
        {
          text: t("timeline_text_7"),
        },
      ],
    },
    {
      date: "2020",
      history: [
        {
          text: t("timeline_text_8"),
        },
      ],
    },
    {
      date: "2019",
      history: [
        {
          text: t("timeline_text_9"),
        },
      ],
    },
    {
      date: "2018",
      history: [
        {
          text: t("timeline_text_10"),
        },
        {
          text: t("timeline_text_11"),
        },
      ],
    },
    {
      date: "2017",
      history: [
        {
          text: t("timeline_text_12"),
        },
        {
          text: t("timeline_text_13"),
        },
      ],
    },
    {
      date: "2016",
      history: [
        {
          text: t("timeline_text_14"),
        },
      ],
    },
    {
      date: "2015",
      history: [
        {
          text: t("timeline_text_15"),
        },
        {
          text: t("timeline_text_16"),
        },
      ],
    },
    {
      date: "2014",
      history: [
        {
          text: t("timeline_text_17"),
        },
      ],
    },
    {
      date: "2013",
      history: [
        {
          text: t("timeline_text_18"),
        },
        {
          text: t("timeline_text_19"),
        },
        {
          text: t("timeline_text_20"),
        },
        {
          text: t("timeline_text_21"),
        },
        {
          text: t("timeline_text_22"),
        },
        {
          text: t("timeline_text_23"),
        },
        {
          text: t("timeline_text_24"),
        },
      ],
    },
    {
      date: "2012",
      history: [
        {
          text: t("timeline_text_25"),
        },
        {
          text: t("timeline_text_26"),
        },
        {
          text: t("timeline_text_27"),
        },
        {
          text: t("timeline_text_28"),
        },
        {
          text: t("timeline_text_29"),
        },
        {
          text: t("timeline_text_30"),
        },
      ],
    },

    {
      date: "2011",
      history: [
        {
          text: t("timeline_text_31"),
        },
        {
          text: t("timeline_text_32"),
        },
        {
          text: t("timeline_text_33"),
        },
        {
          text: t("timeline_text_34"),
        },
      ],
    },
    {
      date: "2010",
      history: [
        {
          text: t("timeline_text_35"),
        },
      ],
    },
    {
      date: "2009",
      history: [
        {
          text: t("timeline_text_36"),
        },
      ],
    },
    {
      date: "2008",
      history: [
        {
          text: t("timeline_text_37"),
        },
        {
          text: t("timeline_text_38"),
        },
      ],
    },
    {
      date: "2007",
      history: [
        {
          text: t("timeline_text_39"),
        },
      ],
    },
    {
      date: "2006",
      history: [
        {
          text: t("timeline_text_40"),
        },
        {
          text: t("timeline_text_41"),
        },
      ],
    },
  ];
  return data;
};

export const HistoryTab2List = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      text: t("timeline_tab2_text_1"),
      image: "/images/history/image1.png",
    },
    {
      text: t("timeline_tab2_text_2"),
      image: "/images/history/image2.png",
    },
    {
      text: t("timeline_tab2_text_3"),
      image: "/images/history/image3.png",
    },
    {
      text: t("timeline_tab2_text_4"),
      image: "/images/history/image4.png",
    },
    {
      text: t("timeline_tab2_text_5"),
      image: "/images/history/image5.png",
    },
    {
      text: t("timeline_tab2_text_6"),
      image: "/images/history/image6.png",
    },
    {
      text: t("timeline_tab2_text_7"),
      image: "/images/history/image7.png",
    },
    {
      text: t("timeline_tab2_text_8"),
      image: "/images/history/image8.png",
    },
    {
      text: t("timeline_tab2_text_9"),
      image: "/images/history/image9.png",
    },
    {
      text: t("timeline_tab2_text_10"),
      image: "/images/history/image10.png",
    },
    {
      text: t("timeline_tab2_text_11"),
      image: "/images/history/image11.png",
    },
    {
      text: t("timeline_tab2_text_12"),
      image: "/images/history/image12.png",
    },
    {
      text: t("timeline_tab2_text_13"),
      image: "/images/history/image13.png",
    },
    {
      text: t("timeline_tab2_text_14"),
      image: "/images/history/image14.png",
    },
    {
      text: t("timeline_tab2_text_15"),
      image: "/images/history/image15.png",
    },
    {
      text: t("timeline_tab2_text_16"),
      image: "/images/history/image16.png",
    },
    {
      text: t("timeline_tab2_text_17"),
      image: "/images/history/image17.png",
    },
    {
      text: t("timeline_tab2_text_18"),
      image: "/images/history/image18.png",
    },
    {
      text: t("timeline_tab2_text_19"),
      image: "/images/history/image19.png",
    },
    {
      text: t("timeline_tab2_text_20"),
      image: "/images/history/image20.png",
    },
    {
      text: t("timeline_tab2_text_21"),
      image: "/images/history/image21.png",
    },
    {
      text: t("timeline_tab2_text_22"),
      image: "/images/history/image22.png",
    },
    {
      text: t("timeline_tab2_text_23"),
      image: "/images/history/image23.png",
    },
    {
      text: t("timeline_tab2_text_24"),
      image: "/images/history/image24.png",
    },
    {
      text: t("timeline_tab2_text_25"),
      image: "/images/history/image25.png",
    },
    {
      text: t("timeline_tab2_text_26"),
      image: "/images/history/image26.png",
    },
    {
      text: t("timeline_tab2_text_27"),
      image: "/images/history/image27.png",
    },
    {
      text: t("timeline_tab2_text_28"),
      image: "/images/history/image28.png",
    },
    {
      text: t("timeline_tab2_text_29"),
      image: "/images/history/image29.png",
    },
    {
      text: t("timeline_tab2_text_30"),
      image: "/images/history/image30.png",
    },
    {
      text: t("timeline_tab2_text_31"),
      image: "/images/history/image31.png",
    },
    {
      text: t("timeline_tab2_text_32"),
      image: "/images/history/image32.png",
    },
  ];
  return data;
};
