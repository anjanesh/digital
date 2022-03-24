import type { NextPage } from 'next'
import Head from 'next/head'

const Hosting: NextPage = () =>
{
    return (
        <div>
            <Head>
                <title>Hosting</title>
            </Head>
            <section className="bg-gray-100 relative text-gray-500"> 
                <div className="container mx-auto pt-24 px-4">
                    <h1 className="font-normal mb-4 text-4xl text-gray-900"><u>General Web Hosting</u></h1>
                    <p className="mb-6 text-lg">                        
                        For most basic hosting - regular PHP websites, Laravel based PHP apps / sites, nodeJS, Django etc managed hosting at <a href="https://opalstack.com" target="_blank" className="underline text-blue-600 hover:text-blue-800" rel="noreferrer">OpalStack.com</a> would suffice. They start at $95 a year for shared plans and have $20 / month VPS located in Mumbai. They use <a href="https://linode.com" target="_blank" className="underline text-blue-600 hover:text-blue-800" rel="noreferrer">Linode</a> servers.
                    </p>
                    <h2 className="font-normal mb-2 text-3xl text-gray-900"><u>WordPress Hosting</u></h2>
                    <p className="mb-6 text-lg">
                        With one third of the world&#39;s websites powered by <a href="https://wordpress.com" target="_blank" className="underline text-blue-600 hover:text-blue-800" rel="noreferrer">WordPress</a>, there&#39;s few who haven&#39;t heard the term WordPress.<br/>
                        For WordPress, I recommend a combination of <a href="https://digitalocean.com" target="_blank" className="underline text-blue-600 hover:text-blue-800" rel="noreferrer">DigitalOcean</a> and <a href="https://serverpilot.io" target="_blank" className="underline text-blue-600 hover:text-blue-800" rel="noreferrer">ServerPilot</a>.<br/><br/>
                        DigitalOcean is a server provider and ServerPilot is a 3rd-party cloud control panel for DigitalOcean.<br/>
                        The most economical plan on DigitalOcean is $5 a month and a WordPress site on it via ServerPilot is $5.50 per month - its actually $5 per DigitalOcean server and $0.50 per WordPress site…blah blah blah…Long story short, it would be $10.50 per month for one WordPress site, $12.50 per month for 5 WordPress sites and $15 / mo for 10 WordPress sites.
                    </p>
                    <h2 className="font-normal mb-4 text-4xl text-gray-900"><u>Backup</u></h2>
                    <p className="pb-10 text-lg">
                        I strongly recommend <a href="snapshooter.com" target="_blank" className="underline text-blue-600 hover:text-blue-800" rel="noreferrer">Snapshooter</a> to backup a website&#39;s data, whether it be an entire website or just database(s). They have a free plan for a daily backup of 500MB. The backups can be to most kind of servers like DigitalOcean Spaces or Amazon AWS S3. If your business grows, then you can decide on a paid plan starting @ $14 a month. I think this will greatly reduce failure-to-restore an entire project.
                    </p>
                </div>            
            </section>
        </div>
    );
}

export default Hosting