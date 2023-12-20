

import { db } from '../firebase-config.js'; // Adjust the path if necessary to correctly point to your firebase-config file
import React, { useState, FormEvent } from 'react';
import {doc, arrayUnion, updateDoc, addDoc, collection } from "@firebase/firestore"
import logo3 from '@/public/images/homepage.png';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };
  const scaledWidth = 379 * 1.04; // 50% of original width
  const scaledHeight = 658 * 1.04;
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
        color: #564D4B;
      }
      .image-container {
        filter: drop-shadow(0 0 10px rgba(238, 232, 170, 0.5)); /* Adjust the color and intensity as needed */
      }
      .image-container:hover {
        transform: scale(1.05);
      }
    `}</style>

    {/* Flex container for content and logo */}
    <div className="flex max-w-full mx-auto px-4 sm:px-6 relative">

      {/* Left side - Content */}
      <div className="flex-1" data-aos="fade-right">
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-0">
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4 text-purple-500 text-8xl">TunedIn</h1>
            <p className="text-2xl text-gray-400 mb-8 text-purple-200" data-aos-delay="200">
              Welcome to TunedIn! Discover personalized podcasts that cater to your unique interests, making every episode a captivating journey just for you. Sign up for a free trial at the link below
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <form data-aos="fade-up" data-aos-delay="400" action="#0" method="post" className="w-full mb-4 sm:w-auto sm:mb-0" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter your email" required className="text-black bg-white-200 hover:bg-purple-500 w-full sm:w-auto" onChange={handleEmailChange} value={email}/>
                <button type="submit" className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Logo */}
      {/* <div className="mt-8 mr-72 image-container" data-aos="fade-left" data-aos-delay="600">
        <Link href="/" className="block" aria-label="Cruip">
          <Image 
            src={logo3} 
            alt="Logo" 
            width={scaledWidth}
          height={scaledHeight}
            style={{ display: 'block' }}
          />
        </Link>
      </div> */}

    </div>
  </section>
  )
}
