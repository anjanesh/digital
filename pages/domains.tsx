import type { NextPage } from 'next'
import Head from 'next/head'

const Domains: NextPage = () =>
{
    return (
        <div>
            <Head>
                <title>Domains</title>
            </Head>
            <section className="bg-gray-100 relative text-gray-500"> 
                <div className="container mx-auto pt-24 px-4">
                    <h1 className="font-normal mb-4 text-4xl text-gray-900"><u>Domains</u></h1>
                    <p className="mb-6 text-lg">
                        <span className="font-normal">$10</span> or <span className="font-normal">₹750</span> per year for most common domain extensions - example : <a className="underline text-blue-600 hover:text-blue-800" href="https://anjanesh.com" target="_blank" rel="noreferrer">anjanesh.com</a><br/>
                        Some others are like around $30 per extension - for example, <a className="underline text-blue-600 hover:text-blue-800" href="https://anjanesh.digital" rel="noreferrer">anjanesh.digital</a> - give or take another $10 to $20
                    </p>
                    <p className="mb-6 text-lg">Domains can be purchased from many providers (GoDaddy being the most popular one) but I choose mainly from : <a href="https://anjanesh.supersite2.myorderbox.com/" className="hover:underline text-blue-600 hover:text-blue-800" target="_blank" rel="noreferrer">ResellerClub</a>, <a href="https://www.bigrock.in/" className="text-blue-600 hover:underline hover:text-blue-800" target="_blank" rel="noreferrer">BigRock</a>, <a href="https://domains.google/" className="hover:underline text-blue-600 hover:text-blue-800" target="_blank" rel="noreferrer">Google Domains</a> or CloudFlare.</p>
                    <h2 className="font-normal mb-2 text-3xl text-gray-900"><u>CloudFlare</u></h2>
                    <p className="pb-10 text-lg">I use <a className="underline text-blue-600 hover:text-blue-800" href="https://cloudflare.com" rel="noreferrer">CloudFlare</a> for domain management. It can also be managed at ResellerClub, BigRock or even Google but Cloudflare is the industry leader in this currently with the free edition being more than good enough for 99% sites and has paid tiers @ $20 a month (per domain) for even better performance for clients having online business at a larger scale</p>

                </div>            
            </section>
        </div>
    );
}

export default Domains