import Link from 'next/link'
import Image from 'next/image'
import moviesapp from '../img/moviesapp.png'
import react from '../img/react.svg'
import firebase from '../img/firebase.svg'
import firestore from '../img/firestore.svg'
import mui from '../img/mui.svg'
import sass from '../img/sass.svg'
import contextapi from '../img/contextapi.svg'
import github from '../img/github.svg'
import projectTwoStyles from '../styles/ProjectTwo.module.css'

const ProjectTwo = () => {
    return (
        <div id='projectTwo' className={`${'container'} ${projectTwoStyles.projectTwo}`}>
            <h1>MoviesApp</h1>

            <div className={projectTwoStyles.row}>
                <div className={projectTwoStyles.left}>
                    <p>
                        A web app for searching and displaying info about movies and TV shows. Find out more about your favorite movies, TV shows, actors, and directors. Sign up and add movies and/or TV shows to watchlist and watchedlist.
                    </p>

                    <p>
                        All data are fetched from the&nbsp;
                        <Link href='https://www.themoviedb.org/documentation/api' >
                            <a target='_blank'>TMDB API</a>
                        </Link>.
                    </p>

                    <p>
                        Project specifics: Axios, Context API, Firebase
                    </p>

                    <div className={projectTwoStyles.iconsRow}>
                        <div className={projectTwoStyles.iconItem}>
                            <Link href='https://reactjs.org/'>
                                <a target='_blank'>
                                    <Image src={react} alt='react' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectTwoStyles.iconItem}>
                            <Link href='https://firebase.google.com/'>
                                <a target='_blank'>
                                    <Image src={firebase} alt='firebase' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectTwoStyles.iconItem}>
                            <Link href='https://sass-lang.com/'>
                                <a target='_blank'>
                                    <Image src={sass} alt='sass' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectTwoStyles.iconItem}>
                            <Link href='https://reactjs.org/docs/context.html'>
                                <a target='_blank'>
                                    <Image src={contextapi} alt='contextapi' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectTwoStyles.iconItem}>
                            <Link href='https://firebase.google.com/docs/firestore'>
                                <a target='_blank'>
                                    <Image src={firestore} alt='firestore' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectTwoStyles.iconItem}>
                            <Link href='https://material-ui.com/'>
                                <a target='_blank'>
                                    <Image src={mui} alt='mui' />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className={projectTwoStyles.buttonsRow}>
                        <div className={projectTwoStyles.button}>
                            <Link href='https://movies-app-56a22.web.app/'>
                                <a target='_blank' className='button buttonPink'>
                                    <div className={projectTwoStyles.dot}></div>
                                    Live Demo
                                </a>
                            </Link>
                        </div>

                        {<div className={projectTwoStyles.button}>
                            <Link href='https://github.com/tihornezic/movies-app'>
                                <a target='_blank' className='button buttonStrongGrey'>
                                    <Image src={github} alt='github' />
                                    <span>Code</span>
                                </a>
                            </Link>
                        </div>}
                    </div>
                </div>

                <div className={projectTwoStyles.right}>
                    <div className={projectTwoStyles.image}>
                        <Image src={moviesapp} alt='MoviesApp' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTwo
