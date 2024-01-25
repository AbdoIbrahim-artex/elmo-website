
import Image from "next/image";
import {
    about1Light,
    about2Light,
    about3Light,
    aboutSectionImg1,
    aboutSectionImg2,
} from "../../assets";
import Link from "next/link";

const AboutSection = () => {
    return (
        <div className="flex flex-col gap-16 w-[97%] m-auto px-5">
            <div className="flex items-start justify-between flex-wrap lg:flex-nowrap gap-5">
                {/* about info */}
                <div className="w-[100%] lg:flex-1 md:w-1/2 xl:w-1/2">
                    <p className="text-[var(--textColor)] dark:text-[var(--textDarkColor)] text-[24px]">
                        Who Are We?
                    </p>
                    <h2 className="titleWithDark !text-[40px] md:!text-[40px] lg:!text-[38px] sm:w-[100%] lg:w-[561px] !leading-[61px]">
                        Elmo Tech is your Partner in Digital Transformation
                    </h2>
                    <p data-aos="fade-right" className="text-[var(--textColor)] dark:text-[var(--textDarkColor)] mt-4 text-[20px]">
                        We’re first rate grant winning agency that forms sites
                        and web Journals for Brands. We are knowledgeable about
                        offering inventive innovative types of assistance to our
                        clients around the World.
                    </p>
                    <div className="mt-6 flex items-center justify-start gap-4 flex-wrap">
                        <div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-sine"
                            className="flex gap-4 items-start lg:flex-1 w-full md:w-1/2"
                        >
                            {/* icon */}
                            <div className="bg-[var(--mainColor)] dark:bg-[var(--darkColor)] flex-shrink-0 w-[60px] h-[60px] p-[10px] rounded flex items-center justify-center">
                                <Image
                                    fill={false}
                                    src={about2Light}
                                    alt="elmo solutions about icon"
                                />
                            </div>
                            <div>
                                {/* title */}
                                <h3 className="titleWithDark mb-2">
                                    Strategic Solutions
                                </h3>
                                {/* desc */}
                                <p className="textWithDark !text-[20px]">
                                   Smart plans designed to make your business better.
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex gap-4 items-start lg:flex-1 w-full md:w-1/2"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="300"
                        >
                            {/* icon */}
                            <div className="bg-[var(--mainColor)] dark:bg-[var(--darkColor)] flex-shrink-0 w-[60px] h-[60px] p-[10px] rounded flex items-center justify-center">
                                <Image
                                    fill={false}
                                    src={about3Light}
                                    alt="elmo solutions about icon"
                                />
                            </div>
                            <div>
                                {/* title */}
                                <h3 className="titleWithDark mb-2">
                                    Always On Your Side
                                </h3>
                                {/* desc */}
                                <p className="textWithDark !text-[20px]">
                                    commitment ensures 24/7 support, responsive solutions,
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex gap-4 items-start w-full"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                        >
                            {/* icon */}
                            <div className="bg-[var(--mainColor)] dark:bg-[var(--darkColor)] flex-shrink-0 w-[60px] h-[60px] p-[10px] rounded flex items-center justify-center">
                                <Image
                                    fill={false}
                                    src={about1Light}
                                    alt="elmo solutions about icon"
                                />
                            </div>
                            <div className="w-full md:max-w-xs">
                                {/* title */}
                                <h3 className="titleWithDark mb-2">
                                    Quality Reliability
                                </h3>
                                {/* desc */}
                                <p className="textWithDark !text-[20px]">
                                    We promise to make things work reliably, delivering consistent professional excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link
                        data-aos="fade-up"
                        href={"About"}
                        className="mainBtn my-6 md:mt-16 inline-block"
                    >
                        Read more
                    </Link>
                </div>
                {/* about image */}
                <div className="flex w-[100%] md:w-1/2 xl:w-1/2 items-start md:min-h-[550px]">
                    <div className="z-10 bg-[var(--whiteColor)] hidden xl:block translate-x-48 translate-y-36 w-[350px] h-[400px] p-2 rounded dark:bg-[var(--darkColor)]">
                        <Image
                            className="w-full h-full"
                            src={aboutSectionImg2}
                            alt="elmo about descriptions"
                            fill={false}
                            data-aos="fade-up"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="600"
                        />
                    </div>
                    <Image
                        className="w-full ml-auto lg:max-w-[450px] rounded-[15px]"
                        src={aboutSectionImg1}
                        alt="elmo about descriptions"
                        fill={false}
                        data-aos="fade-left"
                        data-aos-easing="ease-in-sine"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
