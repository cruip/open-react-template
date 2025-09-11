import Image from "next/image";
import WorkflowImg01 from "@/public/images/workflow-01.png";
import WorkflowImg02 from "@/public/images/workflow-02.png";
import WorkflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Bölüm başlığı */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              İş Akışımız
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Kaliteyi Nasıl Sağlıyoruz
          </h2>
          <p className="text-lg text-indigo-200/65">
            Ürünlerinizin ilk kontrolden son onaya kadar her aşamasında titizlik, verimlilik ve tutarlılık sağlıyoruz.
          </p>
        </div>

        {/* İş akışı kartları */}
        <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
          {/* Kart 1 */}
          <a
            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px hover:after:opacity-20"
            href="#"
          >
            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-6">
              <Image
                className="inline-flex mb-4 rounded-lg"
                src={WorkflowImg01}
                width={350}
                height={288}
                alt="İlk Kontrol"
              />
              <h3 className="text-lg font-semibold text-indigo-200 mb-2">
                İlk Kontrol
              </h3>
              <p className="text-indigo-200/65">
                Ürünlerinizin kalite standartlarına uygunluğunu ilk aşamada dikkatle değerlendiriyoruz.
              </p>
            </div>
          </a>

          {/* Kart 2 */}
          <a
            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px hover:after:opacity-20"
            href="#"
          >
            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-6">
              <Image
                className="inline-flex mb-4 rounded-lg"
                src={WorkflowImg02}
                width={350}
                height={288}
                alt="Detaylı Analiz"
              />
              <h3 className="text-lg font-semibold text-indigo-200 mb-2">
                Detaylı Analiz
              </h3>
              <p className="text-indigo-200/65">
                Ürünler üzerinde hassas ölçümler ve detaylı kontroller yaparak tüm spesifikasyonların karşılandığından emin oluyoruz.
              </p>
            </div>
          </a>

          {/* Kart 3 */}
          <a
            className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px hover:after:opacity-20"
            href="#"
          >
            <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-6">
              <Image
                className="inline-flex mb-4 rounded-lg"
                src={WorkflowImg03}
                width={350}
                height={288}
                alt="Son Onay"
              />
              <h3 className="text-lg font-semibold text-indigo-200 mb-2">
                Son Onay
              </h3>
              <p className="text-indigo-200/65">
                Sıkı kalite kontrollerimizi geçen ürünler, müşterilerimiz için en üst standartları sağlamak üzere onaylanır.
              </p>
            </div>
          </a>
        </Spotlight>
      </div>
    </section>
  );
}
