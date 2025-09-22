import { Navbar, Footer } from "./";
import { github, instagram, facebook, linkedin} from '../assets';

const Contact = () => {
    return (
        <>
            <Navbar />

                <div className = "flex w-full min-h-screen justify-center items-center antialised bg-gray-100 pt-[5em] ">
                    <div className = "flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-indigo-500 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">

                        <div className="flex flex-col space-y-8 justify-between">
                            <div>
                                <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                                <p className="pt-2 text-cyan-100 text-sm">Contact us via email or social media to provide us with feedback.</p>
                            </div>
                            
                            <div className="flex space-x-4 text-lg">
                            <a href="https://github.com/Code-Of-The-Future-Hackathon/code-of-the-future-2023-byte-club.git"><img src={github} alt="Github" className="w-[2em]"/></a>
                            <a href="https://www.linkedin.com/"><img src={linkedin} alt="Linkedin" className="w-[2em]"/></a>
                            <a href="https://www.facebook.com"><img src={facebook} alt="Facebook" className="w-[2em]"/></a>
                            <a href="https://www.instagram.com/"><img src={instagram} alt="Instagram" className="w-[2em]"/></a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute w-40 h-40 bg-pink rounded-full -right-28 -top-28">

                            </div>
                            <div className="absolute w-40 h-40 bg-pink rounded-full -left-28 -bottom-24">

                            </div>
                            <div className="relative z-0 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                                <form action="" className="flex flex-col space-y-4">
                                    <div>
                                        <label for="" className="text-sm">Your name</label>
                                        <input type="text" placeholder="Your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-pink"/>
                                    </div>
                                    <div>
                                        <label for="" className="text-sm">Email Address</label>
                                        <input type="email" placeholder="Email Address" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-pink"/>
                                    </div>
                                    <div>
                                        <label for="" className="text-sm">Message</label>
                                        <textarea placeholder="Message" rows = "4" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-pink"/>
                                    </div>
                                    <button className="inline-block self-end bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            <Footer />
        </>
    )
}

export default Contact;

