import type { NextPage } from 'next'
import Head from 'next/head'

const Forums: NextPage = () =>
{
    return (
        <div>
            <Head>
                <title>Forums</title>
            </Head>
            <section className="bg-gray-100 relative text-gray-500"> 
                <div className="container mx-auto pt-24 px-4">
                    <h1 className="font-normal mb-4 text-4xl text-gray-900">Community Forums</h1>
                    <p className="pb-10 text-lg">
                        For a community forum, once upon a time, when PHP ruled the web universe, free &amp; open-source forum software like <a href="https://www.phpbb.com" target="_blank" className="underline text-blue-600 hover:text-blue-800">phpBB</a> and a premium software, <a href="https://www.vbulletin.com" target="_blank" className="underline text-blue-600 hover:text-blue-800">vBulletin</a> were the #1 choice. But things have changed quite recently in 2014 when one of the co-founders of <a href="https://stackoverflow.com/" target="_blank" className="underline text-blue-600 hover:text-blue-800">StackOverflow</a>, Jeff Atwood, launched his own version of a community forum software, <a href="https://www.discourse.org" target="_blank" className="underline font-bold text-blue-600 hover:text-blue-800">Discourse</a>, as open-source based on Ruby, Ember &amp; PostgreSQL. Though I have no expertise in Ruby, Ember or Postgres, the installation ($150 one-time) &amp; setup ($10 a month on DigitalOcean) can be arranged at a premium for clients wanting a serious online Q&amp;A discussion platform.
                    </p>
                </div>            
            </section>
        </div>
    );
}

export default Forums