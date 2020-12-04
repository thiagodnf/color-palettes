import Head from "next/head";

function Component(props) {

    return (
        <Head>
            <title>Color Palettes</title>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1" />
            <meta name="description" content="A set of useful color palettes for your project"/>
            <meta name="author" content="Thiago Ferreira"/>
            <meta name="keywords" content="highcharts, color palettes, colors"/>
            <meta name="mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            <meta name="apple-mobile-web-app-title" content="Color Palettes"/>
            <meta name="robots" content="index, follow"/>

            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/images/favicon/site.webmanifest"/>
        </Head>
    );
}

export default Component;
