import { engIcon, italy, mainLogo } from "../assets";
import { motion } from "framer-motion";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { CgMenuRight } from "react-icons/cg";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLangFun, toggleThemeFun } from "../store/reducres/Toggle";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
// import { useIntl } from "react-intl";

const NavBar = () => {
    const dispatch = useDispatch();
    const { toggleLang, toggleTheme } = useSelector(
        (state) => state.toggleMode
    );
    // dark and light themes
    const [openMenu, setOpenMenu] = useState(false);
    // in scroll nav styles
    const [navStyle, setNavStyle] = useState({
        initial: {},
        animate: {},
    });

    // const router = useRouter();
    // const intl = useIntl();

    // handel navigation
    const handleScroll = useCallback(() => {
        const scrollY = window.pageYOffset;
        if (scrollY > 20) {
            setNavStyle({
                initial: {
                    y: -100,
                    opacity: 0,
                },
            });
            if (scrollY > 250) {
                setNavStyle({
                    ...navStyle,
                    animate: {
                        y: 0,
                        opacity: 1,
                        boxShadow: "0px -5px 10px 2px rgba(0, 0, 0, 0.3)",
                        top: 0,
                        marginTop: "0px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        backgroundColor:
                            toggleTheme === "light"
                                ? "var(--secondaryDarkColor)"
                                : "var(--blackColor)",
                        transition: {
                            duration: 0.8,
                        },
                    },
                });
            }
        } else {
            setNavStyle({
                ...navStyle,
                animate: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.8,
                    },
                },
            });
        }
    }, [navStyle, toggleTheme]);

    const handelDarkMode = () => {
        dispatch(toggleThemeFun(toggleTheme === "light" ? "dark" : "light"));
    };

    // const toggleLanguage = useCallback(
    //     (language) => {
    //         dispatch(toggleLangFun(language));
    //         localStorage.setItem("lang", language);
    //         router.replace(router.pathname, router.asPath, { locale: language });
    //     },
    //     [dispatch,router]
    // );

    const toggleNavMenu = () => {
        setOpenMenu(openMenu ? false : true);
    };

    useEffect(() => {
        const getLang = localStorage.getItem("lang");
        dispatch(toggleLangFun(getLang));
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [dispatch, handleScroll]);

    // to change theme
    useEffect(() => {
        if (toggleTheme === "dark") {
            document?.documentElement?.classList?.add("dark");
            handleScroll();
        } else {
            document?.documentElement?.classList?.remove("dark");
            handleScroll();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toggleTheme]);

    return (
        <motion.header
            variants={navStyle}
            initial="initial"
            animate="animate"
            className="navBar items-center"
        >
            {/* logo */}
            <Link title="Visit home page" href={"/"}>
                <Image
                    fill={false}
                    className="w-[50px]"
                    src={mainLogo}
                    alt=""
                />
            </Link>
            <motion.div
                variants={navStyle}
                initial="initial"
                animate="animate"
                onClick={toggleNavMenu}
                className={`navWrapper !p-0 !shadow-none flex items-center ${
                    openMenu ? "open" : null
                }`}
            >
                <nav className="flex gap-7 items-center text-[20px] capitalize text-[var(--blackColor)] dark:text-[var(--whiteColor)]">
                    <Link
                        className="active:text-[var(--mainColor)] hover:text-[var(--mainColor)] transition"
                        href={"/About"}
                    >
                        {/* {intl.formatMessage({ id: "navAboutUs" })} */}
                        about us
                    </Link>
                    <Link
                        className="active:text-[var(--mainColor)] hover:text-[var(--mainColor)] transition"
                        href={"/Services"}
                    >
                        {/* {intl.formatMessage({ id: "navServices" })} */}
                        Services
                    </Link>
                    <Link href={"/ContactUs"} className="navBarBtn">
                        {/* {intl.formatMessage({ id: "navContactUs" })} */}
                        Contact Us
                    </Link>
                </nav>
                <div className="settings flex items-center space-x-4">
                    {/* switch languages  */}
                    {/* <div
                        onClick={() =>
                            toggleLanguage(toggleLang === "en" ? "it" : "en")
                        }
                        className="languages cursor-pointer ml-10"
                    >
                        <Image
                            src={toggleLang === "en" ? italy : engIcon}
                            alt="change elmo language"
                            className="w-[40px]"
                            fill={false}
                        />
                    </div> */}
                    {/* toggle theme */}
                    <div
                        onClick={handelDarkMode}
                        className="cursor-pointer ml-10 text-[35px]"
                    >
                        {toggleTheme === "light" ? (
                            <MdDarkMode />
                        ) : (
                            <CiLight className="text-[var(--whiteColor)]" />
                        )}
                    </div>
                </div>
            </motion.div>
            {/* toggle navBar style */}
            <div
                onClick={toggleNavMenu}
                className="cursor-pointer md:hidden text-[45px] z-10"
            >
                <CgMenuRight className="text-[var(--mainColor)]" />
            </div>
        </motion.header>
    );
};

export default NavBar;
