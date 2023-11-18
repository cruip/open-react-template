
"use client"

import { db } from '../firebase-config.js'; // Adjust the path if necessary to correctly point to your firebase-config file
import React, { useState, FormEvent } from 'react';
import {doc, arrayUnion, updateDoc, addDoc, collection } from "@firebase/firestore"

export default function Hero() {
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };
  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault(); // Prevent the default form submit action
    const ref = collection(db, "subscribers") // Firebase creates this automatically

    const docRef = doc(db, "subscribers", "subscribers");
    const emailToAdd = email; 

    updateDoc(docRef, {
      emails: arrayUnion(emailToAdd)
    }).then(() => {
      console.log("Submitted email to Firestore: ", emailToAdd);
    }).catch((error) => {
      console.error("Error adding email to Firestore: ", error);
    });
  }
  return (

    <section>
      <style jsx>{`
        .bg-purple-500::placeholder {
          color: #564D4B; /* Replace 'darkgrey' with the hex code for the shade of dark grey you prefer */
        }
      `}</style>
      <div className="max-w-full mx-auto px-4 sm:px-6 relative" data-aos="fade-up">
        
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-0">

          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4 text-purple-500 text-8xl" data-aos="fade-up">TunedIn</h1>
            <p className="text-2xl text-gray-400 mb-8 text-purple-200" data-aos="fade-up" data-aos-delay="200">Welcome to TunedIn! Discover personalized podcasts that cater to your unique interests, making every episode a captivating journey just for you.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <form data-aos="fade-up" data-aos-delay="400" action="#0" method="post" className="w-full mb-4 sm:w-auto sm:mb-0" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter your email" required className="text-black bg-white-200 hover:bg-purple-500 w-full sm:w-auto" onChange={handleEmailChange} value={email}/>
                <button type="submit" className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4">Submit</button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
