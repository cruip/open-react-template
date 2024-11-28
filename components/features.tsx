import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Features() {
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
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-forest-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-forest-200/50">
              <span className="inline-flex bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                Services
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda text-3xl font-medium text-transparent md:text-4xl">
              Comprehensive IT Solutions to Scale Your Business
            </h2>
            {/* <p className="text-lg text-forest-200/65">
              Open AI reads and understands your files, and with nothing more
              than a single line of feedback, so you can go further than the
              speed of thought.
            </p> */}
          </div>
          {/* <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div> */}
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <Image className="mb-2" src={'/images/icons/webdev.svg'} width={29} height={24} alt="Web Development and Design" /> 
              <h3 className="mb-1 font-menda font-semibold text-[1rem] text-gray-200">Web Development and Design</h3>
              <p className="text-forest-200/65">
                Delivering visually appealing, user-friendly and extensive web applications is at the core of what we do. From
                custom web applications to landing pages, our services include UX/UI design, fullstack development, SEO
                optimization and cross-browser compatibility
              </p>
              <div className="flex gap-3 flex-wrap mt-4">
                <Image src={'/images/icons/react-original.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/vuejs-original.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/angular-original.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/nextjs-original.svg'} width={60} height={30} alt="Icon" />
                <Image src={'/images/icons/nuxtjs-original.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/nestjs-original.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/nodejs-original.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/laravel-original.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/rust-original.svg'} width={50} height={30} alt="Icon" className="invert" />
                <Image src={'/images/icons/go-original.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/rails-plain.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/flask-original.svg'} width={50} height={30} alt="Icon" className="invert" />
              </div>
            </article>
            <article>
            <Image className="mb-2" src={'/images/icons/mobile-programming.svg'} width={29} height={24} alt="Web Development and Design" /> 
              <h3 className="mb-1 font-menda text-[1rem] font-semibold text-gray-200">Mobile App Development</h3>
              <p className="text-forest-200/65">
                We create scalable, intuitive and high-performance mobile applications for iOS, Android or cross-platform use.
                Whether it&apos;s a customer-facing app or a business tool, we design, develop and deploy apps, that deliver
                seamless user experiences
              </p>

              <div className="flex gap-3 mt-4 flex-wrap">
                <Image src={'/images/icons/react-native.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/kotlin-original.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/flutter-original.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/swift-original.svg'} width={50} height={30} alt="Icon" />
              </div>

            </article>
            <article>
            <Image className="mb-2" src={'/images/icons/data.svg'} width={29} height={24} alt="Web Development and Design" /> 
              <h3 className="mb-1 font-menda text-[1rem] font-semibold text-gray-200">Systems Integration</h3>
              <p className="text-forest-200/65">
                Streamline your operations with custom API development and systems integration. We connect your existing tools,
                applications and platforms, enabling seamless data flow, automation and improved operational efficiency.{" "}
              </p>

              <div className="flex gap-5 flex-wrap">
                <Image src={'/images/icons/mendix.svg'} width={80} height={30} alt="Icon" />
                <Image src={'/images/icons/outsystems.svg'} width={80} height={30} alt="Icon" />
                <Image src={'/images/icons/appian.svg'} width={80} height={30} alt="Icon" />
                <Image src={'/images/icons/salesforce-original.svg'} width={70} height={30} alt="Icon" />
              </div>

            </article>
            <article>
            <Image className="mb-2" src={'/images/icons/Lock-Cloud.svg'} width={29} height={24} alt="Web Development and Design" /> 
              <h3 className="mb-1 font-menda text-[1rem] font-semibold text-gray-200">IT Consulting & Cloud Solutions</h3>
              <p className="text-forest-200/65">
                We help businesses with cloud migration, infrastructure optimization and digital transformation strategies, while
                ensuring scalability, security and performance.{" "}
              </p>

              <div className="flex gap-3 mt-4 flex-wrap">
                <Image src={'/images/icons/amazonwebservices-original-wordmark.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/linode.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/azure-original.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/googlecloud-original.svg'} width={50} height={30} alt="Icon" />
              </div>

            </article>
            <article>
            <Image className="mb-2" src={'/images/icons/megaphone.svg'} width={29} height={24} alt="Web Development and Design" /> 
              <h3 className="mb-1 font-menda text-[1rem] font-semibold text-gray-200">Digital Marketing Services</h3>
              <p className="text-forest-200/65">
                From SEO and content marketing to social media management and paid ad campaigns, we craft data-driven strategies
                that maximize your ROI and drive measurable growth{" "}
              </p>
            </article>
            <article>
            <Image className="mb-2" src={'/images/icons/note-favorite.svg'} width={29} height={24} alt="Web Development and Design" />  
              <h3 className="mb-1 font-menda text-[1rem] font-semibold text-gray-200">Custom CMS Development</h3>
              <p className="text-forest-200/65">
                From WordPress and Shopify to Drupal and Joomla, we offer seamless integrations, tailored e-commerce solutions and
                much more.
              </p>

              <div className="flex gap-3 mt-4 flex-wrap">
                <Image src={'/images/icons/joomla.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/hubspot.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/wordpress-original.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/woo-commerce.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/webflow.svg'} width={50} height={30} alt="Icon" />
                <Image src={'/images/icons/drupal.svg'} width={50} height={30} alt="Icon" />
              </div>

            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
