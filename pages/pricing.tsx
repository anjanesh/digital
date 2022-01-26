import type { NextPage } from 'next'
import Head from 'next/head'

const Pricing: NextPage = () =>
{
    return (
        <div>
            <Head>
                <title>DomaPricingins</title>
            </Head>
            <section className="bg-gray-100 relative text-gray-500"> 
                <div className="container mx-auto pt-24 px-4">
                    <h1 className="font-normal mb-4 text-4xl text-gray-900">Pricing</h1>
                    <p className="pb-6 text-lg">
                        Digital Assets Management fee : 
                        <span className="font-normal">$120</span> (USD) per year or <span className="font-normal">₹8,000</span> (INR) per year                        
                    </p>
                </div>            
            </section>
        </div>
    );
}

export default Pricing