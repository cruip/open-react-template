"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import ClientImg01 from "@/public/images/client-logo-01.svg";
import ClientImg02 from "@/public/images/client-logo-02.svg";
import ClientImg03 from "@/public/images/client-logo-03.svg";
import ClientImg04 from "@/public/images/client-logo-04.svg";
import ClientImg05 from "@/public/images/client-logo-05.svg";

const testimonials = [
  {
    img: TestimonialImg01,
    clientImg: ClientImg01,
    name: "Elif A.",
    company: "Bosch",
    content:
      "Prime Quality Services sayesinde ürünlerimizin kalite kontrolünü hızlandırdık. Raporlar net ve güvenilir, ekip daha verimli çalışıyor.",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg02,
    clientImg: ClientImg02,
    name: "Ahmet K.",
    company: "Siemens",
    content:
      "Ölçüm ve test süreçlerimiz artık çok daha şeffaf ve güvenli. Prime Quality Services, tüm süreçlerimizi tek bir platformda topladı.",
    categories: [1, 2, 4],
  },
  {
    img: TestimonialImg03,
    clientImg: ClientImg03,
    name: "Merve D.",
    company: "Ford Otosan",
    content:
      "Saha ölçümleri ve görsel kontrol süreçlerimiz Prime ile çok daha kolay. Raporlar hızlı ve detaylı, hatalar minimize ediliyor.",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg04,
    clientImg: ClientImg04,
    name: "Pelin S.",
    company: "Arçelik",
    content:
      "Prime Quality Services, ekiplerimizin iş akışını optimize etmemize yardımcı oldu. Her ürünün kalitesi kontrol altında, güvenimiz arttı.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg05,
    clientImg: ClientImg05,
    name: "Emre T.",
    company: "Vestel",
    content:
      "Artık üretim sonrası kontrollerimizi çok hızlı ve güvenli şekilde yapıyoruz. Prime sayesinde hem zaman hem de maliyet tasarrufu sağladık.",
    categories: [1, 3, 5],
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Müşteri Yorumları
          </h2>
          <p className="text-lg text-indigo-200/65">
            Ürünlerimiz ve hizmetlerimiz hakkında müşterilerimizin deneyimlerini keşfedin.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
          <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
            {[1, 2, 3, 4, 5].map((cat) => (
              <button
                key={cat}
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${
                  category === cat
                    ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900"
                    : "opacity-65 hover:opacity-90"
                }`}
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
              >
                <span>
                  {cat === 1
                    ? "Tüm Referanslar"
                    : cat === 2
                    ? "Otomotiv"
                    : cat === 3
                    ? "Elektronik"
                    : cat === 4
                    ? "Üretim"
                    : "Diğer"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial Cards */}
        <div
          className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
          ref={masonryContainer}
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} category={category}>
              {testimonial.content}
            </Testimonial>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    clientImg: StaticImageData;
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  const isVisible = testimonial.categories.includes(category);
  return (
    <article
      className={`relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity ${
        !isVisible ? "opacity-30" : "opacity-100"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <Image src={testimonial.clientImg} height={36} alt="Client logo" />
        </div>
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> - </span>
            <a
              className="text-indigo-200/65 transition-colors hover:text-indigo-500"
              href="#0"
            >
              {testimonial.company}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
