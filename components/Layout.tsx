import { useEffect } from 'react';
import { Nav } from './Nav'
import type { NextPage } from 'next'

import Header from './Header'
import Footer from '../components/Footer'

const Layout: NextPage = ({children}) =>
{
    useEffect(() =>
    {        
        document.body.classList.add("font-light");
        document.body.classList.add("text-gray-700");
    });

    return (
        <>
        <div>       
            <Header />
            <header className="bg-white"> 
                <Nav />
            </header>
            <div>                
                {children}
            </div>            
        </div>        
        <Footer />
        </>
        );
}

export default Layout