import React from 'react';
import ContactForm from '../components/sections/contact/index';
import logo from '../assets/images/Meridity-Logo-Web-TextFree.svg';
import classNames from 'classnames';

const Contact = () => {
    const outerClasses = classNames(
        'center-content',
    );

    return (
        <div className={outerClasses} style={{display: 'grid', justifyContent: 'center', padding: 50 }}>
            {/**need to hide logo on mobile */}
            <img src={logo} className="App-logo" alt="logo" height='300px' width='300px' />
            <ContactForm/>
        </div>
    );
}

export default Contact;