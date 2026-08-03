import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title_en: string;
  title_ar: string;
  date: string;
  cover_image: string;
  excerpt_en: string;
  excerpt_ar: string;
  content: string;
}

const blogDir = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];
  
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
  
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: data.slug,
      title_en: data.title_en,
      title_ar: data.title_ar,
      date: data.date,
      cover_image: data.cover_image,
      excerpt_en: data.excerpt_en,
      excerpt_ar: data.excerpt_ar,
      content,
    } as BlogPost;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}