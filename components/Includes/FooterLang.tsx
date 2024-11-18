"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { dropLangAtom } from "../atom";
const FooterLang = () => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [, setSelected] = useState<string | null>(null);
  const setLangDrop = useSetRecoilState(dropLangAtom);

  useEffect(() => {
    if (Cookies.get("active-lang")) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setSelected(Cookies.get("active-lang"));
    } else {
      setSelected("en");
    }
  }, []);

  const changeLanguage = (lang: string) => {
    router.replace({ pathname, query }, asPath, { locale: lang });
    Cookies.set("active-lang", lang);

    setLangDrop(false);
  };

  return (
    <>
      {locale === "kr" ? (
        <div className=" flex gap-5 text-sm">
          <div
            className="  text-[#cccccc] border-b border-transparent hover:border-[#cccccc] cursor-pointer block whitespace-no-wrap"
            onClick={() => changeLanguage("en")}
          >
            En
          </div>

          <div className="  text-white   border-b border-transparent   block whitespace-no-wrap">
            Ko
          </div>
        </div>
      ) : (
        <div className=" flex gap-5 text-sm">
          <div className="  text-white  border-b border-transparent    block whitespace-no-wrap">
            En
          </div>

          <div
            className="  text-[#cccccc] border-b border-transparent hover:border-[#cccccc]  cursor-pointer block whitespace-no-wrap"
            onClick={() => changeLanguage("kr")}
          >
            Ko
          </div>
        </div>
      )}
    </>
  );
};

export default FooterLang;
