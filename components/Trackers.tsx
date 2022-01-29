import { useEffect } from 'react';
import type { NextPage } from 'next'
import Script from 'next/script'

const Trackers: NextPage = ({children}) =>
{
    useEffect(() =>
    {        
    });

    return (        
        <>  
        <Script src="https://cdn.panelbear.com/analytics.js?site=bDGErPEZyi" strategy="afterInteractive"></Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YX6ERKL9W0" strategy="afterInteractive"></Script>
        <Script src="trackers.js" strategy="afterInteractive"></Script>        
        </>
        );
}

export default Trackers