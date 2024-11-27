import { useRecoilState, useSetRecoilState } from "recoil";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import GoogleTranslate from "./GoogleTranslate";
import { dropLangAtom, menuBGAtom, mobileMenuAtom } from "../atom";

import { Menu } from "@/helper/utility";

type props = {
  color?: string;
  type?: string;
};
const HeaderMenu = ({ color, type }: props) => {
  const [langDrop, setLangDrop] = useRecoilState(dropLangAtom);
  const [mobileMenu, setMobileMenu] = useRecoilState(mobileMenuAtom);
  const setMenuBG = useSetRecoilState(menuBGAtom);
  const handleLang = () => {
    setMenuBG(true);
    if (langDrop) {
      setLangDrop(false);
    } else {
      setLangDrop(true);
    }
  };

  const handleMobileLang = () => {
    if (langDrop) {
      setLangDrop(false);
    } else {
      setLangDrop(true);
    }
  };
  const handleMobileMenu = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    } else {
      setMobileMenu(true);
    }
  };
  const hoverMenu = () => {
    setMenuBG(true);
  };

  const outMenu = () => {
    setMenuBG(false);
    setLangDrop(false);
  };

  const menuList = Menu();

  return (
    <>
      <div className="hidden md:block w-full h-[82px] relative">
        <div className=" flex items-center justify-between w-full h-full text-md">
          <div className="hidden md:block  h-full">
            <div
              className=" flex items-center h-full justify-center space-x-12 max-xl:space-x-6 "
              onMouseOver={() => hoverMenu()}
              onMouseLeave={() => outMenu()}
            >
              {menuList?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`dropdown inline-block   h-full font-[400] ${
                      color === "white" ? "text-white" : "text-black"
                    } border-b border-transparent hover:border-b hover:border-white `}
                  >
                    <div className=" flex h-full items-center ">
                      {item?.name}
                    </div>
                    <div className="dropdown-content z-20 hidden absolute left-0 w-full h-full ">
                      <ul className=" flex gap-10 rounded-3xl items-center h-full">
                        {item?.sub?.map((sub, i) => {
                          return (
                            <li key={i} className="">
                              <Link
                                className="  text-greyText border-b border-transparent hover:border-white py-2  block whitespace-no-wrap"
                                href={sub?.link}
                              >
                                {sub?.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className=" ml-12 max-xl:ml-8 h-full hidden">
            <div className="flex h-full ">
              <button
                type="button"
                className="relative  flex max-w-xs items-center rounded-full  text-sm "
                id="lang-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => handleLang()}

                //onMouseLeave={() => setMenuBG(false)}
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                {color === "white" ? (
                  <img
                    className="h-7 w-7 rounded-full"
                    src="/svg/lang.svg"
                    alt=""
                  />
                ) : (
                  <img
                    className="h-7 w-7 rounded-full"
                    src="/svg/lang_black.svg"
                    alt=""
                  />
                )}
              </button>
            </div>

            <div
              className={`${
                langDrop ? "" : "hidden"
              }  z-20  absolute right-0 w-full h-full `}
              onMouseLeave={() => outMenu()}
            >
              <GoogleTranslate />
            </div>
          </div>
        </div>
      </div>
      <div className="-mr-2 flex gap-7 items-center md:hidden  h-[82px]">
        <div className=" h-full hidden">
          <div className="flex items-center h-full">
            <button
              type="button"
              className="relative flex max-w-xs items-center rounded-full  text-sm "
              id="lang-button"
              aria-expanded="false"
              aria-haspopup="true"
              onClick={() => handleMobileLang()}
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              {color === "white" ? (
                <img
                  className="h-7 w-7 rounded-full"
                  src="/svg/lang.svg"
                  alt=""
                />
              ) : (
                <img
                  className="h-7 w-7 rounded-full"
                  src="/svg/lang_black.svg"
                  alt=""
                />
              )}
            </button>
          </div>
          <div>
            <div
              className={`${
                langDrop ? "" : "hidden"
              } absolute right-0 z-10  border w-36 px-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="lang-button"
            >
              <GoogleTranslate />
            </div>
          </div>
        </div>
        <button
          type="button"
          className={`relative inline-flex items-center justify-center rounded-md ${
            color === "white" ? "text-white" : "text-black"
          }  hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => handleMobileMenu()}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          {type === "mobile" ? (
            <IoCloseSharp className="text-[32px]" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>
    </>
  );
};

export default HeaderMenu;
