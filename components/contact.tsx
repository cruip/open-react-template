"use client";

import dynamic from 'next/dynamic'
const Calendly = dynamic(() => import('./calendly'), { ssr: false });

interface SendMeetRequestFormData {
  email: string;
  name: string;
  message: string;
}

export default function Newsletter() {
  //   const sendMeetRequest = async (event: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
  //   const {email, name, message} = event as unknown as SendMeetRequestFormData;
  //   const res = await fetch("/api/contact", {
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       message,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //   });
  //   const result = await res.json();
  //   alert(`${result}`);
  // }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CTA box */}
        <div
          className="relative bg-teal-600 py-10 px-4 md:py-16 md:px-12"
          data-aos="fade-up"
        >
          <div className="relative flex flex-col lg:flex-col justify-between items-left">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-left lg:text-left lg:w-1/2">
              <h1 className="h3 text-white mb-2">Schedule a chat</h1>
            </div>
            <Calendly />
          </div>
        </div>
      </div>
    </section>
  );
}
