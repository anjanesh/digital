import type { NextPage } from 'next'
import Head from 'next/head'

const Contact: NextPage = () =>
{
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <section className="bg-gray-100 relative text-gray-500"> 
                <div className="container mx-auto pt-24 px-4">
                    <h1 className="font-normal mb-4 text-4xl text-gray-900">Contact</h1>
                    <p className="pb-6 text-lg">
                        Please WhatsApp me on <a href="whatsapp://send?phone=+918591035077&text=Hello%2C%20I%20would%20like%20to%20hire%20you%20for%20my%20business" className="hover:text-gray-400">+91 85910 35077</a><br/>
                        Please Email me at <a href="mailto:anjanesh@anjanesh.com" className="hover:text-gray-400">anjanesh@anjanesh.com</a>                    
                    </p>
                </div>
            </section>
            <section className="bg-gray-100 text-gray-500">
                <iframe style={{margin: 'auto'}} src="https://docs.google.com/forms/d/e/1FAIpQLSfm3PuiwqOvvF2G9zfUwcwKb4ulNg4eIKX2Zsz9rVb2OpAeaw/viewform?embedded=true" width="640" height="1967" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
            </section>
        </div>
    );
}

export default Contact