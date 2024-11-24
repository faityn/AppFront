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
          link: "/business",
        },
        {
          name: t("Semiconductor"),
          link: "/business/semiconductor",
        },
        {
          name: t("Secondary Battery"),
          link: "/business/secondary_battery",
        },
        {
          name: t("Part-Materials"),
          link: "/business/part_materials",
        },
      ],
    },
    {
      name: t("APP Products"),
      link: "#",
      sub: [
        {
          name: t("ARP Plasma"),
          link: "/products",
        },
        {
          name: t("N2 Plasma"),
          link: "/products/n2_plasma",
        },
        {
          name: t("Air Plasma"),
          link: "/products/air_plasma",
        },
        {
          name: t("Power Plasma"),
          link: "/products/power_plasma",
        },
      ],
    },
    {
      name: t("APP Technology"),
      link: "#",
      sub: [
        {
          name: t("Surface Treatment"),
          link: "/technology",
        },

        {
          name: t("Reduction"),
          link: "/technology/reduction",
        },
        {
          name: t("Etching"),
          link: "/technology/etching",
        },
        {
          name: t("Deposition"),
          link: "/technology/deposition",
        },
      ],
    },
    {
      name: t("Recruit"),
      link: "#",
      sub: [
        {
          name: t("Recruit"),
          link: "/recruit",
        },
      ],
    },
    {
      name: t("Support"),
      link: "#",
      sub: [
        {
          name: t("News"),
          link: "/board",
        },
        {
          name: t("Branch Office"),
          link: "/board/branch",
        },
        {
          name: t("Contact Us"),
          link: "/board/contact",
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

export const AboutListItem = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      title: t("about_list_1_title"),
      text: t("about_list_1_text"),
    },
    {
      title: t("about_list_2_title"),
      text: t("about_list_2_text"),
    },
    {
      title: t("about_list_3_title"),
      text: t("about_list_3_text"),
    },
    {
      title: t("about_list_4_title"),
      text: t("about_list_4_text"),
    },
    {
      title: t("about_list_5_title"),
      text: t("about_list_5_text"),
    },
    {
      title: t("about_list_6_title"),
      text: t("about_list_6_text"),
    },
  ];
  return data;
};

export const BusinessListItem = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      title: t("business_list_title1"),
      image: "/svg/business/icon1.svg",
    },
    {
      title: t("business_list_title2"),
      image: "/svg/business/icon2.svg",
    },
    {
      title: t("business_list_title3"),
      image: "/svg/business/icon3.svg",
    },
    {
      title: t("business_list_title4"),
      image: "/svg/business/icon4.svg",
    },
    {
      title: t("business_list_title5"),
      image: "/svg/business/icon5.svg",
    },
    {
      title: t("business_list_title6"),
      image: "/svg/business/icon6.svg",
    },
    {
      title: t("business_list_title7"),
      image: "/svg/business/icon7.svg",
    },
    {
      title: t("business_list_title8"),
      image: "/svg/business/icon8.svg",
    },
    {
      title: t("business_list_title9"),
      image: "/svg/business/icon9.svg",
    },
  ];
  return data;
};

export const BusinessPage2List1 = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      title: t("business_page_2_list_1_title_1"),
      text: t("business_page_2_list_1_text_1"),
      image: "/images/business/b1.png",
    },
    {
      title: t("business_page_2_list_1_title_2"),
      text: t("business_page_2_list_1_text_2"),
      image: "/images/business/b2.png",
    },
    {
      title: t("business_page_2_list_1_title_3"),
      text: t("business_page_2_list_1_text_3"),
      image: "/images/business/b3.png",
    },
  ];
  return data;
};

export const BusinessPage2List2 = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      title: t("business_page_2_list_2_title_1"),
      text: t("business_page_2_list_2_text_1"),
      image: "/images/business/b4.png",
    },
    {
      title: t("business_page_2_list_2_title_2"),
      text: t("business_page_2_list_2_text_2"),
      image: "/images/business/b5.png",
    },
    {
      title: t("business_page_2_list_2_title_3"),
      text: t("business_page_2_list_2_text_3"),
      image: "/images/business/b6.png",
    },
  ];
  return data;
};

