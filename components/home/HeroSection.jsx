import Link from "next/link";
import { buttonArrow } from "../../assets";
import { AnimatedText } from "../../shared";
import Image from "next/image";
// import { useIntl } from "react-intl";

const HeroSection = () => {
    // const intl = useIntl();
    return (
        <div className="z-10">
            <div className="heroSection bg-[url('../public/heroNew.png')] px-5">
                {/* main content title */}
                <div className="self-start md:self-end w-full md:w-[55%]">
                    <AnimatedText
                        className={
                            "max-w-[600px] text-[35px] md:text-[48px] leading-[45px] md:leading-[61px] font-headingFont capitalize font-[700] text-[var(--blackColor)] dark:text-[var(--whiteColor)]"
                        }
                        text={"Elmo Tech: Redefining Digital Horizons "}
                    />
                    <Link href={"contact"} className="mainBtn inline-block">
                        {/* {intl.formatMessage({ id: "contactUsBtn" })} */}
                        Contact Us
                    </Link>
                </div>
                {/* to bottom btn */}
                <div className="flex items-center gap-10 mt-5 md:mt-0 md:absolute md:bottom-5 md:right-5">
                    {/* <p c>
                        Providing The Most Responsive And Functional IT
                    </p> */}
                    <AnimatedText
                        className="text-baseFont text-[24px] text-[var(--textColor)] dark:text-[var(--whiteColor)] capitalize"
                        text={
                            "Innovate, Integrate, Inspire - Your Journey to Digital Excellence "
                        }
                    />
                    <div className="flex cursor-pointer items-center absolute bottom-5 right-5 md:relative md:bottom-0 md:right-0 flex-shrink-0 justify-center w-[64px] h-[64px] rounded-[50%] bg-[var(--secondaryColor)] dark:bg-[var(--secondaryDarkColor)]">
                        <Image
                            fill={false}
                            src={buttonArrow}
                            alt="to bottom button"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
