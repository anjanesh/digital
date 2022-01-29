import type { NextPage } from 'next'
import Head from 'next/head'

const Recommendations: NextPage = () =>
{
    return (
        <div>
            <Head>
                <title>Recommendations</title>
            </Head>
            <section className="bg-gray-100 relative text-gray-500"> 
                <div className="container mx-auto pt-24 px-4">
                    <h1 className="font-normal mb-4 text-4xl text-gray-900"><u>Client Recommendations</u></h1>
                    <p>
                    <iframe className="airtable-embed" src="https://airtable.com/embed/shr0dwgZFzzV1YsCc?backgroundColor=orange&viewControls=on&layout=card" frameBorder="0" width="100%" height="933" style={{ background: "transparent", border: "1px solid #ccc" }}></iframe>
                    </p>
                </div>            
            </section>
        </div>
    );
}

export default Recommendations