import Image from 'next/image'

import FeatImage01 from '../files/communation/1.jpg'
import FeatImage02 from '../files/communation/2.jpg'
import FeatImage03 from '../files/communation/3.jpg'

export default function Zigzag() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">Alliance Jamoasi Xizmatingizda</h1>
                        <p className="text-xl text-gray-400">Bizda hamma xizmatlar sifatli , tezkor va ishonchli .
                            Hozirgi kunda 600 dan ortiq mijozlar xizmatlarimizdan mamnun.</p>
                    </div>

                    {/* Items */}
                    <div className="grid gap-20">

                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540}
                                       height={405} alt="Features 01"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <h3 className="h3 mb-3">Istalgan obyektlarga quyosh elektrostansiyasini o'rnatish -
                                        biz bilan yanada osonlashadi!</h3>
                                    <p className="text-xl text-gray-400 mb-4">Chunki, "Alliance" jamoasi faqatgina
                                        professional mutaxassislardan tashkil topgan. Biz har bir buyurtmaga individual
                                        tarzda yondashamiz va jarayon ideal darajada bo'lishiga intilamiz.</p>
                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540}
                                       height={405} alt="Features 02"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-left">
                                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                    <h3 className="h3 mb-3">Quyosh energiyasining uzoq muddatli ishlashi bizning
                                        majburiyatimizdir!</h3>
                                    <p className="text-xl text-gray-400 mb-4">Quyosh panellari uchun kafolat: Biz
                                        sizning tizimingizning ishonchliligi va yaxshi ishlashini ta'minlaymiz. Barcha
                                        quyosh panellarimiz uchun 20-25 yilga kafolat bilan beriladi. Bu sizga ko'p
                                        yillar davomida doimiy energiya mavjudligini anglatadi.</p>
                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div
                                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                                data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540}
                                       height={405} alt="Features 03"/>
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                                 data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <h3 className="h3 mb-3">Alliance bilan siz nafaqat ishonchli quyosh panellariga ega
                                        bo'lasiz, balki kelgusi yillar davomida xotirjamlikka ham ega bo'lasiz.</h3>
                                    <p className="text-xl text-gray-400 mb-4">Inventer kafolati: Biz mahsulotlarimizni
                                        tizimini kelajakda ishonchliligi haqida ham qayg'uramiz. Barcha invertorlar 3
                                        yillik kafolat bilan ta'minlanadi, bu quyosh batareyasini uzluksiz ishlash va
                                        maksimal samaradorligini ta'minlaydi.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
