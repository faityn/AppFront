interface AccordionProps {
    title: string;
    content: string;
}

const AccordionWhite: React.FC<AccordionProps> = ({ title, content }) => {
    return (
        <details className="group  pr-5  border-b border-[#D9D9D9]">
            <summary className="flex cursor-pointer list-none items-center gap-3 py-4 text-lg font-medium text-[#353644] group-open:text-primary-500">
                <div className="text-[#3B77EA]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="block h-5 w-5 group-open:hidden"
                    >
                        <path
                            
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden h-5 w-5 group-open:block"
                    >
                        <path d="M19.5 12h-15" />
                    </svg>
                </div>
                {title}
            </summary>
            <div className="pb-4 text-[#353644] px-10  pt-5">
                <div
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                ></div>
            </div>
        </details>
    );
};

export default AccordionWhite;
