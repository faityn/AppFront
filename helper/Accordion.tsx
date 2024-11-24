interface AccordionProps {
    title: string;
    content: string;
}
import { useState } from "react";
import { HiOutlinePlusSmall, HiOutlineMinusSmall } from "react-icons/hi2";
const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [activeTab, setActiveTab] = useState(false);
    const clickItem = () => {
        if (activeTab) {
            setActiveTab(false);
        } else {
            setActiveTab(true);
        }
    };
    return (
        <div
            className="grid bg-[#EBEFF8] w-full px-5 rounded-xl mt-1"
            onClick={() => clickItem()}
        >
            <div className="py-5">
                <details className="group relative">
                    <summary className="flex gap-2 items-center font-medium cursor-pointer list-none">
                        <span
                            className={`transition group-open:rotate-180 text-primary group-open:hidden ${
                                activeTab ? "hidden" : ""
                            } `}
                        >
                            <HiOutlinePlusSmall className=" h-5 w-5 text-2xl  " />
                        </span>
                        <span
                            className={`transition group-open:rotate-180 text-primary ${
                                activeTab ? "" : "hidden"
                            }`}
                        >
                            <HiOutlineMinusSmall className=" h-5 w-5 text-2xl group-open:text-black " />
                        </span>
                        <span className="text-[#353644]">
                            {" "}
                            {title} {activeTab}
                        </span>
                    </summary>
                    <div className="text-[#767676] group-open:animate-fadeIn ml-12 mt-5">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                        ></div>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default Accordion;
