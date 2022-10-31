import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'

const Header: NextPage = ({children}) =>
{
    return (
        <>
        <Head>
            {/* <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.0.2/dist/tailwind.min.css"/> */}
            <script src="https://cdn.tailwindcss.com/3.2.1"></script>
            <meta name="description" content="Anjanesh Digital - domains, web hosting, wordpress hosting, server setup, digitalocean, discourse"/>
        </Head>
        <Script src="pgia/lib/pgia.js" strategy="afterInteractive"></Script>
        </>
        );
}

export default Header