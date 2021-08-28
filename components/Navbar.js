import Link from 'next/link'
import Image from 'next/image'
import logo from '../img/logo.svg'
import navbarStyles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()

    console.log(router.pathname)

    return (
        <div className='container'>
            <nav className={navbarStyles.nav}>
                <ul>
                    <li>
                        <Link href='/'>
                            <Image src={logo} alt='Tihor Nezić logo' className={navbarStyles.img} />
                        </Link>
                    </li>
                    <div className={navbarStyles.links}>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                        <li>
                            <Link href='#'>Projects</Link>
                        </li>
                        <li>
                            <Link href='#'>Contact me</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
