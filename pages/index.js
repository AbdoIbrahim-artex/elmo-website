
import {
    OurProjects,
    OurTechnology,
    WhatWeOffer,
    XmaxSection,
} from "../components";
import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import Head from "next/head";

const Home = () => {
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
                    <title>Elmo Tech | Home</title>

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
            <div className="w-full flex flex-col gap-20">
                {/* main section in home page */}
                <HeroSection />
                {/* about sections */}
                <AboutSection />
                {/* XmaxSection */}
                <XmaxSection />
                {/* what we offer section */}
                <WhatWeOffer />
                {/* OurTechnology */}
                <OurTechnology />
                {/* our projects */}
                <OurProjects />
            </div>
        </>
    );
};

export default Home;
