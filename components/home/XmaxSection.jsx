import OurTechnology from "./OurTechnology";

const XmaxSection = () => {
    return (
        <div className="md:my-16 w-full flex items-center justify-center z-10 py-[23px] md:px-[180px] bg-[var(--mainColor)] dark:bg-[var(--darkColor)]">
            <ul className="flex items-center font-headingFont justify-center gap-6 md:gap-20 list-disc">
                <li data-aos="fade-right" className="text-[14px] md:text-[32px]  text-[var(--whiteColor)] leading-[40px]">
                    Unlock
                </li>
                <li className="text-[14px] md:text-[32px]  text-[var(--whiteColor)] leading-[40px]">
                    the full potential
                </li>
                <li data-aos="fade-left" className="text-[14px] md:text-[32px]  text-[var(--whiteColor)] leading-[40px]">
                    of your business
                </li>
            </ul>
        </div>
    );
};

export default XmaxSection;
