import Link from 'next/link'
import Image from 'next/image'
import logo from '../img/logo.svg'
import navbarStyles from '../styles/Navbar.module.css'
import {useRouter} from 'next/router'
import {useState} from 'react'

const Navbar = ({homeIsVisible, aboutIsVisible, projectOneIsVisible, projectTwoIsVisible, projectThreeIsVisible, contactMeIsVisible}) => {
    const [showHamburger, setShowHamburger] = useState(false)
    const [slideMenu, setSlideMenu] = useState(false)

    return (
        // <div className='container'>
        <div className={navbarStyles.navbarContainer}>
            <nav className={`${navbarStyles.nav}`}>
                <ul>
                    <li>
                        <Link href='#home'>
                            <Image src={logo} alt='Tihor Nezić logo' className={navbarStyles.img} />
                        </Link>
                    </li>
                    <div className={navbarStyles.links}>
                        <li>
                            <Link href='#home'>
                                <a style={{color: homeIsVisible ? '#7550FD' : '#373737'}}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#about'>
                                <a style={{color: aboutIsVisible ? '#7550FD' : '#373737'}}>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#projectOne'>
                                <a style={{color: projectOneIsVisible ? '#2F6DB5' : projectTwoIsVisible ? '#b460a8' : projectThreeIsVisible ? '#366961' : '#373737'}}>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#contactMe'>
                                <a style={{color: contactMeIsVisible ? '#7550FD' : '#373737'}}>Contact me</a>
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>

            <div className={`${'container'} ${navbarStyles.responsiveNav}`}>
                <div className={navbarStyles.responsiveLogo}>
                    <Link href='#home'>
                        <Image src={logo} alt='Tihor Nezić logo' className={navbarStyles.img} />
                    </Link>
                </div>

                <div className={navbarStyles.hamburger} onClick={() => {setShowHamburger(prev => !prev); setSlideMenu(prev => !prev)}}>
                    <div className={showHamburger ? `${navbarStyles.open}` : `${navbarStyles.close}`}></div>
                    <div className={showHamburger ? `${navbarStyles.open}` : `${navbarStyles.close}`}></div>
                    <div className={showHamburger ? `${navbarStyles.open}` : `${navbarStyles.close}`}></div>
                </div>
            </div>

            <div className={slideMenu ? `${navbarStyles.slideMenuOpen}` : `${navbarStyles.slideMenu}`}>
                <ul>
                    <div className={navbarStyles.links}>
                        <li onClick={() => {setShowHamburger(prev => !prev); setSlideMenu(prev => !prev)}}>
                            <Link href='#home'>
                                <a style={{color: homeIsVisible ? '#7550FD' : '#373737'}}>Home</a>
                            </Link>
                        </li>
                        <li onClick={() => {setShowHamburger(prev => !prev); setSlideMenu(prev => !prev)}}>
                            <Link href='#about'>
                                <a style={{color: aboutIsVisible ? '#7550FD' : '#373737'}}>About</a>
                            </Link>
                        </li>
                        <li onClick={() => {setShowHamburger(prev => !prev); setSlideMenu(prev => !prev)}}>
                            <Link href='#projectOne'>
                                <a style={{color: projectOneIsVisible ? '#2F6DB5' : projectTwoIsVisible ? '#b460a8' : projectThreeIsVisible ? '#366961' : '#373737'}}>Projects</a>
                            </Link>
                        </li>
                        <li onClick={() => {setShowHamburger(prev => !prev); setSlideMenu(prev => !prev)}}>
                            <Link href='#contactMe'>
                                <a style={{color: contactMeIsVisible ? '#7550FD' : '#373737'}}>Contact me</a>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
