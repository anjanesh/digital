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
                    <h1 className="font-normal mb-4 text-4xl text-gray-900">About Anjanesh Digital</h1>
                    <img src="https://anjanesh.s3.us-east-1.amazonaws.com/anjanesh.december.2021.1000x1000.avif" alt="Anajnesh" width="200" className='ml-5 float-right hidden md:block'/>
                    <p className="pb-6 text-lg text-justify">
                    Hola, I am Anjanesh Lekshminarayanan from Navi Mumbai, India, South Asia.<br/><br/>
                    I created my first full-blown website in PHP way back in 2003 for my college classmates at vlbjcas that served as a mini closed social networking site when I was in the final year of college. So I consider the experience starting right from those days. I used the infamous CPanel which was the most popular at that time and even now it probably has the largest user-base for new-comers. Now I’m wiser in digital management after getting older by 20 years and use only the most robust toolset in the digital space without (trying) going over your budget.
                    </p>
                    <p className='clear-both'><br/></p>
                </div>
            </section>
        </div>
    );
}

export default About