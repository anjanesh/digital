import type { NextPage } from 'next'
import Head from 'next/head'

const Emails: NextPage = () =>
{
    return (
        <div>
            <Head>
                <title>Emails</title>
            </Head>
            <section className="bg-gray-100 relative text-gray-500"> 
                <div className="container mx-auto pt-24 px-4">
                    <h1 className="font-normal mb-4 text-4xl text-gray-900"><u>Emails</u></h1>
                    <p className="mb-6 text-lg">                        
                        <a href="https://workspace.google.com/" target="_blank" className="underline text-blue-600 hover:text-blue-800" rel="noreferrer">Google WorkSpace</a> - ₹125 per email id per month - like anjanesh@anjanesh.com - there&lsquo;s no longer a free tier at Google anymore. For one or two email addresses Google is fine.<br/>For example, for two email ids, it would be ₹250 per month or ₹3,000 per year.
                    </p>
                    <p className="mb-6 text-lg">
                        If you have a requirement of more than, say, 5 email ids, then we choose other providers like <a href="https://opalstack.com" target="_blank" className="underline text-blue-600 hover:text-blue-800" rel="noreferrer">OpalStack.com</a> where the number of email ids are unlimited - it&lsquo;s limited by the TOTAL storage space which is 50GB @$9.50 per month.
                    </p>
                    <p className="pb-6 text-lg">
                        There is another new shiny email system called <a href="https://titan.email" target="_blank" className="underline text-blue-600 hover:text-blue-800" rel="noreferrer">titan.email</a> but there are extremely few providers for this, and if this gets traction, I&lsquo;ll recommend this to clients.
                    </p>
                </div>            
            </section>
        </div>
    );
}

export default Emails