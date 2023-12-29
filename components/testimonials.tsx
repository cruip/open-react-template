import Image from 'next/image'

import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

// project image
import Project1 from "../public/images/proyekt1.jpg"
import Project2 from "../public/images/proyekt2.jpg"
import Project3 from "../public/images/proyekt3.jpg"
import Project4 from "../public/images/proyekt4.jpg"
import Project5 from "../public/images/proyekt5.jpg"
import Project6 from "../public/images/proyekt6.jpg"

export default function Testimonials() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Bizning yakunlangan loyihalarimiz</h2>
                        <p className="text-xl text-gray-400">Alliance - Sifatli va hamyonbop , eng asosiysi Ishonchli !</p>
                    </div>

                    {/* Testimonials */}
                    <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

                        {/* 1st testimonial */}
                        <div className="flex flex-col h-full p-2 bg-gray-800" data-aos="fade-up"
                             style={{borderRadius: "15px"}}>
                            <Image src={Project1} alt="Project one"
                                   style={{borderRadius: "10px", objectFit: "cover", width: "100%", height: "100%"}}/>
                        </div>

                        {/* 2nd testimonial */}
                        <div className="flex flex-col h-full p-2 bg-gray-800" data-aos="fade-up"
                             style={{borderRadius: "15px"}}>
                            <Image src={Project2} alt="Project two"
                                   style={{borderRadius: "10px", objectFit: "cover", width: "100%", height: "100%"}}/>
                        </div>

                        {/* 3rd testimonial */}
                        <div className="flex flex-col h-full p-2 bg-gray-800" data-aos="fade-up"
                             style={{borderRadius: "15px"}}>
                            <Image src={Project3} alt="Project three"
                                   style={{borderRadius: "10px", objectFit: "cover", width: "100%", height: "100%"}}/>
                        </div>

                        {/* 4rd testimonial */}
                        <div className="flex flex-col h-full p-2 bg-gray-800" data-aos="fade-up"
                             style={{borderRadius: "15px"}}>
                            <Image src={Project4} alt="Project four"
                                   style={{borderRadius: "10px", objectFit: "cover", width: "100%", height: "100%"}}/>
                        </div>

                        {/* 5rd testimonial */}
                        <div className="flex flex-col h-full p-2 bg-gray-800" data-aos="fade-up"
                             style={{borderRadius: "15px"}}>
                            <Image src={Project5} alt="Project five"
                                   style={{borderRadius: "10px", objectFit: "cover", width: "100%", height: "100%"}}/>
                        </div>

                        {/* 6rd testimonial */}
                        <div className="flex flex-col h-full p-2 bg-gray-800" data-aos="fade-up"
                             style={{borderRadius: "15px"}}>
                            <Image src={Project6} alt="Project six"
                                   style={{borderRadius: "10px", objectFit: "cover", width: "100%", height: "100%"}}/>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
