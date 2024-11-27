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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-forest-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-forest-200/50">
              <span className="inline-flex bg-gradient-to-r from-forest-500 to-forest-200 bg-clip-text text-transparent">
                About Us
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-3xl font-medium text-transparent md:text-4xl">
              Why Choose Lumunate?
            </h2>
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-2 sm:max-w-none sm:grid-cols-[auto_1px_auto] md:gap-x-12 md:gap-y-16 lg:grid-cols-[auto_1px_auto_1px_auto] bg-[linear-gradient(88.12deg,rgba(17,39,24,0.48)_3.17%,rgba(33,55,31,0.2304)_52.41%,rgba(17,39,24,0.48)_94.35%)] py-20 px-8 border-[1px] border-[#374151] rounded-2xl">
            <article>
              <svg className="mb-3 fill-forest-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                <path
                  fillOpacity=".48"
                  d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                />
              </svg>
              <div className="mb-1">
                <h3 className="font-menda font-semibold text-[1rem] text-gray-200">Agile Development Processes</h3>
                <h4 className="font-raleway font-normal text-[1rem] text-forest-700">Speed, flexibility, and innovation</h4>
              </div>
              <p className="text-forest-200/65">
                At Lumunate, we combine innovation with expertise to deliver IT solutions tailored to your unique business needs.
                From responsive web applications to seamless systems integration, we turn ideas into impactful digital
                experiences.
              </p>
            </article>

            <div className="hidden sm:block w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

            <article>
              <svg className="mb-3 fill-forest-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
              </svg>

              <div className="mb-1">
                <h3 className="font-menda font-semibold text-[1rem] text-gray-200">Flexible Workflow Management</h3>
                <h4 className="font-raleway font-normal text-[1rem] text-forest-700">Workflows tailored to your business</h4>
              </div>
              <p className="text-forest-200/65">
                Whether you’re a solopreneur or an enterprise, our solutions streamline your workflows, enabling teams to
                collaborate seamlessly and achieve more in less time.
              </p>
            </article>

            <div className="lg:block sm:hidden w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

            <article>
              <svg className="mb-3 fill-forest-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                <path
                  fillOpacity=".48"
                  d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                />
              </svg>
              <div className="mb-1">
                <h3 className="font-menda font-semibold text-[1rem] text-gray-200">Results-Oriented Approach</h3>
                <h4 className="font-raleway font-normal text-[1rem] text-forest-700">Your success is our priority</h4>
              </div>
              <p className="text-forest-200/65">
                At Lumunate, we don’t just build solutions; we deliver measurable results. Our team works with you to understand
                your objectives, ensuring every project aligns with your vision and drives success.
              </p>
            </article>

            <div className="lg:hidden sm:block w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

            <article>
              <svg className="mb-3 fill-forest-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path
                  fillOpacity=".48"
                  d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z"
                />
                <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
                <path
                  d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z"
                  opacity=".48"
                />
                <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
              </svg>

              <div className="mb-1">
                <h3 className="font-menda font-semibold text-[1rem] text-gray-200">End-to-End IT Support</h3>
                <h4 className="font-raleway font-normal text-[1rem] text-forest-700">Support at every step.</h4>
              </div>
              <p className="text-forest-200/65">
                From consultation to deployment and beyond, we offer comprehensive IT support to ensure your digital solutions
                perform at their best. We're with you every step of the way
              </p>
            </article>

            <div className="lg:block sm:hidden w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

            <article>
              <svg className="mb-3 fill-forest-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path fillOpacity=".48" d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
                <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
              </svg>

              <div className="mb-1">
                <h3 className="font-menda font-semibold text-[1rem] text-gray-200">Enterprise-Grade Cloud Solutions</h3>
                <h4 className="font-raleway font-normal text-[1rem] text-forest-700">Innovation in the cloud.</h4>
              </div>
              <p className="text-forest-200/65">
                Accelerate your digital transformation with our secure and scalable cloud services. We build cloud-native
                applications and optimize infrastructure to meet the demands of your business.
              </p>
            </article>

            <div className="hidden sm:block w-[1px] h-full bg-[linear-gradient(to_bottom,theme(colors.forest.900),theme(colors.forest.700),theme(colors.forest.900))]"></div>

            <article>
              <svg className="mb-3 fill-forest-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path fillOpacity=".48" d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z" />
                <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
              </svg>

              <div className="mb-1">
                <h3 className="font-menda font-semibold text-[1rem] text-gray-200">Advanced Data Security</h3>
                <h4 className="font-raleway font-normal text-[1rem] text-forest-700">Your data, protected.</h4>
              </div>
              <p className="text-forest-200/65">
                Trust Lumunate to safeguard your sensitive information. We implement robust security protocols and compliance
                standards, ensuring your data is secure in every project we handle.
              </p>
            </article>
          </div>
          <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center font-raleway mt-8">
            <div data-aos="fade-up" data-aos-delay={400}>
              <a
                className="btn group mb-4 w-full bg-gradient-to-t from-forest-600 to-forest-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto rounded-full px-16"
                href="#0"
              >
                <span className="relative inline-flex items-center">
                  Let's work together {" "}
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
