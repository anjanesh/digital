import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'

const Header: NextPage = ({children}) =>
{
    return (
        <>
        <Head>
            <meta name="description" content="Anjanesh Digital - domains, web hosting, wordpress hosting, server setup, digitalocean, discourse"/>
        </Head>
        <Script src="pgia/lib/pgia.js" strategy="afterInteractive"></Script>
        </>
        );
}

export default Header