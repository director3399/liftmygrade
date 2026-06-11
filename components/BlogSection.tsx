
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";

export default function BlogSection() {
  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1, 4);

  return (
    <section className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-white" id="blog">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight leading-tight mt-4 sm:mt-0">
            Explore Our Latest Insights &<br className="hidden sm:block" />
            Academic Journeys
          </h2>
        </div>

        {/* Featured Post */}
        {featuredBlog && (
          <Link href={`/blogs/${featuredBlog.slug}`}>
            <div className="flex flex-col md:flex-row bg-[#EBEFEA] rounded-[2rem] sm:rounded-4xl overflow-hidden mb-8 shadow-sm cursor-pointer group">
              {/* Left Image */}
              <div className="relative w-full md:w-[45%] h-[250px] sm:h-[300px] md:h-auto min-h-[250px] sm:min-h-[350px]">
                <Image
                  src={featuredBlog.coverImage}
                  alt={featuredBlog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Right Content */}
              <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center w-full md:w-[55%] relative">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1C362B] mb-4 leading-[1.2] tracking-tight group-hover:text-black transition-colors">
                  {featuredBlog.title}
                </h3>
                <p className="text-sm text-neutral-700 mb-8 sm:mb-10 max-w-md leading-relaxed">
                  {featuredBlog.excerpt}
                </p>

                <div className="flex items-center mt-auto pt-4 border-t border-black/5">
                  {/* Category Badge */}
                  <div className="bg-[#1C362B] text-white px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-medium tracking-wide">
                    {featuredBlog.category}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Small Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {otherBlogs.map((blog, idx) => (
            <Link href={`/blogs/${blog.slug}`} key={blog.id}>
              <div className="flex flex-col group cursor-pointer h-full">
                <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden mb-5 bg-neutral-100">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 bg-[#EBEFEA] text-[#1C362B] px-4 py-1 rounded-full text-[11px] font-medium shadow-sm">
                    {blog.category}
                  </div>
                </div>
                <h3 className="text-[17px] font-serif text-[#1C362B] text-center leading-snug px-4 group-hover:text-black transition-colors">
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center">
          <Link href="/blogs">
            <button className="bg-[#1C362B] text-white px-8 py-4 rounded-full font-semibold text-[15px] flex items-center gap-2 hover:bg-[#12241C] transition-colors">
              See All Blogs
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
