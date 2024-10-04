import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Provider } from 'react-redux';
import { store } from './../store/store';


export default function App({ Component, pageProps }) {
    return (
        <>
            <Provider store={store}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </>
    )
}