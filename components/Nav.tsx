import Link from 'next/link'

export const Nav = () => {
  return (
    <nav className="flex items-center flex-wrap px-4 py-5  container mx-auto"><Link href="/"><a className="font-medium hover:text-blue-800 mr-auto text-2xl text-blue-600 uppercase">Anjanesh Digital</a></Link>
        <button className="hover:bg-blue-600 hover:text-white px-3 py-2 rounded text-blue-600 lg:hidden" data-name="nav-toggler" data-pg-ia='{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"class.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}'> <span className="block border-b-2 border-current my-1 w-6"></span> <span className="block border-b-2 border-current my-1 w-6"></span> <span className="block border-b-2 border-current my-1 w-6"></span> 
        </button>                 
        <div className="lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto space-y-2 w-full hidden" data-name="nav-menu"> 
            <div className="flex flex-col lg:flex-row">
                <Link href="/"><a href="#" className="font-light hover:text-blue-600 lg:px-4 py-2 px-0">Home</a></Link>
                <Link href="/about"><a href="/about" className="font-light hover:text-blue-600 lg:px-4 py-2 px-0">About</a></Link>
                <Link href="/domains"><a href="/domains" className="font-light hover:text-blue-600 lg:px-4 py-2 px-0">Domains</a></Link>
                <Link href="/emails"><a href="/emails" className="font-light hover:text-blue-600 lg:px-4 py-2 px-0">Emails</a></Link>
                <Link href="/hosting"><a href="/hosting" className="font-light hover:text-blue-600 lg:px-4 py-2 px-0">Web Hosting</a></Link>
                <Link href="/forums"><a href="/forums" className="font-light hover:text-blue-600 lg:px-4 py-2 px-0">Community Forum</a></Link>
                <Link href="/pricing"><a href="/pricing" className="font-light hover:text-blue-600 lg:px-4 py-2 px-0">Pricing</a></Link>
                <Link href="/contact"><a href="/contact" className="font-light hover:text-blue-600 lg:px-4 py-2 px-0">Contact</a></Link>
            </div>
            <a href="https://forms.gle/Lp5G8qtwiyW8RkYU9" target="_blank" className="bg-blue-600 font-light inline-block px-5 py-2 rounded text-white hover:bg-blue-700">Sign Up</a> 
        </div>
    </nav>
   )
 }
