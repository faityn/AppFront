import Link from "next/link";
import Image from "next/image";

type props = {
    color?: string;
};
const HeaderMobileLogo = ({ color }: props) => {
    return (
        <div className="flex flex-shrink-0 fon items-center max-sm:text-lg text-2xl text-primary mr-4 max-md:ml-3">
            <Link href="/">
                {color === "white" ? (
                    <Image
                        src="/svg/logo_head_mini_white.svg"
                        alt="basket"
                        className="max-sm:w-16 h-auto w-[89px] max-w-sm object-cover object-center "
                        width="130"
                        height="50"
                        unoptimized={true}
                        priority={true}
                    />
                ) : (
                    <Image
                        src="/svg/logo_head_mini_black.svg"
                        alt="basket"
                        className="max-sm:w-16 h-auto w-[89px] max-w-sm object-cover object-center "
                        width="130"
                        height="50"
                        unoptimized={true}
                        priority={true}
                    />
                )}
            </Link>
        </div>
    );
};

export default HeaderMobileLogo;
