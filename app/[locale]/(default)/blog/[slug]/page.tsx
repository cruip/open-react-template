import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { getAllPosts, getPostBySlug } from "@/utils/blog";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isArabic = locale === "ar";
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="pt-24 md:pt-32">
      <article className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-royal transition hover:text-royal-light dark:text-gold dark:hover:text-gold-light"
        >
          <svg className="h-4 w-4 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {isArabic ? "العودة إلى المدونة" : "Back to blog"}
        </Link>

        {/* Cover image */}
        <div className="relative h-64 w-full overflow-hidden rounded-3xl sm:h-80 md:h-96">
          <Image
            src={post.cover_image}
            alt={isArabic ? post.title_ar : post.title_en}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
          />
        </div>

        {/* Meta */}
        <div className="mt-8">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-royal dark:text-gold">
            {new Date(post.date).toLocaleDateString(isArabic ? "ar" : "en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <h1 className="mt-3 font-nacelle text-3xl font-semibold text-navy dark:text-paper md:text-4xl">
            {isArabic ? post.title_ar : post.title_en}
          </h1>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg mt-8 max-w-none text-navy/80 dark:text-paper/80 prose-headings:text-navy dark:prose-headings:text-paper prose-a:text-royal dark:prose-a:text-gold"
          style={{ direction: isArabic ? "rtl" : "ltr" }}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}