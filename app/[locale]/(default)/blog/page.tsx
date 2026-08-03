import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/utils/blog";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isArabic = locale === "ar";
  const posts = getAllPosts();

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl" 
          style={{ background: "radial-gradient(circle, var(--color-royal), transparent 70%)" }} 
        />
        
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-royal dark:text-gold">
              {isArabic ? "المدونة" : "Blog"}
            </span>
            <h1 className="mt-3 font-nacelle text-4xl font-semibold text-navy dark:text-paper md:text-5xl">
              {isArabic ? "آخر المنشورات" : "Latest posts"}
            </h1>
            <p className="mt-4 text-lg leading-8 text-navy/75 dark:text-paper/75">
              {isArabic
                ? "أحدث الأخبار والرؤى من فريق دام."
                : "Latest news and insights from the DAM team."}
            </p>
          </div>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        {posts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-navy/60 dark:text-paper/60">
              {isArabic ? "لا توجد منشورات بعد." : "No posts yet."}
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group rounded-3xl border border-line overflow-hidden bg-white shadow-sm transition-all hover:border-royal/30 hover:shadow-xl dark:border-line-dark dark:bg-navy-deep/80 dark:hover:border-gold/30"
              >
                <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-royal/20 to-gold/20 dark:from-gold/10 dark:to-royal/10">
                  <Image
                    src={post.cover_image}
                    alt={isArabic ? post.title_ar : post.title_en}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-navy backdrop-blur">
                      {new Date(post.date).toLocaleDateString(isArabic ? "ar" : "en", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-navy dark:text-paper">
                    {isArabic ? post.title_ar : post.title_en}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-navy/70 dark:text-paper/70">
                    {isArabic ? post.excerpt_ar : post.excerpt_en}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal transition hover:text-royal-light dark:text-gold dark:hover:text-gold-light group/link">
                    {isArabic ? "اقرأ المزيد" : "Read more"}
                    <svg className="h-4 w-4 transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}