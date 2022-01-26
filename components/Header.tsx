import type { NextPage } from 'next'
import Head from 'next/head'

const Header: NextPage = ({children}) =>
{
    return (
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.0.2/dist/tailwind.min.css"/>
            <meta name="description" content="Anjanesh Digital - domains, web hosting, wordpress hosting, server setup, digitalocean, discourse"/>
        </Head>
        );
}

export default Header