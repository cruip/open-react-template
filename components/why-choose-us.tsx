import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function WhyChooseUs() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2" aria-hidden="true">
        <Image className="max-w-none" src={BlurredShapeGray} width={760} height={668} alt="Blurred shape" />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image className="max-w-none" src={BlurredShape} width={760} height={668} alt="Blurred shape" />
      </div>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className=" py-12 md:py-20"> 
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-forest-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-forest-200/50">
              <span className="inline-flex bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                About Us
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-3xl font-medium text-transparent md:text-4xl">
              Why Choose Lumunate?
            </h2>
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-2 sm:max-w-none sm:grid-cols-[auto_1px_auto] md:gap-x-12 md:gap-y-16 lg:grid-cols-[auto_1px_auto_1px_auto] bg-[linear-gradient(88.12deg,rgba(43,43,43,0.35)_3.17%,rgba(127,136,126,0.16)_52.41%,rgba(43,43,43,0.35)_94.35%)] py-20 px-8 border-[1px] border-[#374151] rounded-2xl">   
            <article>
              <Image className="mb-2" src={'/images/icons/Frame 2.svg'} width={29} height={29} alt="Web Development and Design" />

              <div className="mb-4">
                <h3 className="font-menda font-semibold text-[1rem] text-gray-200">Agile Development Processes</h3>
                <h4 className="font-raleway font-normal text-[1rem] text-forest-500 mt-1">Speed, flexibility, and innovation</h4>
              </div>
              <p className="text-white/85">
                At Lumunate, we combine innovation with expertise to deliver IT solutions tailored to your unique business needs.
                From responsive web applications to seamless systems integration, we turn ideas into impactful digital
                experiences.
              </p>
            </article>

            <div className="hidden sm:block w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

            <article>
              <Image className="mb-2" src={'/images/icons/workflow.svg'} width={29} height={29} alt="Web Development and Design" />  

              <div className="mb-4">
                <h3 className="font-menda font-semibold text-[1rem] text-gray-200">Flexible Workflow Management</h3>
                <h4 className="font-raleway font-normal text-[1rem] text-forest-500 mt-1">Workflows tailored to your business</h4>
              </div>
              <p className="text-white/85">
                Whether you’re a solopreneur or an enterprise, our solutions streamline your workflows, enabling teams to
                collaborate seamlessly and achieve more in less time.
              </p>
            </article>

            <div className="lg:block sm:hidden w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

            <article>
              <Image className="mb-2" src={'/images/icons/market-analysis.svg'} width={29} height={29} alt="Web Development and Design" />
              <div className="mb-4">
                <h3 className="font-menda font-semibold text-[1rem] text-gray-200">Results-Oriented Approach</h3>
                <h4 className="font-raleway font-normal text-[1rem] text-forest-500 mt-1">Your success is our priority</h4>
              </div>
              <p className="text-white/85">
                At Lumunate, we don’t just build solutions; we deliver measurable results. Our team works with you to understand
                your objectives, ensuring every project aligns with your vision and drives success.
              </p>
            </article>

            <div className="lg:hidden sm:block w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

            <article>
              <Image className="mb-2" src={'/images/icons/network-tree.svg'} width={29} height={29} alt="Web Development and Design" />  

              <div className="mb-4">
                <h3 className="font-menda font-semibold text-[1rem] text-gray-200">End-to-End IT Support</h3>
                <h4 className="font-raleway font-normal text-[1rem] text-forest-500 mt-1">Support at every step.</h4>
              </div>
              <p className="text-white/85">
                From consultation to deployment and beyond, we offer comprehensive IT support to ensure your digital solutions
                perform at their best. We&apos;re with you every step of the way
              </p>
            </article>

            <div className="lg:block sm:hidden w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

            <article>
              <Image className="mb-2" src={'/images/icons/Lock-Cloud.svg'} width={29} height={29} alt="Web Development and Design" />  

              <div className="mb-4">
                <h3 className="font-menda font-semibold text-[1rem] text-gray-200">Enterprise-Grade Cloud Solutions</h3>
                <h4 className="font-raleway font-normal text-[1rem] text-forest-500 mt-1">Innovation in the cloud.</h4>
              </div>
              <p className="text-white/85">
                Accelerate your digital transformation with our secure and scalable cloud services. We build cloud-native
                applications and optimize infrastructure to meet the demands of your business.
              </p>
            </article>

            <div className="hidden sm:block w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

            <article>
              <Image className="mb-2" src={'/images/icons/file-securtiry.svg'} width={29} height={29} alt="Web Development and Design" />  

              <div className="mb-4">
                <h3 className="font-menda font-semibold text-[1rem] text-gray-200">Advanced Data Security</h3>
                <h4 className="font-raleway font-normal text-[1rem] text-forest-500 mt-1">Your data, protected.</h4>
              </div>
              <p className="text-white/85">
                Trust Lumunate to safeguard your sensitive information. We implement robust security protocols and compliance
                standards, ensuring your data is secure in every project we handle.
              </p>
            </article>
          </div>
          <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center font-raleway mt-8">
            <div data-aos="fade-up" data-aos-delay={400}>
              <a
                className="btn group mb-4 w-auto bg-gradient-to-t from-forest-600 to-forest-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 rounded-full px-16"
                href="https://calendly.com/saad-b-javaid22/consultation"
                target="_blank"
              >
                <span className="relative inline-flex items-center">
                  Let&apos;s work together{" "}
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
        </div>
      </div>
        </div>
      </div>

    </section>
  );
}
