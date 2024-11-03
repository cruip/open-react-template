import Image from "next/image";
import Andrew from "@/public/images/Andrew.jpeg";


export default function About() {
    return (
        <section className="relative overflow-hidden">
            <div className="max-w6xl mx-auto px-4 sm:px-6">
                <div className="bg-gradient-to-r from-transparent">
                    <div className="mx-auto max-w-3xl text-center">
                        <br>
                        </br>
                        <a
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                            data-aos="fade-up"
                        >

                            Learn More About LoveSecTech:
                        </a>
                        <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                            <div data-aos="fade-up" data-aos-delay={400}>
                                <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-xl font-semibold text-transparent md:text-xl"
                                   data-aos="fade-up">
                                    Meet Andrew Love - Founder LoveSecTech:
                                </p>
                                <br>
                                </br>
                                <Image
                                    style={{display: 'block', margin: '0 auto'}}
                                    src={Andrew}
                                    width={200}
                                    height={200}
                                    alt="Andrew"
                                ></Image>
                                <br>
                                </br>
                                <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-xl font-semibold text-transparent md:text-xl"
                                   data-aos="fade-up">
                                    At LoveSecTech, we believe that true peace of mind comes from knowing that your
                                    digital assets are safeguarded by experts who care. Founded with a passion for
                                    cybersecurity and a dedication to client satisfaction, our mission is simple yet
                                    profound: to wrap a blanket of cybersecurity comfort around all of our clients while
                                    maintaining affordability and effectiveness.
                                    <br>
                                    </br>
                                    <br>
                                    </br>

                                    LoveSecTech was founded as a dream of Andrew's — to provide top-tier managed cybersecurity
                                    services at a reasonable price. Under the guidance of his father, Eric, also a
                                    business owner, Andrew was able to form LoveSecTech in 2024. He understands that IT
                                    and cybersecurity managed services can be extremely expensive. Andrew wants to help
                                    you, at a price you can afford.
                                    <br>
                                    </br>
                                    <br>
                                    </br>

                                    Andrew has 10 working years in the IT and cybersecurity world. Starting at 16 years
                                    old, he took on his first IT project — recabling and mapping an entire office building
                                    to prepare for a SIP project. He also had exposure to programming and engineering
                                    through various engineering classes and robotics in high school. Andrew then went to
                                    college and obtained a Bachelor of Science in Cybersecurity from Kennesaw State
                                    University; the top cybersecurity program in the nation. This prepared Andrew for
                                    the cybersecurity world ahead by covering the broad spectrum of various
                                    cybersecurity subjects. Now in the real world, Andrew has gained experience
                                    understanding the needs of small to medium-sized businesses and how to best meet
                                    their requirements.

                                    <br>
                                    </br>
                                    <br>
                                    </br>

                                    We specialize in a broad spectrum of services, including red teaming, penetration
                                    testing, phishing campaigns, wireless penetration testing, and cybersecurity
                                    monitoring. Our team also excels in managed IT services, server deployments, and
                                    network management—covering everything from configuring robust server
                                    infrastructures to ensuring seamless network operations. Whether it’s deploying
                                    complex network equipment or conducting thorough security audits, we bring advanced
                                    expertise and a client-focused approach to each project.

                                    <br>
                                    </br>
                                    <br>
                                    </br>

                                    Right now, we are focused on small-sized businesses, up to 100 employees, as Andrew
                                    is the only employee starting out.

                                    <br>
                                    </br>
                                    <br>
                                    </br>

                                    At LoveSecTech, we’re more than just a service provider; we’re a partner in your
                                    security and IT journey. We take pride in our commitment to innovation, reliability, and
                                    trust, tailoring our solutions to meet the unique needs of each client. LoveSecTech
                                    holds quality service at its core. If our clients aren't happy, we aren't happy. We
                                    take an above and beyond approach to ensure the happiness of our clients. We aren't
                                    in the business of ripping people off. Our love (pun intended) for technology is what drives us to
                                    help others where we can.

                                    <br>
                                    </br>
                                    <br>
                                    </br>

                                    With our expert team and comprehensive service offerings, you can rest assured that
                                    your organization’s security and IT needs are in capable hands. Reach out via email at
                                    andrew@lovesec.tech or for secure communication, on Signal at <strong>lovesectech.60.</strong>
                                </p>


                            </div>
                            <div data-aos="fade-up" data-aos-delay={600}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
