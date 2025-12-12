import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/app/data/products'
import Spotlight from "@/components/spotlight";

export const metadata = {
  title: 'Продукция',
  description: 'Каталог продукции',
}

export default function ProductsPage() {
  return (
   <section>
         <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <h1 className="pb-8 text-center animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-700),var(--color-indigo-700),var(--color-gray-600),var(--color-indigo-800),var(--color-gray-700))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-3xl" data-aos="fade-up">
            Каталог продукции «АЛМ»
          </h1>
          
         
      <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
           
            {/* Card all */}
         {products.map((product) => (
           <Link key={product.slug} href={`/products/${product.slug}`} className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-100 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100" >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-50 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-0/0 after:via-gray-0/0 after:to-gray-0/0">
                {/* Arrow */}
                <div className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-gray-200 text-gray-600 opacity-0 transition-opacity group-hover/card:opacity-100" aria-hidden="true" >
                  <svg xmlns="http://www.w3.org/2000/svg"  width={9} height={8} fill="none"> <path fill="#000000ff"  d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"/></svg>
                </div>
                {/* Image */}
                <Image src={product.image}  alt={product.name} width={320} height={240} />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-200/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,#e5e7eb,#e5e7eb)] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-200/60">
                      <span className="bg-linear-to-r from-indigo-800 to-indigo-700 bg-clip-text text-transparent">
                        Цена: по запросу
                      </span>
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
             <p className="mb-3 text-sm text-gray-400">
                  {product.description.split(/\s+/).slice(0, 12).join(' ')}
                  {product.description.split(/\s+/).length > 12 ? '…' : ''}
                </p>
                </div>
              </div>
            </Link>
             
            ))}
          </Spotlight>
    <div className="mt-10 text-center" data-aos="fade-up" data-aos-delay={400}>
            <Link href="/contact" className="btn bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">
              Оставить заявку
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
