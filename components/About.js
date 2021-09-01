import Link from 'next/link'
import aboutStyles from '../styles/About.module.css'
import FileSaver from 'file-saver'

const About = () => {
    const saveFile = () => {
        FileSaver.saveAs(
            "/resource/pdf.pdf",
            // process.env.REACT_APP_CLIENT_URL + "/documents/pdf.pdf",
            "CV-Tihor-Nezić.pdf"
        )
    }

    return (
        <div id='about' className={aboutStyles.about}>
            <div className={aboutStyles.wrapper}>
                <h1>About</h1>

                <p>Framework I use to turn ideas into real projects is <span>React.js</span>.</p>

                <p>
                    With prior experience in <span>UX/UI design</span>,<br></br>
                        I pay attention to details, as well as commit to deliver all functionalities required, evolving and learning in the process.
                </p>

                <p>
                    Technical skills I possess: <span>HTML5</span>, <span>CSS3</span>, <span>Sass</span>, <span>JavaScript (ES6+)</span>, <span>React.js</span>, <span>Redux</span>, <span>Firebase</span>, <span>Material-UI</span>, <span>Git</span>, <span>GitHub</span>, <span>Adobe XD</span>, and most recently <span>Next.js</span>.
                </p>

                <p>
                    As I progress in my career, my plan is to work on mobile apps as well, using <span>React Native</span>.
                </p>

                <p>To learn more about me, click on the button below to download my resume.</p>

                <div className={aboutStyles.button} passHref>
                    <Link href='#'>
                        <p className='button buttonPrimary' onClick={saveFile}>Download CV</p>
                    </Link>
                </div>
            </div>

           <div className={`${'container'} ${aboutStyles.responsiveWrapper}`}>
                <h1>About</h1>

                <p>Framework I use to turn ideas into real projects is <span>React.js</span>.</p>

                <p>
                    With prior experience in <span>UX/UI design</span>,<br></br>
                        I pay attention to details, as well as commit to deliver all functionalities required, evolving and learning in the process.
                </p>

                <p>
                    Technical skills I possess: <span>HTML5</span>, <span>CSS3</span>, <span>Sass</span>, <span>JavaScript (ES6+)</span>, <span>React.js</span>, <span>Redux</span>, <span>Firebase</span>, <span>Material-UI</span>, <span>Git</span>, <span>GitHub</span>, <span>Adobe XD</span>, and most recently <span>Next.js</span>.
                </p>

                <p>
                    As I progress in my career, my plan is to work on mobile apps as well, using <span>React Native</span>.
                </p>

                <p>To learn more about me, click on the button below to download my resume.</p>

                <div className={aboutStyles.button}>
                    <Link href='#' passHref>
                        <p className='button buttonPrimary' onClick={saveFile}>Download CV</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About
