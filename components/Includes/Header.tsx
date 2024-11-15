import { useRecoilValue } from "recoil";
import { menuBGAtom } from "../atom";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderMobileLogo from "./HeaderMobileLogo";
import MobileMenu from "./MobileMenu";

type props = {
    type?: string;
    color?: string;
};
const Header = ({ type }: props) => {
    const menuBG = useRecoilValue(menuBGAtom);

    return (
        <div className=" absolute z-30 w-full flex items-center fontPretendard h-[82px] notranslate border-b border-white/20">
            <nav
                className={` bg-transparent w-full ${
                    menuBG ? "dropdown bg-gradient-to-r " : ""
                } from-[#276CF3] to-[#3042E4] `}
            >
                <div className="mx-auto max-w-[1224px] px-4 h-[82px] sm:px-6 lg:px-8 ">
                    <div className="flex gap-14 h-full items-center max-md:justify-between">
                        <div className="flex items-center ">
                            <div className={`flex-shrink-0 `}>
                                <div className={`max-md:hidden`}>
                                    <HeaderLogo type={type} color="white" />
                                </div>
                                <div className={`md:hidden`}>
                                    <HeaderMobileLogo color="white" />
                                </div>
                            </div>
                            <div className="hidden md:block"></div>
                        </div>
                        <HeaderMenu color="white" />
                    </div>
                </div>
                <div className="dropdown-content z-10 hidden absolute w-full bg-gradient-to-r from-[#276CF3] to-[#3042E4] h-[82px] border-t border-white/20"></div>
                <MobileMenu />
            </nav>
        </div>
    );
};

export default Header;
