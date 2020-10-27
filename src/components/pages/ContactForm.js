import React, { Component } from 'react';
import ContactForm from '../sections/contact/index';
import logo from '../../assets/images/Meridity-Logo-Web-TextFree.svg'

class ContactForm extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <img src={logo} className="App-logo" alt="logo" />
                <ContactForm/>
            </div>
        );
    }
}

export default ContactForm;