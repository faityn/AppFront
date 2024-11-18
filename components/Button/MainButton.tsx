import Link from "next/link";
import React from "react";
import Image from "next/image";

interface AccordionProps {
  text: string;
  buttonLink: string;
}
const MainButton: React.FC<AccordionProps> = ({ text, buttonLink }) => {
  return (
    <Link
      href={buttonLink}
      className="mt-5 bg-gradient-to-r from-[#276CF3] to-[#3042E4] rounded-lg w-[210px] max-lg:w-[200px] h-[56px] max-lg:h-[40px] text-[16px] max-lg:text-sm text-white font-semibold flex items-center gap-2 justify-center"
    >
      {text}
      <Image
        src={`/svg/arrow-right-sm.svg`}
        alt={``}
        className=" h-6 max-sm:h-6 w-6 "
        width="24"
        height="24"
        unoptimized={true}
        priority={true}
      />
    </Link>
  );
};

export default MainButton;
