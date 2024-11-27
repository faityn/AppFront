import { useRecoilValue } from "recoil";

import HeaderMenu from "./HeaderMenu";
import { mobileMenuAtom } from "../atom";
import HeaderMobileLogo from "./HeaderMobileLogo";
import { Menu } from "@/helper/utility";

const MobileMenu = () => {
  const mobileMenu = useRecoilValue(mobileMenuAtom);
  const menuList = Menu();
  return (
    <div className={`${mobileMenu ? "" : "hidden"}`} id="mobile-menu">
      <div className="md:hidden  pb-3   absolute top-0 w-full">
        <nav className=" bg-[#1C1C1C] w-full h-[82px] ">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 h-[82px] ">
            <div className="flex h-[82px] items-center justify-between ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <HeaderMobileLogo color="white" />
                </div>
                <div className="hidden md:block"></div>
              </div>
              <HeaderMenu type="mobile" color="white" />
            </div>
          </div>
        </nav>
        <div className="bg-white py-7 px-7">
          <div className="grid grid-cols-2 gap-5">
            {menuList?.map((item, index) => {
              return (
                <div key={index} className="col-span-1">
                  <div className="text-primary font-semibold text-md mb-3">
                    {item?.name}
                  </div>
                  {item?.sub?.map((sub, i) => {
                    return (
                      <div
                        key={i}
                        className="text-grayText font-normal text-sm mb-3"
                      >
                        {sub?.name}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
