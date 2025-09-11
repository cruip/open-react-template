export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-16 md:py-28">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-indigo-300),var(--color-indigo-500),var(--color-indigo-200),var(--color-indigo-400),var(--color-indigo-300))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-bold text-transparent md:text-6xl"
              data-aos="fade-up"
            >
              Prime Quality Services
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-10 text-lg md:text-xl text-gray-300/80 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Kalite kontrol süreçlerinde güvenilir ortağınız.
                Deneyim, doğruluk ve verimlilikle işinizi prime seviyeye taşıyoruz.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg hover:from-indigo-700 hover:to-indigo-600 sm:mb-0 sm:w-auto"
                    href="#hizmetler"
                  >
                    <span className="relative inline-flex items-center">
                      Hizmetlerimizi Keşfet
                      <span className="ml-2 tracking-normal text-white/70 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn w-full bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 sm:w-auto"
                    href="#iletisim"
                  >
                    Bizimle İletişime Geç
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Görsel alan (örn. kaliteye dair bir hero görseli) */}
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay={800}>
            <img
              className="rounded-2xl shadow-2xl max-h-[400px] object-cover"
              src="/images/quality-team.jpg"
              alt="Prime Quality Services ekibi"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
