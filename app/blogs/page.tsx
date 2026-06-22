import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Blog - LiftmyGrade",
  description: "Explore our latest insights and academic journeys.",
};

export default function BlogsPage() {
  return (
    <>
      <Navbar hideLinks theme="light" />
      <main className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#171717] tracking-tight leading-tight">
            Our Latest Insights
          </h1>
          <p className="mt-6 text-[15px] text-neutral-600 max-w-2xl leading-relaxed mx-auto">
            Dive into expert tips, personal success stories, and educational resources to support your global study goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link href={`/blogs/${blog.slug}`} key={blog.id} className="flex flex-col group">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-5 bg-neutral-100">
                <Image 
                  src={blog.coverImage} 
                  alt={blog.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 bg-[#EBEFEA] text-[#1C362B] px-4 py-1 rounded-full text-[11px] font-medium shadow-sm">
                  {blog.category}
                </div>
              </div>
              <h3 className="text-xl font-serif text-[#1C362B] leading-snug px-2 group-hover:text-black transition-colors mb-3">
                {blog.title}
              </h3>
              <p className="text-sm text-neutral-600 px-2 line-clamp-3 mb-4">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center px-2 mt-auto pt-4 border-t border-black/5">
                <span className="text-[12px] font-medium text-neutral-500">{blog.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
