import Image from 'next/image'
import Link from 'next/link'
import rocket from '../img/rocket.svg'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'
import mail from '../img/mail.svg'
import cv from '../img/cv.svg'
import homeStyles from '../styles/Home.module.css'

const Home = () => {
    return (
        <div className='container'>
            <div id='home' className={homeStyles.home}>

                <div className={homeStyles.headings}>
                    <h1>Hi, I am Tihor.</h1>
                    <h1>I am a <span>Frontend</span> Web Dev.</h1>
                    <h2>"Don't act, <span>React</span>!"</h2>

                    <div className={homeStyles.buttonsRow}>
                        <Link href='#'>
                            <p className='button buttonPrimary'>View Projects</p>
                        </Link>

                        <div className={homeStyles.dash}></div>

                        <div className={homeStyles.socialsButtonsRow}>
                            <div>
                                <Link href='#'>
                                    <p className={homeStyles.socialButton}>
                                        <Image src={linkedin} alt='linkedin' />
                                    </p>
                                </Link>
                            </div>

                            <div>
                                <Link href='#'>
                                    <p className={homeStyles.socialButton}>
                                        <Image src={github} alt='github' width='21px' />
                                    </p>
                                </Link>
                            </div>

                            <div>
                                <Link href='#'>
                                    <p className={homeStyles.socialButton}>
                                        <Image src={mail} alt='mail' width='23px' />
                                    </p>
                                </Link>
                            </div>

                            <div>
                                <Link href='#'>
                                    <p className={homeStyles.socialButton}>
                                        <Image src={cv} alt='cv' width='23px' />
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={homeStyles.imageWrapper}>
                    <Image src={rocket} alt='Rocket' className={homeStyles.image} />
                </div>

            </div>
        </div>
    )
}

export default Home
