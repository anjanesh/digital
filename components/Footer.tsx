import type { NextPage } from 'next'
import Link from 'next/link'

const Footer: NextPage = ({children}) =>
{
    return (
        <footer className="bg-gray-900 pt-12 text-white"> 
            <div className="container mx-auto px-4"> 
                <div className="flex flex-wrap -mx-4"> 
                    <div className="w-full p-4 xl:w-4/12"> <a href="#" className="font-semibold hover:text-gray-400 inline-block mb-6 mr-auto text-3xl uppercase">Anjanesh Digital</a> 
                        <p className="mb-4">Navi Mumbai, Maharashtra<br/>India 400706</p> 
                        <div className="mb-6">
                            Please WhatsApp me on <a href="whatsapp://send?phone=+918591035077&text=Hello%2C%20I%20would%20like%20to%20hire%20you%20for%20my%20business" className="hover:text-gray-400">+91 85910 35077</a><br/>
                            Please Email me at <a href="mailto:anjanesh@anjanesh.com" className="hover:text-gray-400">anjanesh@anjanesh.com</a>
                        </div>                         
                    </div>                     
                    <div className="p-4 w-full sm:w-6/12 md:w-3/12 xl:w-2/12"> 
                        <h2 className="font-normal mb-8 text-lg uppercase">About</h2> 
                        <ul>
                            <li className="mb-4">
                                <Link href="/about" passHref={true}><a className="hover:text-gray-400">About</a></Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/partners" passHref={true}><a className="hover:text-gray-400">Partners</a></Link>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/anjanesh/digital" className="hover:text-gray-400" target="_blank" rel="noreferrer">Source Code</a>
                            </li>
                        </ul>
                    </div>                     
                    <div className="p-4 w-full sm:w-6/12 md:w-3/12 xl:w-2/12"> 
                        <h2 className="font-normal mb-8 text-lg uppercase">Services</h2> 
                        <ul> 
                            <li className="mb-4">                                
                                <Link href="/domains" passHref={true}><a className="hover:text-gray-400" rel="noreferrer">Domains</a></Link>
                            </li>                             
                            <li className="mb-4">
                                <Link href="/emails" passHref={true}><a className="hover:text-gray-400" rel="noreferrer">Emails</a></Link>
                            </li>                             
                            <li className="mb-4">
                                <Link href="/hosting" passHref={true}><a className="hover:text-gray-400" rel="noreferrer">Web Hosting</a></Link>
                            </li>                             
                            <li className="mb-4">
                                <Link href="/forums" passHref={true}><a className="hover:text-gray-400" rel="noreferrer">Community Forum</a></Link>
                            </li>                             
                        </ul>                         
                    </div>                     
                    <div className="p-4 w-full md:w-6/12 xl:w-4/12"> 
                        <h2 className="font-normal mb-8 text-lg uppercase">Subscribe</h2> 
                        <p className="mb-4">Subscribe to our newsletter and get exclusive updates directly in your inbox. </p> 
                        <form> 
                            <div className="bg-white border-2 border-gray-400 flex items-center mb-6 overflow-hidden p-1"> 
                                <input className="appearance-none border-blue-600 flex-1 font-light outline-none p-2 text-gray-600 w-full" placeholder="Enter email..." type="email"/> <a href="https://anjanesh.news" className="bg-blue-600 font-medium hover:bg-blue-700 inline-block px-6 py-2 text-center text-white uppercase" aria-label="submit"><svg viewBox="0 0 24 24" fill="currentColor" className="h-4 inline-block w-4"> 
                                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"/> 
                                    </svg></a> 
                            </div>                             
                        </form>                         
                        <h2 className="font-bold mb-4 text-lg uppercase">Get Social</h2> 
                        <div className="flex-wrap inline-flex space-x-3"> <a href="https://facebook.com/anjanesh" target="_blank" rel="noreferrer" className="hover:text-blue-400" aria-label="facebook link"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
                                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/> 
                                </svg></a> <a href="https://twitter.com/anjanesh" target="_blank" rel="noreferrer" className="hover:text-blue-400" aria-label="twitter link"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
                                    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/> 
                                </svg></a> <a href="https://instagram.com/anjanesh" target="_blank" rel="noreferrer" className="hover:text-blue-400" aria-label="instagram link"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
                                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/> 
                                </svg></a> <a href="https://www.linkedin.com/in/anjanesh/" target="_blank" rel="noreferrer" className="hover:text-blue-400" aria-label="linkedin link"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
                                    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/> 
                                </svg></a> <a href="https://www.youtube.com/user/anjanesh" target="_blank" rel="noreferrer" className="hover:text-blue-400 hidden" aria-label="youtube link"> <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"> 
                                    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/> 
                                </svg></a> 
                        </div>                         
                    </div>                     
                </div>                 
                <div className="py-4 text-sm"> 
                    <hr className="border-gray-400 mb-4 opacity-25"/> 
                    <div className="flex flex-wrap -mx-4  items-center"> 
                        <div className="px-4 py-2 w-full md:flex-1"> 
                            <p>&copy; 2022 | All Rights Reserved - Anjanesh Digital</p> 
                        </div>                         
                        <div className="px-4 py-2 w-full sm:w-auto"> <a href="#" className="hover:text-gray-400">Privacy Policy</a> |                      <a href="#" className="hover:text-gray-400">Terms of Use</a> 
                        </div>                         
                    </div>                     
                </div>                 
            </div>             
        </footer>
        );
}

export default Footer