import React, { useState } from 'react'
import { Axios, db } from '../../../firebase/firebaseConfig'
import './styled.scss'
import Button from '../../elements/Button';
import ButtonGroup from '../../elements/ButtonGroup';
import { Link } from 'react-router-dom';

const styleObject = {
    "width" : "100%"
}

const ContactForm = () => {
    const [formData, setFormData] = useState({})

    const updateInput = e => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
        setFormData({
        name: '',
        email: '',
        message: '',
        })
    }
    const sendEmail = () => {
        Axios.post(
        'https://us-central1-emails-138ac.cloudfunctions.net/submit',
        formData
        )
        .then(res => {
            db.collection('emails').add({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date(),
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={updateInput}
                value={formData.name || ''}
                />
                <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={updateInput}
                value={formData.email || ''}
                />
                <textarea
                type="text"
                name="message"
                placeholder="Message"
                onChange={updateInput}
                value={formData.message || ''}
                ></textarea>
                <ButtonGroup>
                    
                    <Button tag="a" color="secondary" wideMobile  type="submit" style={styleObject}>Submit</Button>
                    <Link to="./" >
                        <Button tag="a" color="secondary" wideMobile style={styleObject}>Back</Button>
                    </Link>
                </ButtonGroup>
                {/**<Button color="secondary" wideMobile  type="submit">Submit</Button>*/}
            </form>
        </div>
    )
}

export default ContactForm