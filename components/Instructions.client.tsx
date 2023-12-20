import { db } from '../firebase-config.js'; // Adjust the path if necessary to correctly point to your firebase-config file
import React, { useState, FormEvent } from 'react';
import {doc, arrayUnion, updateDoc, addDoc, collection } from "@firebase/firestore"
import logo3 from '@/public/images/homepage.png';
import Link from 'next/link';
import Image from 'next/image';
export default function Instructions() {
  const scaledWidth = 379 * 0.75; // 50% of original width
  const scaledHeight = 658 * 0.75;
  return (
    <section>
      <style jsx>{`
        /* Common styles for both left and right containers */
        .logo-container {
          text-align: center; /* Center text horizontally */
          color: #fff; /* White text color */
        }

        /* Styles for the container row */
        .container-row {
          display: flex; /* Use flex to arrange items horizontally */
          justify-content: center;
          align-items: center;
          margin-bottom: -200px; /* Negative margin to reduce space between rows */
        }
        .container-row-bottom {
          display: flex; /* Use flex to arrange items horizontally */
          justify-content: center;
          align-items: center;
        }

        /* Styles for left and right alignment with padding */
        .left-align {
          justify-content: flex-start; /* Aligns content to the left */
          padding-left: 550px; /* Padding on the left side */
        }
        .left-align {
          justify-content: flex-center; /* Aligns content to the left */
        }

        .right-align {
          justify-content: flex-end; /* Aligns content to the right */
          padding-right: 550px; /* Padding on the right side */
        }

        .scaled-image {
          transform: scale(0.25); /* Scale the image to 50% of its original size */
        }

      `}</style>

      {/* First row - Left aligned */}
      <h2 className="h2 mb-4 text-center">GET STARTED WITH 3 EASY STEPS</h2>
      <div className="container-row left-align">
        <div className="logo-container">
          <Link href="/" className="block" aria-label="Cruip">
            <Image
              src={logo3}
              alt="Logo"
              width={scaledWidth}
          height={scaledHeight}
              style={{ display: 'block' }}
            />
          </Link>
        </div>
      </div>

      {/* Second row - Right aligned */}
      <div className="container-row right-align">
        <div className="logo-container" >
          <Link href="/" className="block" aria-label="Cruip">
            <Image
              src={logo3}
              alt="Logo"
              width={scaledWidth}
          height={scaledHeight}
              style={{ display: 'block' }}
            />
          </Link>
        </div>
      </div>

      {/* Third row - Left aligned */}
      <div className="container-row-bottom left-align">
        <div className="logo-container">
          <Link href="/" className="block" aria-label="Cruip">
            <Image
              src={logo3}
              alt="Logo"
              width={scaledWidth}
          height={scaledHeight}
              style={{ display: 'block' }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
