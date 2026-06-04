import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { ArrowLeft } from "lucide-react";
import TableOfContents, { Heading } from "@/components/TableOfContents";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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

  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

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
    <>
      <Navbar hideLinks theme="light" />
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

        {/* Related Blogs Section */}
        {relatedBlogs.length > 0 && (
          <div className="mt-24 pt-16 border-t border-neutral-100">
            <h2 className="text-3xl font-serif font-bold text-[#1C362B] mb-10 tracking-tight">More from our Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link href={`/blogs/${relatedBlog.slug}`} key={relatedBlog.id}>
                  <div className="flex flex-col group cursor-pointer h-full">
                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-5 bg-neutral-100">
                      <Image 
                        src={relatedBlog.coverImage} 
                        alt={relatedBlog.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                      <div className="absolute bottom-4 left-4 bg-[#EBEFEA] text-[#1C362B] px-4 py-1 rounded-full text-[11px] font-medium shadow-sm">
                        {relatedBlog.category}
                      </div>
                    </div>
                    <h3 className="text-[17px] font-serif text-[#1C362B] leading-snug group-hover:text-black transition-colors">
                      {relatedBlog.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
    <Footer />
    </>
  );
}
