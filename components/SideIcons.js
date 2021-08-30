import Image from 'next/image'
import Link from 'next/link'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'
import mail from '../img/mail.svg'
import cv from '../img/cv.svg'
import sideIconsStyles from '../styles/SideIcons.module.css'

// import FileSaver from 'file-saver'
// import { saveAs } from 'file-saver'
import FileSaver from 'file-saver'

const SideIcons = () => {

    const saveFile = () => {
        FileSaver.saveAs(
            "/resource/pdf.pdf",
            // process.env.REACT_APP_CLIENT_URL + "/documents/pdf.pdf",
            "MyCV.pdf"
        )
    }

    return (
        <div className={sideIconsStyles.sideIcons}>
            <div className={sideIconsStyles.sideIcon}>
                <Link href='https://www.linkedin.com/in/tihor-nezi%C4%87-7666221a5/'>
                    <a target='_blank'>
                        <Image src={linkedin} alt='linkedin' width={20} />
                    </a>
                </Link>
            </div>

            <div className={sideIconsStyles.sideIcon}>
                <Link href='https://github.com/tihornezic'>
                    <a target='_blank'>
                        <Image src={github} alt='github' />
                    </a>
                </Link>
            </div>

            <div className={sideIconsStyles.sideIcon}>
                <Link href='#'>
                    <Image src={mail} alt='mail' />
                </Link>
            </div>


            {/* <a href={require("../path/to/file.pdf")} download="myFile">Download file</a> */}

            <div className={sideIconsStyles.sideIcon}>
                {/* <Link href={require('../public/pdf.pdf')} download='pdf'> */}
                {/* <Link href='#' onClick={saveFile}> */}
                {/* <button onClick={saveFile}> */}
                <Image src={cv} alt='cv' onClick={saveFile} />
                {/* </button> */}
                {/* </Link> */}
            </div>
        </div>
    )
}

export default SideIcons
