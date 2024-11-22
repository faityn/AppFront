import PageBanner from "@/components/Banner/PageBanner";
import Layout from "@/components/Layout";
import { RecruitPage1List4 } from "@/helper/utility";
import { MdArrowRightAlt } from "react-icons/md";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const PageBannerText =
    "A professional research business\n of atmospheric plasma ";

  const itemList = RecruitPage1List4();

  return (
    <Layout type="main">
      <PageBanner
        mainText={PageBannerText}
        banner="/images/recruit_banner.png"
      />

      <div className="mx-auto max-w-[1224px] mt-[100px] mb-[150px] whitespace-pre-line break-keep">
        <div className="text-center text-2xl font-semibold text-primary ">
          채용지원
        </div>

        <div className="mt-10 max-md:px-4 ">
          <div className="text-2xl text-[#767676] font-light text-center">
            (주)에이피피는 첫째도 둘째도 셋째도{" "}
            <span className="text-black font-medium">사람이 최고인</span>{" "}
            기업입니다. 사람과 꿈과 기술은 따로 분리할 수 있는 게 아닙니다.{" "}
            <br />
            꿈 안에 사람이 있고, 기술 안에 꿈이 있고 사람이 있습니다. 사람을
            먼저 생각하면 꿈이 보이고, 기술이 보입니다.
            <br />
            <span className="text-black font-medium">
              (주)에이피피에서 당신의 꿈을 펼쳐보시기 바랍니다.
            </span>
            <br />
          </div>

          <div className="max-md:px-4 mt-5">
            <Image
              src={"/images/r1.png"}
              alt={``}
              className=" w-full max-h-[272px] max-md:max-h-[200px] z-0"
              width="272"
              height="200"
              unoptimized={true}
              priority={true}
            />

            <div className="relative w-full max-w-[975px] mx-auto z-50 bg-white pt-6 md:px-10  rounded-t-xl md:mt-[-54px]  ">
              <div className=" grid grid-cols-12 gap-5 bg-white">
                {itemList?.map((item, index) => {
                  return (
                    <div key={index} className="col-span-3 max-lg:col-span-6">
                      <div className="bg-[#EBEFF8] flex flex-col items-center  p-3 rounded-[20px] max-h-[230px] h-full">
                        <div>
                          <Image
                            src={item?.image}
                            alt={``}
                            className=" w-[60px] h-[60px] max-sm:w-[50px]  max-sm:h-[50px] "
                            width="60"
                            height="60"
                            unoptimized={true}
                            priority={true}
                          />
                        </div>
                        <div className="text-center mt-2 text-xl max-sm:text-md font-medium text-black">
                          {item?.title}
                        </div>
                        <div className="text-center mt-2 text-md max-sm:text-[12px] font-normal text-[#555555]">
                          {item?.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-20 max-md:hidden">
              <div className="text-primary text-2xl font-medium text-center">
                지원하기
              </div>
              <div className="mt-10 relative">
                <Image
                  src={"/images/r2.png"}
                  alt={``}
                  className=" w-full max-h-[272px] max-md:max-h-[200px] z-0"
                  width="272"
                  height="200"
                  unoptimized={true}
                  priority={true}
                />

                <div className="absolute top-0 h-full w-full">
                  <div className="flex gap-5 items-center justify-center h-full">
                    <div>
                      <Link
                        href="#"
                        className="flex items-center justify-center h-[56px] w-[210px] bg-gradient-to-r from-[#276CF3] to-[#3042E4] text-white rounded-md"
                      >
                        <div className="ml-4 text-[18px]">
                          잡코리아 바로가기
                        </div>
                        <MdArrowRightAlt className="text-2xl" />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="flex items-center justify-center h-[56px] w-[210px] bg-gradient-to-r from-[#276CF3] to-[#3042E4] text-white rounded-md"
                      >
                        <div className="ml-4 text-[18px]">사람인 바로가기</div>
                        <MdArrowRightAlt className="text-2xl" />
                      </Link>
                    </div>
                  </div>
                </div>
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
