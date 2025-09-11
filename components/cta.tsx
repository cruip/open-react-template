import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Bize Ulaşın
            </h2>
            <div className="mx-auto max-w-xs sm:max-w-none">
              <p className="text-gray-300 text-lg mb-2" data-aos="fade-up" data-aos-delay={400}>
                📧 Email: <a href="mailto:info@primequality.com" className="text-indigo-400 hover:text-indigo-500">info@primequality.com</a>
              </p>
              <p className="text-gray-300 text-lg mb-2" data-aos="fade-up" data-aos-delay={500}>
                📞 Telefon: <a href="tel:+901234567890" className="text-indigo-400 hover:text-indigo-500">+90 123 456 7890</a>
              </p>
              <p className="text-gray-300 text-lg" data-aos="fade-up" data-aos-delay={600}>
                🏢 Addres: Prime Quality Services, Kocaeli, Turkey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
