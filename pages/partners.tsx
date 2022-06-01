import type { NextPage } from 'next'
import Head from 'next/head'

const Partners: NextPage = () =>
{
    return (
        <div>
            <Head>
                <title>Partners</title>
            </Head>
            <section className="bg-gray-100 relative text-gray-500"> 
                <div className="container mx-auto pt-24 px-4">
                    <h1 className="font-normal mb-4 text-4xl text-gray-900 underline">People I&lsquo;ve partnered with</h1>

                    <img src="https://www.sudhir.in/wp-content/uploads/2022/05/sudhir-01-5-1100x1536.png" alt="Sudhir" width="200" className='ml-5 float-right hidden md:block'/>
                    <h2 className='text-3xl'>Sudhir Gattawar</h2>
                    <p className="pb-6 text-lg text-justify mt-5">With 20 years of experience in the digital marketing field in various industries, Sudhir has planned and executed n number of digital marketing strategies and helped companies to achieve their business goals.</p>
                    <p>Sudhir will help you to drive quality leads, increase sales and grow revenue. He has been planning, executing and managing SEO, content &amp; inbound marketing campaigns across organic and paid channels that grow your marketing &amp; sales pipelines.</p>
                    <p className='text-right'><a href="https://sudhir.in" className="text-blue-900 hover:text-blue-500">sudhir.in</a></p>
                    <p className='clear-both'><br/></p>

                    <img src="https://paragcomputers.in/images/parag.png" alt="Parag" width="200" className='ml-5 float-right hidden md:block'/>
                    <h2 className='text-3xl'>Parag Dhwale</h2>
                    <p className="pb-6 text-lg text-justify mt-5">Computer hardware engineer with over 25 years of experience.</p>
                    <p className='text-right'><a href="https://paragcomputers.in" className="text-blue-900 hover:text-blue-500">paragcomputers.in</a></p>
                    <p className='clear-both'><br/></p>

                </div>
            </section>
        </div>
    );
}

export default Partners