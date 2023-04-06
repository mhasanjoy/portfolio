import CustomCursor from '@/components/CustomCursor';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
    return (
        <>
            <CustomCursor />
            <Component {...pageProps} />
        </>
    );
}
