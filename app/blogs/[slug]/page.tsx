import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { ArrowLeft } from "lucide-react";
import TableOfContents, { Heading } from "@/components/TableOfContents";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Blog Not Found - LiftmyGrade" };
  
  return {
    title: `${blog.title} - LiftmyGrade`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const headings: Heading[] = [];
  const headingRegex = /<(h[23])[^>]*id="([^"]+)"[^>]*>(.*?)<\/\1>/g;
  let match;
  while ((match = headingRegex.exec(blog.content)) !== null) {
    headings.push({
      level: parseInt(match[1].replace('h', '')),
      id: match[2],
      text: match[3].replace(/<[^>]+>/g, ""),
    });
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        <Link href="/blogs" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-[#1C362B] transition-colors mb-10 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to all blogs
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
          <article className="lg:w-[70%] max-w-4xl">

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[#EBEFEA] text-[#1C362B] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
              {blog.category}
            </span>
            <span className="text-neutral-500 text-sm font-medium">{blog.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#171717] tracking-tight leading-[1.1] mb-8 font-serif">
            {blog.title}
          </h1>

          <div className="flex items-center gap-4 py-6 border-y border-neutral-100">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image
                src={blog.authorImage}
                alt={blog.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-[#1C362B] text-[15px]">{blog.author}</p>
              <p className="text-sm text-neutral-500">{blog.authorRole}</p>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-16 bg-neutral-100">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg prose-neutral max-w-none prose-headings:font-serif prose-headings:text-[#1C362B] prose-a:text-[#1C362B] prose-p:text-neutral-700 prose-p:leading-relaxed prose-li:text-neutral-700 prose-headings:scroll-mt-24"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
          </article>
          
          <aside className="hidden lg:block lg:w-[30%] relative">
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </div>
    </main>
  );
}
