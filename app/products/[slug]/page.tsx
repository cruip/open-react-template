import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products } from '@/app/data/products'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: any) {
  const product = products.find((p) => p.slug === params.slug)
  return { title: product ? product.name : 'Продукт' }
}

export default function ProductPage({ params }: any) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return notFound()

  return (
    <section>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <nav className="mb-6 text-sm text-gray-400 flex justify-between">
            <span><Link href="/" className="hover:text-indigo-500">Главная</Link>
            {' / '}
            <Link href="/products" className="hover:text-indigo-500">Каталог продукции</Link>
            {' / '}
            <span className="text-gray-600">{product.name}</span>
            </span>
            <span className="text-right ">
            <Link href="/products" className="text-indigo-400 underline-offset-4 hover:text-indigo-500 hover:underline ">
              ← Назад к каталогу
            </Link>
          </span>
          </nav>
           
          <h1 className="
          animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-700),var(--color-indigo-700),var(--color-gray-600),var(--color-indigo-800),var(--color-gray-700))] 
          bg-[length:200%_auto] bg-clip-text pb-6 font-nacelle text-transparent 
          pt-12 text-center text-3xl font-semibold ">{product.name}</h1>
          <Image src={product.image} width={720} height={945} alt={product.name} className="mb-6 w-sm rounded-md" />
          <p className="mb-6 text-gray-700">{product.description}</p>
          <div className="space-y-4">
            <div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-700),var(--color-indigo-700),var(--color-gray-600),var(--color-indigo-800),var(--color-gray-700))] 
          bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-transparent text-center text-xl font-semibold ">Область применения</h2>
              <p className="text-gray-700">{product.application}</p>
            </div>
            <div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-700),var(--color-indigo-700),var(--color-gray-600),var(--color-indigo-800),var(--color-gray-700))] 
          bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-transparent text-center text-xl font-semibold ">Подготовка основания</h2>
              <p className="text-gray-700">{product.basePreparation}</p>
            </div>
            <div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-700),var(--color-indigo-700),var(--color-gray-600),var(--color-indigo-800),var(--color-gray-700))] 
          bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-transparent text-center text-xl font-semibold ">Приготовление растворной смеси</h2>
              <p className="text-gray-700">{product.mixturePreparation}</p>
            </div>
            <div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-700),var(--color-indigo-700),var(--color-gray-600),var(--color-indigo-800),var(--color-gray-700))] 
          bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-transparent text-center text-xl font-semibold ">Технические характеристики</h2>
              <ul className="list-disc space-y-1 pl-5 text-gray-700">
                {product.specs.map((s) => (
                  <li key={s.label}><span className="font-medium text-gray-500">{s.label}:</span> {s.value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
