import Image from 'next/image'
import Link from 'next/link'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'
import mail from '../img/mail.svg'
import cv from '../img/cv.svg'
import sideIconsStyles from '../styles/SideIcons.module.css'
import FileSaver from 'file-saver'

const SideIcons = ({projectOneIsVisible, projectTwoIsVisible, projectThreeIsVisible}) => {
    const saveFile = () => {
        FileSaver.saveAs(
            "/resource/Tihor-Nezić-CV.pdf",
            // process.env.REACT_APP_CLIENT_URL + "/documents/pdf.pdf",
            "Tihor-Nezić-CV"
        )
    }

    return (
        <div className={sideIconsStyles.sideIcons}>

            <Link href='https://www.linkedin.com/in/tihor-nezi%C4%87-7666221a5/'>
                <a target='_blank'>
                    <div
                        className=
                        {projectOneIsVisible ? `${sideIconsStyles.sideIcon} ${sideIconsStyles.projectOne}` :
                            projectTwoIsVisible ? `${sideIconsStyles.sideIcon} ${sideIconsStyles.projectTwo}` :
                                projectThreeIsVisible ? `${sideIconsStyles.sideIcon} ${sideIconsStyles.projectThree}` :
                                    sideIconsStyles.sideIcon}
                    >
                        <Image src={linkedin} alt='linkedin' width={20} />
                    </div>
                </a>
            </Link>

            <Link href='https://github.com/tihornezic'>
                <a target='_blank'>
                    <div
                        className=
                        {projectOneIsVisible ? `${sideIconsStyles.sideIcon} ${sideIconsStyles.projectOne}` :
                            projectTwoIsVisible ? `${sideIconsStyles.sideIcon} ${sideIconsStyles.projectTwo}` :
                                projectThreeIsVisible ? `${sideIconsStyles.sideIcon} ${sideIconsStyles.projectThree}` :
                                    sideIconsStyles.sideIcon}
                    >
                        <Image src={github} alt='github' />
                    </div>
                </a>
            </Link>

            <Link href='#contactMe'>
                <a>
                    <div
                        className=
                        {projectOneIsVisible ? `${sideIconsStyles.sideIcon} ${sideIconsStyles.projectOne}` :
                            projectTwoIsVisible ? `${sideIconsStyles.sideIcon} ${sideIconsStyles.projectTwo}` :
                                projectThreeIsVisible ? `${sideIconsStyles.sideIcon} ${sideIconsStyles.projectThree}` :
                                    sideIconsStyles.sideIcon}
                    >
                        <Image src={mail} alt='mail' />
                    </div>
                </a>
            </Link>

            <div
                onClick={saveFile}
                className=
                {projectOneIsVisible ? `${sideIconsStyles.sideIcon} ${sideIconsStyles.projectOne}` :
                    projectTwoIsVisible ? `${sideIconsStyles.sideIcon} ${sideIconsStyles.projectTwo}` :
                        projectThreeIsVisible ? `${sideIconsStyles.sideIcon} ${sideIconsStyles.projectThree}` :
                            sideIconsStyles.sideIcon}
            >
                <Image src={cv} alt='cv' />
            </div>
        </div >
    )
}

export default SideIcons
