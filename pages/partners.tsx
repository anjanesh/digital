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
                    <h1 className="font-normal mb-4 text-4xl text-gray-900 underline pb-5">People I&lsquo;ve partnered with</h1>

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

                    <img src="https://newapnatravels.com/suchit-sawant.webp" alt="Suchit" width="200" className='ml-5 float-right hidden md:block'/>
                    <h2 className='text-3xl'>Suchit Sawant</h2>
                    <p className="pb-6 text-lg text-justify mt-5">New Apna Travels is a recreational and leisure travel management company offering value for money travel options. In our tours we work with the synchronization of eye and mind, a flash of perception - the ordinary magic of the phenomenal world. New Apna Travels offer travel consultancy, leisure holiday, special honeymoon package tours, adventure vacations and photo tours, eco tours, local city sightseeing, air ticketing, accommodation and adventure activities</p>
                    <p className='text-right'><a href="https://newapnatravels.com" className="text-blue-900 hover:text-blue-500">newapnatravels.com</a></p>
                    <p className='clear-both'><br/></p>

                    <img src="https://anjanesh.digital/shabeer.webp" alt="Shabeer" width="200" className='ml-5 float-right hidden md:block'/>
                    <h2 className='text-3xl'>Shabeer Naha</h2>
                    <p className="pb-6 text-lg text-justify mt-5">Naha is a Co founder of SMCS and has over 14+ years of hands-on experience in Strategy consulting, Business Turn around management, Deal origination, and Business Development. After Co-founding and Incubating a New Media Technology start up at Asia&#39;s largest Technology Park, Technopark; he exited the business successfully since five years of its inception. He had served Fortune100, Global2000, mid cap companies and many SMBs in various capacities across multiple industry segments. He is an Industrial Engineering graduate from Kerala University.</p>
                    <p className='text-right'><a href="https://smcsindia.com" className="text-blue-900 hover:text-blue-500">smcsindia.com</a></p>
                    <p className='clear-both'><br/></p>

                </div>
            </section>
        </div>
    );
}

export default Partners