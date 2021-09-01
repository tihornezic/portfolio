import Image from 'next/image'
import Link from 'next/link'
import rocket from '../img/rocket.svg'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'
import mail from '../img/mail.svg'
import cv from '../img/cv.svg'
import homeStyles from '../styles/Home.module.css'
import FileSaver from 'file-saver'

const Home = () => {
    const saveFile = () => {
        FileSaver.saveAs(
            "/resource/pdf.pdf",
            // process.env.REACT_APP_CLIENT_URL + "/documents/pdf.pdf",
            "CV-Tihor-Nezić.pdf"
        )
    }

    return (
        <div className='container'>
            <div id='home' className={homeStyles.home}>

                <div className={homeStyles.headings}>
                    <h1>Hi, I am Tihor.</h1>
                    <h1>I am a <span>Frontend</span> Web Dev.</h1>
                    <h2>&quot;Don&rsquo;t act, <span>React</span>!&quot;</h2>

                    <div className={homeStyles.buttonsRow}>
                        <Link href='#projectOne' passHref>
                            <p className='button buttonPrimary margin-sm'>View Projects</p>
                        </Link>

                        <div className={homeStyles.dash}></div>

                        <div className={homeStyles.socialsButtonsRow}>
                            <div>
                                <Link href='https://www.linkedin.com/in/tihor-nezi%C4%87-7666221a5/' passHref>
                                    <a target='_blank'>
                                        <p className={homeStyles.socialButton}>
                                            <Image src={linkedin} alt='linkedin' />
                                        </p>
                                    </a>
                                </Link>
                            </div>

                            <div>
                                <Link href='https://github.com/tihornezic' passHref>
                                    <a target='_blank'>
                                        <p className={homeStyles.socialButton}>
                                            <Image src={github} alt='github' width='21px' />
                                        </p>
                                    </a>
                                </Link>
                            </div>

                            <div>
                                <Link href='#contactMe' passHref>
                                    <p className={homeStyles.socialButton}>
                                        <Image src={mail} alt='mail' width='23px' />
                                    </p>
                                </Link>
                            </div>

                            <div>
                                <p className={homeStyles.socialButton} onClick={saveFile}>
                                    <Image src={cv} alt='cv' width='23px' />
                                </p>
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
