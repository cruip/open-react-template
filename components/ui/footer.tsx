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
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-cadet-blue">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Facade Inspections
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Construction Monitoring
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Topographic Surveying
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Thermal Inspections
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  3D Modeling & BIM
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Roof Inspections
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-cadet-blue">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  About SRAB
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-cadet-blue">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Safety Guidelines
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-cadet-blue">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Get a Quote
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Schedule Demo
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-cadet-blue/65">
                © SRAB Drone Services
                <span className="text-[#3a4a55]"> · </span>
                <a
                  className="text-cadet-blue/65 transition hover:text-warm-sand"
                  href="#0"
                >
                  Terms
                </a>
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center text-warm-sand transition hover:text-cadet-blue"
                    href="#0"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-warm-sand transition hover:text-cadet-blue"
                    href="#0"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-warm-sand transition hover:text-cadet-blue"
                    href="#0"
                    aria-label="Instagram"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20.145" cy="11.892" r="1" />
                      <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                      <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
