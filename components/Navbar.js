import Link from 'next/link'
import Image from 'next/image'
import logo from '../img/logo.svg'
import navbarStyles from '../styles/Navbar.module.css'
import {useRouter} from 'next/router'


const Navbar = ({homeIsVisible, aboutIsVisible, projectOneIsVisible, projectTwoIsVisible, projectThreeIsVisible}) => {
    const router = useRouter()

    console.log(router.asPath)

    return (
        <div className='container'>
            <nav className={navbarStyles.nav}>
                <ul>
                    <li>
                        <Link href='#home'>
                            <Image src={logo} alt='Tihor Nezić logo' className={navbarStyles.img} />
                        </Link>
                    </li>
                    <div className={navbarStyles.links}>
                        <li>
                            <Link href='#home'>
                                {/* <a style={{color: router.pathname === '/' ? '#7550FD' : '#373737'}}>Home</a> */}
                                <a style={{color: homeIsVisible ? '#7550FD' : '#373737'}}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#about'>
                                {/* {aboutIsVisible ?
                                    <a style={{color: router.pathname === '/about' ? '#7550FD' : '#c73232'}}>About</a>
                                    :
                                    <a style={{color: router.pathname === '/about' ? '#7550FD' : '#373737'}}>About</a>
                                } */}
                                <a style={{color: aboutIsVisible ? '#7550FD' : '#373737'}}>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#projectOne'>
                                <a style={{color: projectOneIsVisible ? '#2F6DB5' : projectTwoIsVisible ? '#b460a8' : projectThreeIsVisible ? '#366961' : '#373737'}}>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#projectThree'>Contact me</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
