import Link from 'next/link'
import Image from 'next/image'
// import pokemonBattleGame from '../img/pokemonBattleGame.jpg'
import pokemonBattleGame from '../img/pokemonBattleGame.png'
import react from '../img/react.svg'
import sass from '../img/sass.svg'
import contextapi from '../img/contextapi.svg'
import github from '../img/github.svg'
import projectOneStyles from '../styles/ProjectOne.module.css'

const ProjectOne = () => {
    return (
        <div id='projectOne' className={`${'container'} ${projectOneStyles.projectOne}`}>
            <h1>Pokemon Battle Game</h1>

            <div className={projectOneStyles.row}>
                <div className={projectOneStyles.left}>
                    <p>
                        A web game which simulates a battle between two randomly fetched Pokemon based on their respective fighting stats. The winner battles another random Pokemon until a Pokemon is victorious twice.
                    </p>

                    <p>
                        {/* All Pokemons are fetched from the <a>pokeapi</a>. */}
                        All Pokemons are fetched from the&nbsp;
                        <Link href='https://pokeapi.co/docs/v2' >
                            <a target='_blank'>pokeapi</a>
                        </Link>.
                    </p>

                    <p>
                        Project specifics: Fetch API, LocalStorage, Context API
                    </p>

                    <div className={projectOneStyles.iconsRow}>
                        <div className={projectOneStyles.iconItem}>
                            <Link href='https://reactjs.org/'>
                                <a target='_blank'>
                                    <Image src={react} alt='react' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectOneStyles.iconItem}>
                            <Link href='https://sass-lang.com/'>
                                <a target='_blank'>
                                    <Image src={sass} alt='sass' />
                                </a>
                            </Link>
                        </div>
                        <div className={projectOneStyles.iconItem}>
                            <Link href='https://reactjs.org/docs/context.html'>
                                <a target='_blank'>
                                    <Image src={contextapi} alt='contextapi' />
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className={projectOneStyles.buttonsRow}>
                        <div className={projectOneStyles.button}>
                            <Link href='https://pokemon-battle-game.netlify.app'>
                                <a target='_blank' className='button buttonBlue'>
                                    <div className={projectOneStyles.dot}></div>
                                    Live Demo
                                </a>
                            </Link>
                        </div>

                        {<div className={projectOneStyles.button}>
                            <Link href='https://github.com/tihornezic/pokemon-game-app'>
                                <a target='_blank' className='button buttonMildGrey'>
                                    <Image src={github} alt='github' />
                                    <span>Code</span>
                                </a>
                            </Link>
                        </div>}
                    </div>
                </div>

                <div className={projectOneStyles.right}>
                    <div className={projectOneStyles.image}>
                        <Image src={pokemonBattleGame} alt='Pokemon Battle Game' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectOne
