import React, { useState } from 'react';
import { doc, arrayUnion, updateDoc, collection } from "@firebase/firestore";
import { db } from '../firebase-config'; // Adjust the path if necessary to correctly point to your firebase-config file
import logo3 from '@/public/images/homepage.png';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const ref = collection(db, "subscribers");

    const docRef = doc(db, "subscribers", "subscribers");
    const emailToAdd = email;

    updateDoc(docRef, {
      emails: arrayUnion(emailToAdd)
    }).then(() => {
      console.log("Submitted email to Firestore: ", emailToAdd);
      setShowSuccessMessage(true); // Show success message on successful submission
      setEmail(''); // Clear the input field
    }).catch((error) => {
      console.error("Error adding email to Firestore: ", error);
    });
  }

  // Function to close the success message
  const handleCloseSuccessMessage = () => {
    console.log("showing modal")
    setShowSuccessMessage(false);
  }

  return (
    <section>
      <style jsx>{`
        .bg-purple-500::placeholder {
          color: #564D4B;
        }
        .image-container {
          filter: drop-shadow(0 0 10px rgba(238, 232, 170, 0.5));
        }
        .image-container:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="flex max-w-full mx-auto px-4 sm:px-6 relative">

        <div className="flex-1" data-aos="fade-right">
          <div className="relative pt-32 pb-10 md:pt-40 md:pb-0">
            <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4 text-purple-500 text-8xl">TunedIn</h1>
              <p className="text-2xl text-gray-400 mb-8 text-purple-200" data-aos-delay="200">
                Welcome to TunedIn! Discover personalized podcasts that cater to your unique interests, making every episode a captivating journey just for you. Sign up for a free trial below!
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <form data-aos="fade-up" data-aos-delay="400" action="#0" method="post" className="w-full mb-4 sm:w-auto sm:mb-0" onSubmit={handleSubmit}>
                  <input type="email" name="email" placeholder="Enter your email" required className="text-black bg-white-200 w-full sm:w-auto" onChange={handleEmailChange} value={email} />
                  <button type="submit" className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Success Message Modal */}
        {showSuccessMessage && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl transition duration-500 ease-in-out transform scale-105">
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-4">Success!</h3>
              <p className="text-sm text-gray-600 text-center mb-6">Your email has been successfully submitted. Thank you for signing up!</p>
              <div className="flex justify-center">
                <button onClick={handleCloseSuccessMessage} className="inline-flex items-center px-4 py-2 bg-purple-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-purple-800 focus:outline-none focus:border-purple-900 focus:ring focus:ring-purple-300 disabled:opacity-25 transition ease-in-out duration-150">Close</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
