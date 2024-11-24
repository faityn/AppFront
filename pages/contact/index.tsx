import PageBanner from "@/components/Banner/PageBanner";
import PageTabMenu from "@/components/Includes/PageTabMenu";
import Layout from "@/components/Layout";

import { sendContact } from "@/hooks/useData";

import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
    name: string;
    contact: string;
    email: string;
    company_name: string;
    department: string;
    subject: string;
    content: string;
}

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
  
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

  

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        //setLoading(true);

        const postData = {
            name: data.name,
            contact: data.contact,
            email: data.email,
            company_name: data.company_name,
            department: data.department,
            subject: data.subject,
            content: data.content,
        };
        const res = await sendContact(postData);



        if (res?.status) {
            alert('Send message succefull')
            //setIsOpen(true);
            //setLoading(false);
        } else {
            // setErrorMessage(String(res?.result));
            // setCreateError(true);
            // setLoading(false);
        }
    };

    return (
        <Layout type="main">
            <PageBanner
                mainText={PageBannerText}
                banner="/images/board_banner.png"
            />
            <PageTabMenu sub={SubMenu} />
            <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep max-md:px-4">
                <div className="text-center text-2xl font-semibold text-primary ">
                    {t("Contact Us")}
                </div>
                <div className="max-w-[808px] mx-auto mt-16">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 flex gap-6">
                            <div className="w-full">
                                <input
                                    type="text"
                                    {...register("name", {
                                        required: true,
                                    })}
                                    placeholder="성함"
                                    className="w-full rounded text-md  bg-[#EBEFF8] px-4 py-3 text-[#353644] outline-none transition focus:border-[#759BF1] active:border-[#759BF1] disabled:cursor-default disabled:bg-whiter "
                                />
                                {errors.name && (
                                    <span className="text-xs font-medium text-red-500 ">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    {...register("contact", {
                                        required: true,
                                    })}
                                    placeholder="연락처"
                                    className="w-full rounded text-md bg-[#EBEFF8] px-4 py-3 text-[#353644] outline-none transition focus:border-[#759BF1] active:border-[#759BF1] disabled:cursor-default disabled:bg-whiter "
                                />
                                {errors.contact && (
                                    <span className="text-xs font-medium text-red-500">
                                        This field is required
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="mb-4 flex gap-6">
                            <div className="w-full">
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: true,
                                    })}
                                    placeholder="이메일"
                                    className="w-full rounded text-md  bg-[#EBEFF8] px-4 py-3 text-[#353644] outline-none transition focus:border-[#759BF1] active:border-[#759BF1] disabled:cursor-default disabled:bg-whiter "
                                />
                                {errors.email && (
                                    <span className="text-xs font-medium text-red-500 ">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    {...register("company_name", {
                                        required: true,
                                    })}
                                    placeholder="회사명"
                                    className="w-full rounded text-md bg-[#EBEFF8] px-4 py-3 text-[#353644] outline-none transition focus:border-[#759BF1] active:border-[#759BF1] disabled:cursor-default disabled:bg-whiter "
                                />
                                {errors.company_name && (
                                    <span className="text-xs font-medium text-red-500">
                                        This field is required
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="mb-4 flex gap-6">
                            <div className="w-full">
                                <input
                                    type="text"
                                    {...register("department", {
                                        required: true,
                                    })}
                                    placeholder="소속 부서/직위"
                                    className="w-full rounded text-md  bg-[#EBEFF8] px-4 py-3 text-[#353644] outline-none transition focus:border-[#759BF1] active:border-[#759BF1] disabled:cursor-default disabled:bg-whiter "
                                />
                                {errors.department && (
                                    <span className="text-xs font-medium text-red-500 ">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            <div className="w-full"></div>
                        </div>
                        <div className="mb-4 flex gap-6">
                            <div className="w-full">
                                <input
                                    type="text"
                                    {...register("subject", {
                                        required: true,
                                    })}
                                    placeholder="제목"
                                    className="w-full rounded text-md  bg-[#EBEFF8] px-4 py-3 text-[#353644] outline-none transition focus:border-[#759BF1] active:border-[#759BF1] disabled:cursor-default disabled:bg-whiter "
                                />
                                {errors.subject && (
                                    <span className="text-xs font-medium text-red-500 ">
                                        This field is required
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="mb-4 flex gap-6">
                            <div className="w-full">
                                <textarea
                                    {...register("content", {
                                        required: true,
                                    })}
                                    placeholder="문의내용"
                                    className="w-full rounded text-md h-[244px] bg-[#EBEFF8] px-4 py-3 text-[#353644] outline-none transition focus:border-[#759BF1] active:border-[#759BF1] disabled:cursor-default disabled:bg-whiter "
                                ></textarea>
                                {errors.subject && (
                                    <span className="text-xs font-medium text-red-500 ">
                                        This field is required
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 pt-5">
                            {" "}
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-md bg-primary w-[210px] px-5 py-3 text-center text-[16px] font-medium text-white hover:bg-opacity-90 "
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
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
