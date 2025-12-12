import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
       <div className="py-8 md:py-12">
          <div className="text-center">
            <div className="mb-3">
              <Logo />
            </div>
           <div className="text-sm text-gray-600">
              <p>Телефон: <a className="hover:text-indigo-500" href="tel:+74951234567">+7 (495) 123-45-67</a></p>
              <p className="mt-2">E-mail: <a className="hover:text-indigo-500" href="mailto:info@example.com">info@alm-gr.ru</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
