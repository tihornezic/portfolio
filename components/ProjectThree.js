import Link from 'next/link'
import Image from 'next/image'
import mikespizza from '../img/mikespizza.png'
import react from '../img/react.svg'
import redux from '../img/redux.svg'
import reduxsaga from '../img/reduxsaga.svg'
import firebase from '../img/firebase.svg'
import firestore from '../img/firestore.svg'
import mui from '../img/mui.svg'
import sass from '../img/sass.svg'
import github from '../img/github.svg'
import stripe from '../img/stripe.svg'
import projectThreeStyles from '../styles/ProjectThree.module.css'

const ProjectThree = () => {
    return (
        <div id='projectThree' className={`${'container'} ${projectThreeStyles.projectThree}`}>
            <h1>Mike's Pizza</h1>

            <div className={projectThreeStyles.row}>
                <div className={projectThreeStyles.left}>
                    <p>
                        An eCommerce web app for ordering pizzas. Choose your favorite pizza, size and decide upon various extras to customize your order. Confirm your order by entering address and credit card info.
                    </p>

                    <p>
                        Pizza data are fetched from the mock&nbsp;
                        <Link href='https://github.com/tihornezic/pizza-api' >
                            <a target='_blank'>pizza-api</a>
                        </Link>
                        &nbsp;that I built.
                    </p>

                    <p>
                        Project specifics: Redux (saga), Firebase Cloud Functions, Stripe payments
                    </p>

                    <div className={projectThreeStyles.iconsRow}>
                        <div className={projectThreeStyles.iconItem}>
                            <Link href='https://reactjs.org/'>
                                <a target='_blank'>
                                    <Image src={react} alt='react' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectThreeStyles.iconItem}>
                            <Link href='https://redux.js.org/'>
                                <a target='_blank'>
                                    <Image src={redux} alt='redux' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectThreeStyles.iconItem}>
                            <Link href='https://firebase.google.com/'>
                                <a target='_blank'>
                                    <Image src={firebase} alt='firebase' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectThreeStyles.iconItem}>
                            <Link href='https://redux-saga.js.org/'>
                                <a target='_blank'>
                                    <Image src={reduxsaga} alt='reduxsaga' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectThreeStyles.iconItem}>
                            <Link href='https://sass-lang.com/'>
                                <a target='_blank'>
                                    <Image src={sass} alt='sass' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectThreeStyles.iconItem}>
                            <Link href='https://firebase.google.com/docs/firestore'>
                                <a target='_blank'>
                                    <Image src={firestore} alt='firestore' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectThreeStyles.iconItem}>
                            <Link href='https://material-ui.com/'>
                                <a target='_blank'>
                                    <Image src={mui} alt='mui' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectThreeStyles.iconItem}>
                            <Link href='https://stripe.com/'>
                                <a target='_blank'>
                                    <Image src={stripe} alt='stripe' />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className={projectThreeStyles.buttonsRow}>
                        <div className={projectThreeStyles.button}>
                            <Link href='https://mikes-pizza-c8851.web.app/'>
                                <a target='_blank' className='button buttonGreen'>
                                    <div className={projectThreeStyles.dot}></div>
                                    Live Demo
                                </a>
                            </Link>
                        </div>

                        {<div className={projectThreeStyles.button}>
                            <Link href='https://github.com/tihornezic/mikes-pizza'>
                                <a target='_blank' className='button buttonOrange'>
                                    <Image src={github} alt='github' />
                                    <span>Code</span>
                                </a>
                            </Link>
                        </div>}
                    </div>
                </div>

                <div className={projectThreeStyles.right}>
                    <div className={projectThreeStyles.image}>
                        <Image src={mikespizza} alt='mikespizza' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectThree
