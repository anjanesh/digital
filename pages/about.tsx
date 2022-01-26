import type { NextPage } from 'next'
import Head from 'next/head'

const About: NextPage = () =>
{
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <section className="bg-gray-100 relative text-gray-500"> 
                <div className="container mx-auto pt-24 px-4">
                    <h1 className="font-normal mb-4 text-4xl text-gray-900">About</h1>
                    <p className="pb-6 text-lg">
                        About Anjanesh Digital
                    </p>
                </div>
            </section>
        </div>
    );
}

export default About