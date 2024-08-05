'use client'

import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'
import FormModal from '../components/form'
import { useState } from 'react'

export default function Testimonials() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <section>
            <FormModal isOpen={modalIsOpen} onRequestClose={closeModal} />
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Don't take our word for it</h2>
                        <p className="text-xl text-gray-400">
                            Our clients rave about our innovative solutions and
                            exceptional service. Here’s what they have to say:
                        </p>
                    </div>

                    {/* Testimonials */}
                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
                        {/* 1st testimonial */}
                        <div
                            className="flex flex-col h-full p-6 bg-gray-800"
                            data-aos="fade-up"
                        >
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image
                                        className="rounded-full"
                                        src={TestimonialImage01}
                                        width={48}
                                        height={48}
                                        alt="Testimonial 01"
                                    />
                                    <svg
                                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                                        viewBox="0 0 24 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                                    </svg>
                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                — The mobile app development service was
                                top-notch. It significantly improved our
                                workflow and the user experience is fantastic.
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">
                                    John Doe
                                </cite>{' '}
                                -{' '}
                                <a
                                    className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                                    href="#0"
                                >
                                    CEO, TechCorp
                                </a>
                            </div>
                        </div>

                        {/* 2nd testimonial */}
                        <div
                            className="flex flex-col h-full p-6 bg-gray-800"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image
                                        className="rounded-full"
                                        src={TestimonialImage02}
                                        width={48}
                                        height={48}
                                        alt="Testimonial 02"
                                    />
                                    <svg
                                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                                        viewBox="0 0 24 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                                    </svg>
                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                — Their design team transformed our user
                                interface, making it much more engaging and
                                user-friendly. Highly recommend their services!
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">
                                    Jane Smith
                                </cite>{' '}
                                -{' '}
                                <a
                                    className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                                    href="#0"
                                >
                                    Product Manager, Creative Co.
                                </a>
                            </div>
                        </div>

                        {/* 3rd testimonial */}
                        <div
                            className="flex flex-col h-full p-6 bg-gray-800"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div>
                                <div className="relative inline-flex flex-col mb-4">
                                    <Image
                                        className="rounded-full"
                                        src={TestimonialImage03}
                                        width={48}
                                        height={48}
                                        alt="Testimonial 03"
                                    />
                                    <svg
                                        className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                                        viewBox="0 0 24 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                                    </svg>
                                </div>
                            </div>
                            <blockquote className="text-lg text-gray-400 grow">
                                — The healthcare solutions provided have greatly
                                enhanced our patient management system. The
                                technology is reliable and easy to use.
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                                <cite className="text-gray-200 not-italic">
                                    Michael Lee
                                </cite>{' '}
                                -{' '}
                                <a
                                    className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                                    href="#0"
                                >
                                    Director, HealthNet
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay="400">
                    <a
                        className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 rounded"
                        href="#0"
                    >
                        Start Your Project Today
                    </a>
                </div>
            </div>
            <br />
            <br />
        </section>
    )
}
