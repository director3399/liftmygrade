---
name: seo-optimization
description: End-to-end technical, on-page, and semantic SEO best practices for Next.js applications, covering metadata, OpenGraph, structured data (JSON-LD), crawlability, Core Web Vitals, and keyword architecture.
---

# SEO Optimization Skill

## Purpose
Guide the architecture, on-page elements, technical hygiene, and structured schema to maximize organic search visibility, click-through rates (CTR), and crawl efficiency for Next.js web applications.

## Core Pillars

### 1. Technical SEO
- **Canonical Standardization**: Ensure explicit, absolute canonical tags (e.g. `https://www.liftmygrade.com/...`). Avoid self-referencing canonical discrepancies or mixed protocol/subdomain URLs.
- **Crawl Directives**: Maintain accurate `robots.txt` and dynamically updated `sitemap.xml`. Exclude non-existent (404/410) routes and internal redirects.
- **Clean Redirect Chains**: Keep redirects to a single hop (301/308). Resolve protocol (HTTP -> HTTPS) and subdomain (apex -> www) issues without multi-hop latency.
- **Core Web Vitals**:
  - **LCP (Largest Contentful Paint)**: Optimize hero banners, pre-load priority images, serve WebP/AVIF formats.
  - **CLS (Cumulative Layout Shift)**: Provide explicit aspect ratios or layout containers for dynamic media.
  - **INP (Interaction to Next Paint)**: Minimize main-thread JavaScript execution.

### 2. On-Page & Semantic SEO
- **Title Tags**: 50–60 characters. Place primary target keywords near the beginning, followed by the brand differentiator.
- **Meta Descriptions**: 130–160 characters. Clear value proposition with a natural call-to-action (CTA).
- **Heading Hierarchy**: Exactly one `<h1>` per page reflecting user search intent, followed by logical `<h2>` and `<h3>` tags. Avoid skipping levels.
- **Image Accessibility**: Descriptive, concise `alt` text (<90 characters) providing context for visually impaired users and image search bots.

### 3. Structured Data (JSON-LD Schema)
- Implement schema for:
  - `Organization` / `EducationalOrganization`
  - `WebSite` & `SiteNavigationElement` (for Google Sitelinks)
  - `Article` / `BlogPosting` (for guides and research content)
  - `BreadcrumbList` & `FAQPage` where relevant
- Validate against Schema.org and Google Search Console rich-result requirements.

### 4. Content Depth & Internal Linking
- Avoid thin content (<300 words). High-intent guides should provide actionable frameworks, checklists, and FAQs.
- Contextual in-content linking: Link topical blog posts to foundational service pages using descriptive anchor text rather than generic "click here" labels.
