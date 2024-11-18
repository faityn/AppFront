import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import FooterLang from "./FooterLang";

const Footer = () => {
  const t = useTranslations("MainPage");
  return (
    <nav className={`bg-[#0C1518] pt-[50px] pb-[59px] w-full max-xl:px-4`}>
      <div className="mx-auto max-w-[1436px] grid grid-cols-12 max-md:gap-5">
        <div className="col-span-5 max-xl:col-span-4 max-md:col-span-12">
          <div>
            <Link href={"/"}>
              <Image
                src={`/svg/logo_head_mini_white.svg`}
                alt={``}
                className="w-[157px] h-[82px]  "
                width="157"
                height="82"
                unoptimized={true}
                priority={true}
              />
            </Link>
          </div>
        </div>
        <div className="col-span-4 max-md:col-span-6 max-sm:col-span-12">
          <div className="text-xl text-white font-semibold mb-4">
            {t("Footer_title_1")}
          </div>
          <div className="">
            <div className="text-sm text-[#8F9FA3]">{t("Footer_email")}</div>
            <div className="text-sm text-[#8F9FA3]">{t("Footer_phone1")}</div>
            <div className="text-sm text-[#8F9FA3]">{t("Footer_phone2")}</div>
            <div className="text-sm text-[#8F9FA3]">{t("Footer_address")}</div>
          </div>

          <div className="text-xl text-white font-semibold mt-10 mb-4">
            {t("Footer_title_2")}
          </div>
          <div className="">
            <div className="text-sm text-[#8F9FA3]">{t("Footer_phone3")}</div>
            <div className="text-sm text-[#8F9FA3]">{t("Footer_address2")}</div>
          </div>
        </div>
        <div className="col-span-3  max-xl:col-span-4 max-md:col-span-6 max-sm:col-span-12">
          <div className="flex flex-col gap-5 justify-between h-full">
            <div className="flex justify-end max-sm:justify-start">
              <div className=" min-w-[160px]">
                <div className="text-sm text-white font-semibold mb-4">
                  {t("Footer_title_3")}
                </div>
                <div className="">
                  <FooterLang />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full ">
              <div className="flex gap-[10px] justify-end max-sm:justify-start">
                <div className="">
                  <Image
                    src={`/svg/instagram.svg`}
                    alt={``}
                    className="w-[40px] h-[40px]  "
                    width="40"
                    height="40"
                    unoptimized={true}
                    priority={true}
                  />
                </div>
                <div className="">
                  <Image
                    src={`/svg/youtube.svg`}
                    alt={``}
                    className="w-[40px] h-[40px]  "
                    width="40"
                    height="40"
                    unoptimized={true}
                    priority={true}
                  />
                </div>
                <div className="">
                  <Image
                    src={`/svg/blogB.svg`}
                    alt={``}
                    className="w-[40px] h-[40px]  "
                    width="40"
                    height="40"
                    unoptimized={true}
                    priority={true}
                  />
                </div>
                <div className="">
                  <Image
                    src={`/svg/facebook.svg`}
                    alt={``}
                    className="w-[40px] h-[40px]  "
                    width="40"
                    height="40"
                    unoptimized={true}
                    priority={true}
                  />
                </div>
              </div>
              <div className="text-sm text-[#8F9FA3] text-right max-sm:text-left">
                © 2024 — Copyright All Rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
