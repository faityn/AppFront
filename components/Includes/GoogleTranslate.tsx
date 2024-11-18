"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { dropLangAtom } from "../atom";
const GoogleTranslate = () => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [, setSelected] = useState<string | null>(null);
  const setLangDrop = useSetRecoilState(dropLangAtom);

  useEffect(() => {
    // const addScript = document.createElement("script");
    // addScript.setAttribute(
    //   "src",
    //   "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    // );
    // document.body.appendChild(addScript);
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    // window.googleTranslateElementInit = googleTranslateElementInit;

    if (Cookies.get("active-lang")) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setSelected(Cookies.get("active-lang"));
    } else {
      setSelected("en");
    }
  }, []);

  // const googleTranslateElementInit = () => {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "auto",
  //       autoDisplay: false,
  //       includedLanguages: "en,ko",
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       // @ts-ignore
  //       layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //     },
  //     "google_translate_element"
  //   );
  // };

  const changeLanguage = (lang: string) => {
    router.replace({ pathname, query }, asPath, { locale: lang });
    Cookies.set("active-lang", lang);

    setLangDrop(false);
  };

  return (
    <>
      {locale === "kr" ? (
        <div className=" flex max-md:flex-col max-md:gap-1 max-md:justify-center gap-10 rounded-3xl items-center h-full  justify-end">
          <div
            className="  text-[#cccccc] border-b border-transparent hover:border-[#cccccc] py-2 cursor-pointer block whitespace-no-wrap"
            onClick={() => changeLanguage("en")}
          >
            English
          </div>

          <div className="  text-white max-md:text-black  border-b border-transparent  py-2  block whitespace-no-wrap">
            한국어
          </div>
        </div>
      ) : (
        <div className=" flex max-md:flex-col max-md:gap-1 max-md:justify-center gap-10 rounded-3xl items-center h-full  justify-end">
          <div className="  text-white max-md:text-black border-b border-transparent  py-2  block whitespace-no-wrap">
            English
          </div>

          <div
            className="  text-[#cccccc] border-b border-transparent hover:border-[#cccccc] py-2 cursor-pointer block whitespace-no-wrap"
            onClick={() => changeLanguage("kr")}
          >
            한국어
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleTranslate;
