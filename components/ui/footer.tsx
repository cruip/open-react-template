import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <hr className="border-t border-gray-700 mb-6" />
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
        <div className="grid grid-cols-1 gap-y-12 gap-x-12 py-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-20">
          {/* Contact Us Block */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-gray-400 hover:text-gray-100 transition"
                  href="mailto:ethicalhck@heraldcollege.edu.np"
                >
                  ethicalhck@heraldcollege.edu.np
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-gray-100 transition"
                  href="tel:+9779842980808"
                >
                  +977 9842980808
                </a>
              </li>
              <li>
                <span className="text-gray-400">
                  Herald College Kathmandu, Naxal, Nepal
                </span>
              </li>
            </ul>
          </div>

          {/* About Us Block */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">About Us</h3>
            <p className="text-sm text-gray-400">
              Learn more about our mission, values, and the work we do.
            </p>
          </div>

          {/* Logo and Social Media Links */}
          <div className="space-y-4 text-center lg:text-right">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-gray-400">© 2024 ethicalhck.com</p>
            <div className="flex justify-center space-x-6 lg:justify-end h-10 w-10 ml-32">
              <a
                className="text-gray-400 hover:text-gray-100 transition"
                href="https://www.linkedin.com/in/ethicalhck/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                className="text-gray-400 hover:text-gray-100 transition h-10 w-10"
                href="https://www.instagram.com/devcorps.ethicalhck/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                className="text-gray-400 hover:text-gray-100 transition h-10 w-10"
                href="https://www.facebook.com/profile.php?id=61565057190640&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
