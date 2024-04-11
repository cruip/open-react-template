"use client";

// metadata not supported with use client
// export const metadata = {
//   title: 'Sign Up - Open PRO',
//   description: 'Page description',
// }

import {createUserInDb} from "@/app/services/firestore/userDataAccess";
import {createOrUpdateBrevoContact} from "@/app/services/brevo/brevo";
import {auth} from "@/utils/firebase";
import {User, createUserWithEmailAndPassword} from "firebase/auth";
import {User as UserDb} from "../../types/UserDataModels";
import Link from "next/link";
import {useState, useEffect} from "react";
import {useSearchParams} from "next/navigation";

export default function SignUp() {
  const [paymentLink, setPaymentLink] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const link = params.get('paymentLink');
    if (link) {
      setPaymentLink(link);
    }
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isSubscribed: false,
    properties: [],
  });

  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const listIds = [
    4, // List ID for the "Main" list
    7, // List ID for the "Website" list
  ];

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const {name, value, type, checked} = e.target;
    if (type === "checkbox" && name === "newsletter") {
      setIsNewsletterSubscribed(checked);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      const newUser: UserDb = {
        userId: userCredential.user.uid,
        email: userCredential.user.email || '', // If email is null, assign an empty string
        properties: [],
        isSubscribed: false,
      };
      await createUserInDb(newUser); // Pass the newUser object to the createUser function

      const listIds = [4, 7];
      if (isNewsletterSubscribed) {
        listIds.push(6);
      }
      await createOrUpdateBrevoContact(formData.email, listIds, userCredential.user.uid);
      if (paymentLink) {
        const url = new URL(paymentLink);
        // Get the existing search parameters or create a new URLSearchParams object
        const params = url.searchParams || new URLSearchParams();

        // Add the email parameter
        params.set("prefilled_email", formData.email);

        // Update the search parameters of the URL
        url.search = params.toString();

        // Redirect to the updated URL
        window.location.href = url.toString();
      } else {
        // TODO: Redirect to the dashboard after successful sign-up
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 text-black">
              Simplified <br></br>Real Estate Investing
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 rounded-xl w-full relative flex items-center">
                    <svg
                      className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span
                      className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
                      aria-hidden="true"
                    ></span>
                    <span className="flex-auto pl-16 pr-8 -ml-16">Sign up with Google</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-400">Or, register with your email</div>
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>
            <form onSubmit={handleSubmit}>
              {/* Other input fields omitted for brevity */}
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    className="form-input w-full text-gray-300 rounded-xl"
                    placeholder="First and last name"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input w-full text-gray-300 rounded-xl"
                    placeholder="you@yourcompany.com"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-input w-full text-gray-300 rounded-xl"
                    placeholder="Password (at least 10 characters)"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* Assuming isSubscribed is a checkbox for newsletter subscription, for example */}
              <div className="text-center mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="isSubscribed"
                    className="form-checkbox"
                    onChange={handleChange}
                    checked={formData.isSubscribed}
                  />
                  <span className="ml-2 text-gray-400">Get our real estate market newsletter</span>
                </label>
              </div>
              {error && <div className="text-red-500 text-center mb-4">{error}</div>}
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn text-white bg-emerald-500 hover:bg-emerald-800 w-full ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? "Signing Up..." : "Sign Up"}
                  </button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Already a member?{" "}
              <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
