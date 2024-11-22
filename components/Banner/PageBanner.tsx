import React from "react";

import Image from "next/image";

interface AccordionProps {
  mainText: string;
  banner?: string;
}
const PageBanner: React.FC<AccordionProps> = ({ mainText, banner }) => {
  return (
    <div className="h-[400px] relative ">
      <Image
        src={banner ? `${banner}` : "/images/page_banner.png"}
        alt={``}
        className=" w-full h-[400px]  object-cover object-center "
        width="400"
        height="400"
        unoptimized={true}
        priority={true}
      />
      <div className="absolute w-full m-auto h-full top-0 text-[48px] max-sm:text-2xl font-medium   ">
        <div className="flex h-full max-w-[750px] mx-auto text-center items-center justify-center w-full ">
          {mainText}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
