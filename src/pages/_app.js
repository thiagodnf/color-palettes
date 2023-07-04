import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "../../public/css/style.scss";

export default function MyApp({ Component, pageProps }) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return <Component {...pageProps} />;
}
