'use client'
import dynamic from 'next/dynamic';
import { UserProvider } from '../../contexts/UserContext';

  export default function Experiment() {
    const SignUpWithNoSSR = dynamic(
      () => import('./Signup.client'), // replace './SignUp' with the path to your SignUp component
      { ssr: false }
    );
    
    return (
      <section>
      {/* Other content */}
      <UserProvider>
        <SignUpWithNoSSR />

      </UserProvider>
      {/* Other content */}
    </section>
      )
  }