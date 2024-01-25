import { Container } from "../shared";
import { HiMail } from "react-icons/hi";
import { RiUserLocationFill } from "react-icons/ri";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { contact } from "../assets";
import Image from "next/image";
import Head from "next/head";

const ContactUs = () => {
    return (
        <>
           <Head>
                    <meta charset="UTF-8" />
                    <link
                        rel="icon"
                        href="/logo.png"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <title>Elmo Tech | Contact Us</title>

                    {/* meta charset */}
                    <meta charset="UTF-8" />
                    {/* meta edge */}
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    {/* meta viewport */}
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    {/* meta description */}
                    <meta name="description" content="your description" />
                    {/* meta keywords */}
                    <meta
                        name="keywords"
                        content="HTML/5 , CSS/3 , JavaScript , ERP systems , CRM , Automation ,FRONT END DEVELOPER , RESPONSIVE DESIGN Elmo Solutions"
                    />
                    {/* meta author */}
                    <meta name="author" content="Elmo Solutions team" />

                    <meta
                        name="og:title"
                        property="og:title"
                        content="Elmo Solutions - SoftWare Development and Automation"
                    />
                    <meta
                        name="og:description"
                        property="og:description"
                        content="Elmo Solutions - Software Development and Automation helps you to will get your systems as REP and CRM "
                    />
                    <meta
                        name="og:image"
                        property="og:image"
                        content="https://i.ibb.co/TmbFb2b/elom-Cover.png"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossorigin
                    />
                    {/* main fonts type  */}
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossorigin
                    />
                    {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;400;500;600;800;900&family=DM+Sans:wght@400;500;700&family=Inter:wght@300;400;600;700&family=Space+Grotesk:wght@400;600;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
            <Container className={"px-5 mt-28 md:mt-0 relative"}>
                <div className="h-[110vh] flex items-center flex-wrap md:flex-nowrap gap-5 justify-between">
                    <div className="md:w-1/2">
                        <div className="flex flex-col gap-5 w-full lg:w-[561px]">
                            <h1 className="titleWithDark !leading-[61px] !text-[48px]">
                                Contact Us
                            </h1>
                            <p className="textWithDark w-full lg:w-[450px] !leading-[36px] !text-[24px]">
                                To Make Requests For Further Information,
                                Contact Us
                            </p>
                        </div>
                        {/* social media links */}
                        <div className="flex flex-col mt-24 gap-10">
                            {/* email */}
                            <div className="flex items-center gap-5 text-[24px]">
                                <HiMail className="text-[var(--mainColor)] text-[34px]" />
                                <p className="font-[400] text-[var(--blackColor)] dark:text-[var(--whiteColor)]">
                                    Infotechmax@Ourmail.com
                                </p>
                            </div>
                            {/* phone */}
                            <div className="flex items-center gap-5 text-[24px]">
                                <BsFillTelephonePlusFill className="text-[var(--mainColor)] text-[34px]" />
                                <p className="font-[400] text-[var(--blackColor)] dark:text-[var(--whiteColor)]">
                                    +00(1) 123 456 7890
                                </p>
                            </div>
                            {/* location */}
                            <div className="flex items-center gap-5 text-[24px]">
                                <RiUserLocationFill className="text-[var(--mainColor)] text-[34px]" />
                                <p className="font-[400] md:w-[377px] text-[var(--blackColor)] dark:text-[var(--whiteColor)]">
                                    Eiusmod Adipisicing 147 New Yors, NY
                                    Adipisicing 123
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <form className="w-[100%] flex flex-col gap-5 xl:w-[730px] shadow-lg rounded-[24px] p-[30px] bg-[var(--whiteColor)] dark:bg-[var(--darkColor)]">
                            <div className="flex items-center gap-5">
                                <input
                                    type="text"
                                    className="w-full h-[70px] bg-transparent text-[var(--darkColor)] dark:text-[var(--whiteColor)] outline-none p-[10px] rounded-[8px] border-[2px] border-[var(--borderColor)]"
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    className="w-full h-[70px] bg-transparent text-[var(--darkColor)] dark:text-[var(--whiteColor)] outline-none p-[10px] rounded-[8px] border-[2px] border-[var(--borderColor)]"
                                    placeholder="Last Name"
                                />
                            </div>
                            <input
                                type="email"
                                className="w-full h-[70px] bg-transparent text-[var(--darkColor)] dark:text-[var(--whiteColor)] outline-none p-[10px] rounded-[8px] border-[2px] border-[var(--borderColor)]"
                                placeholder="Your Mail"
                            />
                            <input
                                type="text"
                                className="w-full h-[70px] bg-transparent text-[var(--darkColor)] dark:text-[var(--whiteColor)] outline-none p-[10px] rounded-[8px] border-[2px] border-[var(--borderColor)]"
                                placeholder="Subject"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full md:min-h-[230px] bg-transparent text-[var(--darkColor)] dark:text-[var(--whiteColor)] outline-none p-[10px] rounded-[8px] border-[2px] border-[var(--borderColor)]"
                            />
                            <button className="mainBtn !mt-0 w-full">
                                Submit
                            </button>
                        </form>
                    </div>
                    <Image
                        src={contact}
                        fill={false}
                        className="absolute bottom-0 md:bottom-14 left-2 md:left-[50%] md:translate-x-[-85%]"
                        alt="image contact us elmo-solutions and automation"
                    />
                </div>
            </Container>
        </>
    );
};

export default ContactUs;
