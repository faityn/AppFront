import React from "react";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
interface AccordionProps {
    title: string;
    image?: string;
    phone?: string;
    email?: string;
    email2?: string;
    address?: string;
    link?: string;
}
const BranchListOneItem: React.FC<AccordionProps> = ({
    title,
    image,
    phone,
    email,
    email2,
    address
}) => {
    return (
        <div className="bg-[#EBEFF8] rounded-[20px] py-8 px-4 h-full relative ">
            <div className="text-center text-[#3B77EA] font-semibold">
                {title}
            </div>

            <div className="min-w-[200px]  mx-auto h-full flex flex-col justify-between items-center gap-3 font-light mt-5 relative">
                <div className="h-auto w-full">
                    
                    <Image
                        src={`${image}`}
                        alt={``}
                        className=" w-full  min-h-[206px] h-[207px] max-sm:max-h-[207px] object-cover"
                        width="392"
                        height="200"
                        unoptimized={true}
                        priority={true}
                    />{" "}
                    <div className="flex flex-col h-auto gap-2  mt-5">
                        <div className="flex gap-2">
                            <div className="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M20.6633 18.7715C20.6633 18.7715 19.5047 19.9095 19.2207 20.2432C18.7582 20.7367 18.2132 20.9698 17.4988 20.9698C17.4301 20.9698 17.3568 20.9698 17.2881 20.9653C15.9279 20.8784 14.6639 20.3483 13.7159 19.8958C11.1238 18.6435 8.84771 16.8657 6.95629 14.6125C5.39461 12.7341 4.35044 10.9974 3.65891 9.13265C3.233 7.99464 3.07729 7.10799 3.14598 6.27162C3.19178 5.73689 3.39787 5.29357 3.77798 4.91423L5.33966 3.35574C5.56406 3.14551 5.80221 3.03125 6.03577 3.03125C6.32429 3.03125 6.55786 3.20492 6.70441 3.35117C6.70899 3.35574 6.71357 3.36031 6.71815 3.36489C6.99751 3.62539 7.26313 3.89504 7.54249 4.18298C7.68446 4.32923 7.83101 4.47548 7.97756 4.6263L9.22782 5.874C9.71327 6.35846 9.71327 6.80635 9.22782 7.29081C9.09501 7.42335 8.96678 7.55589 8.83397 7.68386C8.44927 8.0769 8.75147 7.77532 8.35304 8.13181C8.34388 8.14095 8.33472 8.14552 8.33014 8.15466C7.93629 8.54771 8.00956 8.93162 8.092 9.19213C8.09658 9.20584 8.10116 9.21955 8.10573 9.23326C8.43089 10.0194 8.88886 10.7598 9.58498 11.6418L9.58956 11.6464C10.8536 13.2003 12.1862 14.4115 13.6563 15.3392C13.8441 15.4581 14.0364 15.554 14.2196 15.6454C14.3845 15.7277 14.5402 15.8054 14.673 15.8877C14.6913 15.8968 14.7097 15.9105 14.728 15.9197C14.8837 15.9974 15.0302 16.0339 15.1814 16.0339C15.5615 16.0339 15.7996 15.7963 15.8775 15.7186L16.7752 14.8227C16.9309 14.6673 17.1782 14.48 17.4667 14.48C17.7506 14.48 17.9842 14.6582 18.1262 14.8136C18.1308 14.8182 18.1308 14.8182 18.1353 14.8227L20.6587 17.341C21.1305 17.8072 20.6633 18.7715 20.6633 18.7715Z"
                                        stroke="#3B77EA"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="text-[#555555] text-[18px]">
                                {phone}
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M4.6875 6.75L11.3596 11.5403C11.7449 11.8168 12.2551 11.8168 12.6404 11.5403L19.3125 6.75M5.25 19H18.75C19.9926 19 21 17.9553 21 16.6667V7.33333C21 6.04467 19.9926 5 18.75 5H5.25C4.00736 5 3 6.04467 3 7.33333V16.6667C3 17.9553 4.00736 19 5.25 19Z"
                                        stroke="#3B77EA"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="text-[#555555] text-[18px]">
                                {email}
                            </div>
                        </div>
                        {email2 ? (
                            <div className="flex gap-2">
                                <div className="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M4.6875 6.75L11.3596 11.5403C11.7449 11.8168 12.2551 11.8168 12.6404 11.5403L19.3125 6.75M5.25 19H18.75C19.9926 19 21 17.9553 21 16.6667V7.33333C21 6.04467 19.9926 5 18.75 5H5.25C4.00736 5 3 6.04467 3 7.33333V16.6667C3 17.9553 4.00736 19 5.25 19Z"
                                            stroke="#3B77EA"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="text-[#555555] text-[18px]">
                                    {email2}
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        <div className="flex  gap-2">
                            <div className="">
                                <Image
                                    src={`/svg/marker.svg`}
                                    alt={``}
                                    className=" w-6 h-6  "
                                    width="24"
                                    height="24"
                                    unoptimized={true}
                                    priority={true}
                                />
                            </div>
                            <div className="text-[#555555] text-[18px] w-full">
                                {address}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center text-center w-full h-16  mb-5">
                    <Link
                        href="#"
                        className="flex items-center justify-center gap-2 w-[124px] h-[44px] bg-[#3B77EA] rounded-[10px]"
                    >
                        지도 보기 <FaArrowRight />{" "}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BranchListOneItem;
