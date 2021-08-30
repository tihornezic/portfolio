import Link from 'next/link'
import indicatorsStyles from '../styles/Indicators.module.css'

const Indicators = ({homeIsVisible, aboutIsVisible, projectOneIsVisible}) => {
    return (
        <div className={indicatorsStyles.indicators}>
            <Link href='#home'>
                <div className={homeIsVisible ? indicatorsStyles.active : ''}></div>
            </Link>
            <Link href='#about'>
                <div className={aboutIsVisible ? indicatorsStyles.active : ''}></div>
            </Link>
            <Link href='#projectOne'>
                <div className={projectOneIsVisible ? `${indicatorsStyles.active} ${indicatorsStyles.projectOneActive}` : ''}></div>
            </Link>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Indicators
