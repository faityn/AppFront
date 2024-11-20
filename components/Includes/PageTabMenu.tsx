import React, { useState } from "react";

import { SubMenuType } from "../types";
import Link from "next/link";
import { useRouter } from "next/router";

interface AccordionProps {
  sub?: SubMenuType[];
}
const PageTabMenu = ({ sub }: AccordionProps) => {
  const router = useRouter();
  const { pathname } = router;

  const [activeMenu, setActiveMenu] = useState("");
  const tabHover = (subId: string) => {
    setActiveMenu(subId);
  };
  return (
    <div className=" relative mt-[-30px]">
      <div
        className="max-w-[983px] h-[60px] mx-auto flex gap-[50px] max-sm:gap-[20px] justify-center items-center bg-gradient-to-r from-[#276CF3] to-[#3042E4] overflow-x-auto"
        onMouseLeave={() => setActiveMenu("")}
      >
        {sub?.map((item, index) => {
          return (
            <div key={index}>
              <Link
                href={String(item?.link)}
                className="flex gap-2 items-center "
                onMouseOver={() => tabHover(item?.subId as string)}
              >
                <div
                  className={`${
                    activeMenu === item?.subId
                      ? " "
                      : pathname === item?.link
                      ? ""
                      : "hidden "
                  }  h-2 w-2 bg-white rounded-full`}
                ></div>
                <span className="max-md:text-sm max-sm:text-[12px]">
                  {item?.title}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageTabMenu;
