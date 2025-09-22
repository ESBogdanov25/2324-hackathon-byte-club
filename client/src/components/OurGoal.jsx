import { ai } from '../assets';
import styles from '../style';

const OurGoal = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`basis-1/2  ${styles.flexStart} flex-col xl:px-[6em] sm:px-[1em] xs:px-[2em] px-[0.25em] mx-20`}>

            <p className="xl:text-8xl text-6xl py-6 text-indigo-900">Our Goal</p>

            
            <p className={`${styles.paragraph} sm: text-[1.4em] xl:text-[2em] xl:leading-10  `}>
                Our goal is to make people's lives easier by using AI to predict your sickness and suggest a possible treatment.
            </p>
        </div>

        <div className={`basis-1/2 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={ ai } alt="ai photo" className="sm:w-[20em] sm:h-[20em] md:w-[18em] md:h-[18em] lg:w-[30em] lg:h-[30em] xl:w-[50em] xl:h-[50em] w-[16em] h-[16em] relative z-5" />
        </div>
    </section>
)

export default OurGoal;