export const BusinessPage4List1 = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      text: t("Business_page4_list_text_1"),
    },
    {
      text: t("Business_page4_list_text_2"),
    },
    {
      text: t("Business_page4_list_text_3"),
    },
    {
      text: t("Business_page4_list_text_4"),
    },
    {
      text: t("Business_page4_list_text_5"),
    },
    {
      text: t("Business_page4_list_text_6"),
    },
    {
      text: t("Business_page4_list_text_7"),
    },
    {
      text: t("Business_page4_list_text_8"),
    },
    {
      text: t("Business_page4_list_text_9"),
    },
    {
      text: t("Business_page4_list_text_10"),
    },
    {
      text: t("Business_page4_list_text_11"),
    },
    {
      text: t("Business_page4_list_text_12"),
    },
    {
      text: t("Business_page4_list_text_13"),
    },
    {
      text: t("Business_page4_list_text_14"),
    },
    {
      text: t("Business_page4_list_text_15"),
    },
    {
      text: t("Business_page4_list_text_16"),
    },
    {
      text: t("Business_page4_list_text_17"),
    },
    {
      text: t("Business_page4_list_text_18"),
    },
  ];
  return data;
};

export const BusinessPage4List2 = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      text: t("Business_page4_list_2_text_1"),
    },
    {
      text: t("Business_page4_list_2_text_2"),
    },
    {
      text: t("Business_page4_list_2_text_3"),
    },
    {
      text: t("Business_page4_list_2_text_4"),
    },
    {
      text: t("Business_page4_list_2_text_5"),
    },
    {
      text: t("Business_page4_list_2_text_6"),
    },
    {
      text: t("Business_page4_list_2_text_7"),
    },
  ];
  return data;
};

export const BusinessPage4List3 = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      text: t("Business_page4_list_3_text_1"),
    },
    {
      text: t("Business_page4_list_3_text_2"),
    },
    {
      text: t("Business_page4_list_3_text_3"),
    },
  ];
  return data;
};

export const TechnologyPage1List1 = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      text: t("Technology_Page_1_List_1_Text_1"),
    },
    {
      text: t("Technology_Page_1_List_1_Text_2"),
    },
    {
      text: t("Technology_Page_1_List_1_Text_3"),
    },
    {
      text: t("Technology_Page_1_List_1_Text_4"),
    },
    {
      text: t("Technology_Page_1_List_1_Text_5"),
    },
    {
      text: t("Technology_Page_1_List_1_Text_6"),
    },
    {
      text: t("Technology_Page_1_List_1_Text_7"),
    },
    {
      text: t("Technology_Page_1_List_1_Text_8"),
    },
  ];
  return data;
};

export const TechnologyPage1List2 = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      text: t("Technology_Page_1_List_2_Text_1"),
    },
    {
      text: t("Technology_Page_1_List_2_Text_2"),
    },
    {
      text: t("Technology_Page_1_List_2_Text_3"),
    },
    {
      text: t("Technology_Page_1_List_2_Text_4"),
    },
  ];
  return data;
};

export const TechnologyPage1List3 = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      text: t("Technology_Page_1_List_3_Text_1"),
    },
    {
      text: t("Technology_Page_1_List_3_Text_2"),
    },
    {
      text: t("Technology_Page_1_List_3_Text_3"),
    },
    {
      text: t("Technology_Page_1_List_3_Text_4"),
    },
    {
      text: t("Technology_Page_1_List_3_Text_5"),
    },
    {
      text: t("Technology_Page_1_List_3_Text_6"),
    },
  ];
  return data;
};

export const TechnologyPage1List4 = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      text: t("Technology_Page_1_List_3_Text_1"),
      image: "/images/tech/image1.png",
    },
    {
      text: t("Technology_Page_1_List_3_Text_2"),
      image: "/images/tech/image2.png",
    },
    {
      text: t("Technology_Page_1_List_3_Text_3"),
      image: "/images/tech/image3.png",
    },
    {
      text: t("Technology_Page_1_List_3_Text_4"),
      image: "/images/tech/image4.png",
    },
    {
      text: t("Technology_Page_1_List_3_Text_5"),
      image: "/images/tech/image5.png",
    },
  ];
  return data;
};

export const RecruitPage1List4 = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      title: t("Recruit_Page_List_1_Title_1"),
      text: t("Recruit_Page_List_1_Text_1"),
      image: "/svg/rec_icon1.svg",
    },
    {
      title: t("Recruit_Page_List_1_Title_2"),
      text: t("Recruit_Page_List_1_Text_2"),
      image: "/svg/rec_icon2.svg",
    },
    {
      title: t("Recruit_Page_List_1_Title_3"),
      text: t("Recruit_Page_List_1_Text_3"),
      image: "/svg/rec_icon3.svg",
    },
    {
      title: t("Recruit_Page_List_1_Title_4"),
      text: t("Recruit_Page_List_1_Text_4"),
      image: "/svg/rec_icon4.svg",
    },
  ];
  return data;
};


export const BranchPageListItem = () => {
  const t = useTranslations("MainPage");
  const data = [
    {
      number: "01",
      title: t("Branch_Page_List_Item_title"),
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
