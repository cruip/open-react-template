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
          className="relative bg-teal-600 py-10 px-8 md:py-16 md:px-12"
          data-aos="fade-up"
        >
          <div className="relative flex flex-col lg:flex-col justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Schedule a chat</h3>
              <p className="text-white text-lg">
                Provide your email to get a link to my availability.
              </p>
            </div>

            <Calendly />

            {/* CTA form */}
            {/* <form
              action={(formData: SendMeetRequestFormData) => sendMeetRequest(formData)}
              id="meet-request-form"
              className="w-full lg:w-1/2 space-y-2"
            >
              <div className="flex flex-col sm:flex-col justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none pb-3">
                <label className="pb-1" aria-labelledby="name">
                  Full Name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="w-full appearance-none bg-teal-700 border border-teal-500 focus:border-teal-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-white"
                  placeholder="i.e. John Smith"
                  aria-label="Please enter you name."
                />
              </div>
              <div className="flex flex-col sm:flex-col justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none pb-3">
                <label className="pb-1" aria-labelledby="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full appearance-none bg-teal-700 border border-teal-500 focus:border-teal-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-white"
                  placeholder="Your best email…"
                  aria-label="Your best email…"
                />
              </div>
              <div className="flex flex-col sm:flex-col justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none pb-3">
                <label className="pb-1" aria-labelledby="message">
                  Message
                </label>
                <textarea
                  aria-label="Tell me a little about you..."
                  placeholder="Tell me a little about you..."
                  name="message"
                  id="message"
                  className="w-full appearance-none bg-teal-700 border border-teal-500 focus:border-teal-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-white"
                ></textarea>
              </div>
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <button
                  id="request-chat-schedule"
                  className="g-recaptcha btn text-teal-800 bg-purple-100 hover:bg-white shadow"
                  data-sitekey="6Lf98IsnAAAAAE9MdltVb2I45_QsJKj4Z8ZHoGyF"
                  data-callback="onSubmit"
                  data-action="submit"
                  type="submit"
                >
                  Send
                </button>
              </div>
              {/* Success message */}
            {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks, I'll respond shortly.</p> */}
            {/* </form> */}
          </div>
        </div>
      </div>
    </section>
  );
}
