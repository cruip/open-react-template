'use client'
import { MouseEvent, useEffect, useState, useCallback} from 'react';
import { gapi } from 'gapi-script';
import Link from 'next/link';
import UserProfile from "../../../components/profile";
import { auth } from '../../../firebase-config2'; // Adjust the path if necessary to correctly point to your firebase-config file
import { doc, arrayUnion, updateDoc, collection } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { error } from 'console';
import { useSearchParams, usePathname, useRouter} from 'next/navigation'

export default function SignUp() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()
    const [userEmail, setUserEmail] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams)
          params.set(name, value)
    
          return params.toString()
        },
        [searchParams]
      )

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "370440719371-tp9fe3fj2gi823ii397eutpgnafhqnh2.apps.googleusercontent.com",
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    }, []);

    const handleEmailSignUp = (event: React.MouseEvent) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                const userEmail = user.email;
                setUserEmail(userEmail!);
                // Update user state or redirect
            })
            .catch((error) => {
                // Handle Errors
                const errorMessage = error.message;
                setErrorMessage(errorMessage); // Set the error message
                // Display error message
            });
    };


    const handleSignIn = async (event: React.MouseEvent) => {
        event.preventDefault();

        try {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then((result) => {
                    // Signed in
                    const user = result.user;
                    const userEmail = user.email;
                    setUserEmail(userEmail!);

                    router.push("/web" + '?' + createQueryString('email', userEmail!))

                })
                .catch((error) => {
                    console.log(error)
                });


        } catch (error) {
            console.error('Error during sign in', error);
        }
    };

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">Welcome to TunedIn. Discover Personalized Audio</h1>
                    </div>

                    {/* Form */}
                    <div className="max-w-sm mx-auto">
                        <form>
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                    <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center" onClick={(e) => handleSignIn(e)}>
                                        <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                                        </svg>
                                        <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
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
                         <p className='text-center'>{errorMessage}</p>

                        <form>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Email<span className="text-red-600">*</span></label>
                                    <input
                                        id="full-name"
                                        type="text"
                                        className="form-input w-full text-gray-300"
                                        placeholder="First and last name"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">User Name <span className="text-red-600">*</span></label>
                                    <input
                                        id="company-name"
                                        type="text"
                                        className="form-input w-full text-gray-300"
                                        placeholder="Your UserName"
                                        required
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3">
                                    <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                                    <input
                                        id="password"
                                        type="password"
                                        className="form-input w-full text-gray-300"
                                        placeholder="Password (at least 10 characters)"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="text-sm text-gray-500 text-center">
                                I agree to be contacted by TunedIn about this offer as per the TunedIn <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</Link>.
                            </div>
                            <div className="flex flex-wrap -mx-3 mt-6">
                                <div className="w-full px-3">
                                    <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" onClick={(e) => handleEmailSignUp(e)}>Sign up</button>
                                </div>
                            </div>
                        </form>
                        <div className="text-gray-400 text-center mt-6">
                            Already using TunedIn? <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}