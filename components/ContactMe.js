import {useState} from 'react'
import CloseIcon from '@material-ui/icons/Close'
import contactMeStyles from '../styles/ContactMe.module.css'

const ContactMe = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const [info, setInfo] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        // console.log('Sending')

        let data = {
            name,
            email,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            // console.log('Response received')
            if (res.status === 200) {
                // console.log('Response succeeded!')
                setSubmitted(true)
                e.target.reset()
                setInfo(true)
                setName('')
                setEmail('')
                setMessage('')
            }
        })
    }

    return (
        <div id='contactMe' className={contactMeStyles.contactMe}>
            <h1>Contact me</h1>

            <form className={contactMeStyles.formWrapper} onSubmit={handleSubmit}>
                {info ?
                    <div className={contactMeStyles.info}>
                        <CloseIcon onClick={() => setInfo(false)} />
                        Thank you for reaching out to me! I will get back to you as soon as possible!
                    </div>
                    : null
                }

                <div className={contactMeStyles.inputRow}>
                    <div className={contactMeStyles.input} style={{marginRight: '15px'}}>
                        <label htmlFor='name'>Your Name*</label>
                        <input type='text' name='name' onChange={(e) => {setName(e.target.value)}} required></input>
                    </div>

                    <div className={contactMeStyles.input}>
                        <label htmlFor='email'>Your Email*</label>
                        <input type='email' name='email' onChange={(e) => {setEmail(e.target.value)}} required></input>
                    </div>
                </div>

                <div className={contactMeStyles.message}>
                    <div>
                        <label htmlFor='message'>Your Message</label>
                        <textarea name='message' onChange={(e) => {setMessage(e.target.value)}}></textarea>
                    </div>
                </div>

                <button type='submit' className='button buttonPrimary formButton'>Send</button>
            </form>
        </div>
    )
}

export default ContactMe
