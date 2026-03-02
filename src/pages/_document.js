import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import Package from "../../package.json";

export default function Document() {

    return (
        <Html lang="en" data-bs-theme="dark">
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content={Package.description} />
                <meta name="author" content={Package.author} />
                <meta name="keywords" content={Package.keywords} />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#2C3035" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <meta name="apple-mobile-web-app-title" content="Color Palettes" />
                <meta name="robots" content="index, follow" />

                <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png" />
                <link rel="manifest" href="images/favicon/site.webmanifest" />

                <meta property="og:title" content="Color Palettes" />
                <meta property="og:url" content={Package.homepage} />
                <meta property="og:description" content={Package.description} />
                <meta property="og:image" content="images/favicons/favicon-32x32.jpg" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="pt_BR" />

            </Head>
            <body>
                <Main />

                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-CR9SXVEZQZ"
                    strategy="afterInteractive"
                />

                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                       window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-CR9SXVEZQZ');
                    `}
                </Script>

                <NextScript />
            </body>
        </Html>
    );
}
