import { arrowUp, github, instagram, facebook, linkedin, logo } from '../assets';
import styles from '../style';

const Footer = () => (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 bg-indigo-600 p-6">
        <img src={logo} alt="Logo" className="w-[5em] h-[4em] xs:w-[10em] xs:h-[8em] mx-auto my-auto"/>
        
        <div className="mx-auto my-auto">
            {
            location.pathname === '/' ? <a href="#home" className="flex flex-row text-white mb-10 p-2 rounded-xl">
                <h1 className="text-xl pt-0.5">Back to top</h1>
                <img src={arrowUp} alt="arrow up" className="w-8 h-8" />
            </a> : "" }

            <p className="text-xl text-white ml-4">&copy; Byte Club</p>
        </div>
        <div className="flex flex-row gap-[3em] mx-auto my-auto">
            <a href="https://github.com/Code-Of-The-Future-Hackathon/code-of-the-future-2023-byte-club.git"><img src={github} alt="Github" className={`${styles.iconStyle}`}/></a>
            <a href="https://www.linkedin.com/"><img src={linkedin} alt="Linkedin" className={`${styles.iconStyle}`}/></a>
            <a href="https://www.facebook.com"><img src={facebook} alt="Facebook" className={`${styles.iconStyle} `}/></a>
            <a href="https://www.instagram.com/"><img src={instagram} alt="Instagram" className={`${styles.iconStyle}`}/></a>
        </div>
    </div>
)

export default Footer;