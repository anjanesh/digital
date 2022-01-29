import { useEffect } from 'react';
import type { NextPage } from 'next'

import { Nav } from './Nav'
import Header from './Header'
import Footer from './Footer'
import Trackers from './Trackers'

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
        <Trackers />
        </>
        );
}

export default Layout