import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../styles/globals.css'
import "swiper/css/bundle";
import LayoutSite from "../components/layout";
import UserProvider from "../context/UserContext";

function MyApp({Component, pageProps}) {
    return (
        <UserProvider>
            <LayoutSite>
                <Component {...pageProps} />
            </LayoutSite>
        </UserProvider>
    )
}

export default MyApp
