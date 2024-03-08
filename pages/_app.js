import "../styles/index.css";
import { Provider } from "react-redux";
import store from "../store/index.js";
import AppLayout from "../containers/AppLayout.jsx";
import Aos from "aos";

// import { useRouter } from "next/router.js";
// import { IntlProvider } from "react-intl";
// import en from '../i18n/en.json';
// import it from '../i18n/it.json';
import { useEffect } from "react";

// const messages  = {
//     en,
//     it,
// }


function MyApp({ Component, pageProps }) {
    // const {locale} = useRouter();

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <Provider store={store}>
            {/* <IntlProvider locale={locale} messages={messages[locale]}>
                
            </IntlProvider> */}
            <AppLayout>
                    <Component {...pageProps} />
            </AppLayout>
        </Provider>
    );
}

export default MyApp;
