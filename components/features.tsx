import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2" aria-hidden="true">
        <Image className="max-w-none" src={BlurredShapeGray} width={760} height={668} alt="Blurred shape" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50" aria-hidden="true">
        <Image className="max-w-none" src={BlurredShape} width={760} height={668} alt="Blurred shape" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Pensé pour les propriétaires modernes
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold animate-[gradient_8s_linear_infinite] bg-[linear-gradient(to_right,#4f46e5,#8b5cf6,#ec4899,#4f46e5)] bg-[length:200%_auto] bg-clip-text text-transparent">
              Automatisez vos tâches, gagnez du temps, et concentrez-vous sur l’essentiel
            </h2>
            <p className="text-lg text-gray-600">
              Grâce à une interface simple et intuitive, LocaFlow permet aux propriétaires de gérer leur location avec efficacité.
            </p>
          </div>

          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image className="max-w-none" src={FeaturesImage} width={1104} height={384} alt="Features" />
          </div>

          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                <path fillOpacity=".48" d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93Z" />
              </svg>
              <h3 className="mb-1 text-[1rem] font-semibold text-gray-900">Suivi des projets</h3>
              <p className="text-gray-600">Gérez les étapes de location, les échanges avec les locataires et les actions de maintenance sans stress.</p>
            </article>

            <article>
              <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z" />
              </svg>
              <h3 className="mb-1 text-[1rem] font-semibold text-gray-900">Tableau de bord</h3>
              <p className="text-gray-600">Visualisez en un coup d'œil vos locations, loyers perçus et interventions.</p>
            </article>

            <article>
              <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path d="M21 3H3v2h18V3Zm0 4H6v2h15V7Zm0 4H9v2h12v-2Zm0 4H12v2h9v-2ZM3 19h18v2H3v-2Z" />
              </svg>
              <h3 className="mb-1 text-[1rem] font-semibold text-gray-900">Organisation des visites</h3>
              <p className="text-gray-600">Gérez facilement les demandes et plannings de visites des biens.</p>
            </article>

            <article>
              <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z" />
              </svg>
              <h3 className="mb-1 text-[1rem] font-semibold text-gray-900">Recherche simplifiée</h3>
              <p className="text-gray-600">Accédez rapidement à des profils de locataires sérieux et vérifiés.</p>
            </article>

            <article>
              <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path d="M4 4h16v2H4zm0 6h10v2H4zm0 6h13v2H4z" />
              </svg>
              <h3 className="mb-1 text-[1rem] font-semibold text-gray-900">Automatisation des relances</h3>
              <p className="text-gray-600">Programmez les rappels de loyers, entretiens ou documents automatiquement.</p>
            </article>

            <article>
              <svg className="mb-3 fill-indigo-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1 15H6V9h12v10Z" />
              </svg>
              <h3 className="mb-1 text-[1rem] font-semibold text-gray-900">Historique des échanges</h3>
              <p className="text-gray-600">Conservez toutes les discussions et documents au même endroit.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
