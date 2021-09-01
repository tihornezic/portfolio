import Link from 'next/link'
import indicatorsStyles from '../styles/Indicators.module.css'

const Indicators = ({homeIsVisible, aboutIsVisible, projectOneIsVisible, projectTwoIsVisible, projectThreeIsVisible, contactMeIsVisible}) => {
    return (
        <div className={indicatorsStyles.indicators}>
            <Link href='#home' passHref>
                <div className={homeIsVisible ? indicatorsStyles.active : ''}></div>
            </Link>
            <Link href='#about' passHref>
                <div className={aboutIsVisible ? indicatorsStyles.active : ''}></div>
            </Link>
            <Link href='#projectOne' passHref>
                <div className={projectOneIsVisible ? `${indicatorsStyles.active} ${indicatorsStyles.projectOneActive}` : ''}></div>
            </Link>
            <Link href='#projectTwo' passHref>
                <div className={projectTwoIsVisible ? `${indicatorsStyles.active} ${indicatorsStyles.projectTwoActive}` : ''}></div>
            </Link>
            <Link href='#projectThree' passHref>
                <div className={projectThreeIsVisible ? `${indicatorsStyles.active} ${indicatorsStyles.projectThreeActive}` : ''}></div>
            </Link>
            <Link href='#contactMe' passHref>
                <div className={contactMeIsVisible ? indicatorsStyles.active : ''}></div>
            </Link>
        </div>
    )
}

export default Indicators
