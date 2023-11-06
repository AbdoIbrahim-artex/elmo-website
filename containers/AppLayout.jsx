import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";

const AppLayout = ({ children }) => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <main className="flex flex-col gap-20 overflow-hidden bg-[var(--whiteColor)] dark:bg-[var(--blackColor)] font-baseFont">
            {/* nave bar */}
            <NavBar />
            {/* all pages */}
            {children}
            {/* footer */}
            <Footer />
        </main>
    );
};

export default AppLayout;
