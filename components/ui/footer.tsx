import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300">
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

        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo & Contact */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm">
              📧 Email:{" "}
              <a
                href="mailto:info@primequality.com"
                className="text-indigo-400 hover:text-indigo-500"
              >
                info@primequality.com
              </a>
            </p>
            <p className="text-sm">
              📞 Phone:{" "}
              <a
                href="tel:+901234567890"
                className="text-indigo-400 hover:text-indigo-500"
              >
                +90 123 456 7890
              </a>
            </p>
            <p className="text-sm">🏢 Address: Prime Quality Services, Istanbul, Turkey</p>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <a
              className="text-indigo-500 hover:text-indigo-400"
              href="#"
              aria-label="Twitter"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1s-1.85 1.1-3.2 1.37A4.52 4.52 0 0 0 16.1 0c-2.54 0-4.6 2.1-4.6 4.7 0 .37.04.73.12 1.08C7.69 5.9 4.07 4.06 1.64 1.15a4.58 4.58 0 0 0-.62 2.37c0 1.63.83 3.08 2.1 3.93A4.52 4.52 0 0 1 1 7.7v.06c0 2.28 1.63 4.18 3.77 4.62a4.5 4.5 0 0 1-2.08.08 4.52 4.52 0 0 0 4.22 3.17A9.06 9.06 0 0 1 0 19.54 12.8 12.8 0 0 0 7 21c8.38 0 12.95-7.05 12.95-13.17 0-.2 0-.39-.01-.58A9.34 9.34 0 0 0 24 3z" />
              </svg>
            </a>
            <a
              className="text-indigo-500 hover:text-indigo-400"
              href="#"
              aria-label="LinkedIn"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.3 0 6.3 3.5 6.3 8V24h-5v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.8h-5V8z" />
              </svg>
            </a>
            <a
              className="text-indigo-500 hover:text-indigo-400"
              href="#"
              aria-label="GitHub"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.84 10.91.57.1.78-.25.78-.56v-2.02c-3.19.69-3.87-1.54-3.87-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.2-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.75.8 1.2 1.82 1.2 3.08 0 4.41-2.68 5.39-5.24 5.67.41.35.78 1.04.78 2.11v3.12c0 .31.2.67.79.56A11.52 11.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm lg:text-right">
            <p>© 2025 Prime Quality Services. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
