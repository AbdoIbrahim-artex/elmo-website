import Image from "next/image";
import { Container } from "../../shared";
import { BsArrowRight } from "react-icons/bs";
import { servIcon1 ,servIcon2 ,servIcon3 } from "../../assets";

const WhatWeOffer = () => {
    return (
        <section className="flex flex-col gap-24 bg-[var(--secondaryDarkColor)] dark:bg-[var(--darkColor)] py-28">
            <div className="text-center px-5">
                <p className="textWithDark !leading-[29px] !text-[24px]">
                    what we offer?
                </p>
                <h2 className="titleWithDark !leading-[61px] !text-[40px]  md:!text-[48px]">
                    Efficiency through software and automation.
                </h2>
            </div>
            <Container className={"flex items-center justify-start flex-wrap gap-14 md:gap-10"}>
                <div className="cardOffer flex-1 group sm:w-full md:w-1/2 lg:w-1/3 min-h-[400px] relative rounded-[20px] bg-cover bg-center bg-[url('../public/service-01.jpg')]">
                    <div className="relative z-10 space-y-2 p-6">
                        <h3 className="font-headingFont transition-all ease-in-out duration-300 group-hover:text-[var(--darkColor)] text-[var(--whiteColor)] text-[46px]">
                            Web Design
                        </h3>
                        <p className="textWithDark opacity-0 translate-y-[50%] text-[var(--whiteColor)]  !text-[20px] transition-all ease-in-out duration-300 group-hover:opacity-80 group-hover:translate-y-0 !group-hover:text-[var(--darkColor)] ">
                            Accelerate Innovation With World-Class Tech Teams
                            We’ll Match You To An Entire Remote Team
                        </p>
                        <a
                            href="#"
                            className="textWithDark !mt-6 opacity-0 translate-y-[200%] text-[var(--whiteColor)] !text-[20px] flex items-center gap-5 transition-all ease-in-out duration-300 delay-100 group-hover:opacity-100 group-hover:translate-y-0 !group-hover:text-[var(--darkColor)]"
                        >
                            Learn More <BsArrowRight />
                        </a>
                    </div>
                    <div className="w-[75px] z-10 absolute -top-9 left-12 h-[75px] rounded-full flex items-center justify-center bg-[var(--mainColor)] dark:bg-[var(--darkColor)]">
                        <Image
                            className="w-[40px]"
                            src={servIcon1}
                            fill={false}
                            alt="elmo services images"
                        />
                    </div>
                </div>
                <div className="cardOffer flex-1 group sm:w-full md:w-1/2 lg:w-1/3 min-h-[400px] relative rounded-[20px] bg-cover bg-center bg-[url('../public/service-02.jpg')]">
                    <div className="relative z-10 space-y-2 p-6">
                        <h3 className="font-headingFont transition-all ease-in-out duration-300 group-hover:text-[var(--darkColor)] text-[var(--whiteColor)] text-[46px]">
                            Web Design
                        </h3>
                        <p className="textWithDark opacity-0 translate-y-[50%] text-[var(--whiteColor)]  !text-[20px] transition-all ease-in-out duration-300 group-hover:opacity-80 group-hover:translate-y-0 !group-hover:text-[var(--darkColor)] ">
                            Accelerate Innovation With World-Class Tech Teams
                            We’ll Match You To An Entire Remote Team
                        </p>
                        <a
                            href="#"
                            className="textWithDark !mt-6 opacity-0 translate-y-[200%] text-[var(--whiteColor)] !text-[20px] flex items-center gap-5 transition-all ease-in-out duration-300 delay-100 group-hover:opacity-100 group-hover:translate-y-0 !group-hover:text-[var(--darkColor)]"
                        >
                            Learn More <BsArrowRight />
                        </a>
                    </div>
                    <div className="w-[75px] z-10 absolute -top-9 left-12 h-[75px] rounded-full flex items-center justify-center bg-[var(--mainColor)] dark:bg-[var(--darkColor)]">
                        <Image
                            className="w-[40px]"
                            src={servIcon2}
                            fill={false}
                            alt="elmo services images"
                        />
                    </div>
                </div>
                <div className="cardOffer flex-1 group sm:w-full md:w-1/2 lg:w-1/3 min-h-[400px] relative rounded-[20px] bg-cover bg-center bg-[url('../public/service-03.jpg')]">
                    <div className="relative z-10 space-y-2 p-6">
                        <h3 className="font-headingFont transition-all ease-in-out duration-300 group-hover:text-[var(--darkColor)] text-[var(--whiteColor)] text-[46px]">
                            Web Design
                        </h3>
                        <p className="textWithDark opacity-0 translate-y-[50%] text-[var(--whiteColor)]  !text-[20px] transition-all ease-in-out duration-300 group-hover:opacity-80 group-hover:translate-y-0 !group-hover:text-[var(--darkColor)] ">
                            Accelerate Innovation With World-Class Tech Teams
                            We’ll Match You To An Entire Remote Team
                        </p>
                        <a
                            href="#"
                            className="textWithDark !mt-6 opacity-0 translate-y-[200%] text-[var(--whiteColor)] !text-[20px] flex items-center gap-5 transition-all ease-in-out duration-300 delay-100 group-hover:opacity-100 group-hover:translate-y-0 !group-hover:text-[var(--darkColor)]"
                        >
                            Learn More <BsArrowRight />
                        </a>
                    </div>
                    <div className="w-[75px] z-10 absolute -top-9 left-12 h-[75px] rounded-full flex items-center justify-center bg-[var(--mainColor)] dark:bg-[var(--darkColor)]">
                        <Image
                            className="w-[40px]"
                            src={servIcon3}
                            fill={false}
                            alt="elmo services images"
                        />
                    </div>
                </div>
                {/* <div className="flex items-start w-full md:w-1/2 p-[40px] rounded-[20px] bg-[var(--mainColor)] dark:bg-[var(--darkColor)] justify-between gap-5 flex-wrap lg:flex-nowrap">
                    <div className="md:w-1/2 min-h-[350px] md:h-[480px] flex flex-col justify-between">
                        <div className="space-y-8">
                            <h3 className="font-headingFont  text-[var(--whiteColor)] leading-[71px] text-[56px] ">
                                Web Design
                            </h3>
                            <p className="textWithDark md:w-[510px] !text-[var(--whiteColor)] !leading-[48px] !text-[32px]">
                                Accelerate Innovation With World-Class Tech
                                Teams We’ll Match You To An Entire Remote Team
                            </p>
                        </div>
                        <a
                            href="#"
                            className="textWithDark !text-[var(--whiteColor)] flex items-center gap-5"
                        >
                            Learn More <BsArrowRight />
                        </a>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            className="ml-auto md:w-[527px]"
                            src={servicePage2}
                            fill={false}
                            alt="elmo services images"
                        />
                    </div>
                </div> */}
            </Container>
        </section>
    );
};

export default WhatWeOffer;
