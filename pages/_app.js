import "../styles/index.css";
import { Provider } from "react-redux";
import store from "../store/index.js";
import AppLayout from "../containers/AppLayout.jsx";
// import { appWithTranslation } from '../i18n/i18n';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </Provider>
    );
}

export default MyApp;
