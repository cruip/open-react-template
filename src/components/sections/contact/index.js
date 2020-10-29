import React, { useState } from 'react'
import { Axios, db } from '../../../firebase/firebaseConfig'
import './styled.scss'
import Button from '../../elements/Button';

function getMessagePlaceholderText(props) {
    if (props.formVersion === 'help') {
        return 'Describe the problem your having.';
    } else {
        return 'What do you need assistance with?';
    }
}

const ContactForm = (props) => {
    const [formData, setFormData] = useState({})
    console.log("**Props**")
    console.log(props);
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

    var messagePlaceholderText = getMessagePlaceholderText(props);

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
                placeholder={messagePlaceholderText} 
                onChange={updateInput}
                value={formData.message || ''}
                ></textarea>                  
                
                <Button tag="a" color="secondary" wideMobile  type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default ContactForm