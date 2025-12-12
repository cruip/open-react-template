"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Certificate1 from "@/public/images/certificate-1.png";
import Certificate2 from "@/public/images/certificate-1.png";
import Certificate3 from "@/public/images/certificate-1.png";

export default function Certificates() {
  const [openImage, setOpenImage] = useState<StaticImageData | null>(null);

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-700),var(--color-indigo-700),var(--color-gray-600),var(--color-indigo-800),var(--color-gray-700))] bg-[length:200%_auto] bg-clip-text pb-6 text-center font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Наши сертификаты
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3" data-aos="fade-up">
            {[Certificate1].map((img, i) => (
              <button
                key={i}
                onClick={() => setOpenImage(img)}
                className="overflow-hidden rounded-lg focus:outline-hidden"
              >
                <Image
                  src={img}
                  alt={`Certificate ${i + 1}`}
                  className="transition-transform hover:scale-105"
                />
              </button>
            ))}
          </div>
          <Dialog open={!!openImage} onClose={() => setOpenImage(null)}>
            <DialogBackdrop className="fixed inset-0 z-50 bg-black/70" />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <DialogPanel className="max-h-full max-w-4xl overflow-auto rounded-2xl bg-white p-4">
                {openImage && (
                  <Image src={openImage} alt="Certificate" />
                )}
              </DialogPanel>
            </div>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
