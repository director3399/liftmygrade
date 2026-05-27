YES — this is EXACTLY the correct use-case for Antigravity workspace skills.

And after seeing the actual LiftmyGrade documents and roadmap presentation  plus the website structure draft , now we can create a MUCH better and highly contextual skill.

Also:

# NO

you generally do NOT need to manually add your local workspace skill into `skill_lock.json`.

Because:

```text id="j8w2pn"
skill_lock.json
```

is mainly for:

* externally installed skills
* version locking
* reproducible dependencies
* hash validation

Your:

```text id="f2y4xm"
.agents/skills/liftmygrade-context/
```

workspace skill is local to the repository.

Antigravity should auto-discover it from:

```text id="l4z7qb"
.agents/skills/
```

So:

# DO NOT manually add it to skill_lock.json

unless Antigravity specifically documents that local skills must also be locked (which usually they don’t).

---

# FINAL RECOMMENDED STRUCTURE

```text id="x9k3mv"
.agents/
└── skills/
    └── liftmygrade-context/
        ├── SKILL.md
        ├── resources/
        │   ├── PROJECT_CONTEXT.md
        │   ├── UX_GUIDELINES.md
        │   └── ARCHITECTURE_RULES.md
```

This is VERY strong.

---

# FINAL SKILL.md

Here’s the version I would strongly recommend for LiftmyGrade:

````md
---
name: liftmygrade-context
description: Provides business context, UX philosophy, architecture principles, backend conventions, and product direction for the LiftmyGrade academic ecosystem platform. Use when working on frontend, backend, UX, workflows, dashboards, architecture, scalability, or product-related tasks inside the LiftmyGrade repository.
---

# LiftmyGrade Context Skill

## Purpose

This skill provides operational context and engineering direction for the LiftmyGrade platform.

LiftmyGrade is NOT a traditional study abroad consultancy website.

The platform should feel like:
- a premium academic ecosystem
- a structured mentorship platform
- a research-oriented global education system
- a long-term academic and career guidance partner

The platform must avoid:
- consultancy clutter
- aggressive sales UX
- coaching-center aesthetics
- overloaded layouts
- excessive animations
- country-flag-heavy visuals

---

# Core Product Philosophy

LiftmyGrade helps students across the full academic lifecycle:

Profile → Admission → Research → Career

Main categories:
- Bachelor’s Abroad
- Master’s Abroad
- Fully Funded PhD
- Research & Publication Support
- Career Branding & Academic Positioning

The platform should communicate:
- structure
- trust
- mentorship
- clarity
- long-term growth
- academic seriousness

---

# UX Philosophy

The user experience should feel:
- calm
- premium
- structured
- mentor-guided
- intellectually modern
- whitespace-heavy

Important UX rules:
- loading state != empty state
- avoid forced authentication
- reduce cognitive overload
- progressively guide users
- use clear information hierarchy
- maintain predictable rendering
- prioritize readability over visual noise

Avoid:
- sudden layout shifts
- hydration flickers
- excessive client-side loading
- overwhelming animations
- cluttered sections

---

# Frontend Engineering Rules

Preferred stack:
- Next.js App Router
- Server Components first
- Tailwind CSS
- shadcn/ui
- React Query
- Zod validation
- Framer Motion (minimal usage)

Important frontend principles:
- use Server Components by default
- use Client Components only when necessary
- avoid unnecessary rerenders
- use skeleton loaders during loading
- use suspense boundaries carefully
- centralize API calls
- separate loading/error/empty/success states

Never:
- show "No Data" during loading
- expose raw backend errors
- fetch data redundantly
- create unnecessary abstractions

---

# Backend Engineering Rules

Architecture priorities:
- maintainability
- scalability
- predictable APIs
- centralized validation
- structured logging
- clean separation of concerns

Preferred backend structure:
- route handlers/controllers
- service layer
- repository/data layer
- validation layer

Backend standards:
- use Zod validation everywhere
- standardize API responses
- centralize error handling
- never expose raw database/server errors
- use user-friendly error messages
- use structured logging
- maintain role-based access architecture


---

# Architecture Philosophy

The project should optimize for:

* maintainability
* predictability
* scalable workflows
* operational clarity
* UX consistency

Avoid:

* premature microservices
* unnecessary complexity
* overengineering
* shallow utility abstractions
* excessive global state

Prefer:

* deep modules
* feature-based architecture
* explicit workflows
* predictable rendering patterns

---

# Product Positioning

LiftmyGrade should feel closer to:

* Ambitio
* modern SaaS products
* premium academic ecosystems

NOT:

* visa agencies
* coaching institutes
* traditional consultancies

Visual direction:

* minimal
* European academic aesthetic
* typography-focused
* structured layouts
* premium whitespace
* soft neutral color palette

---

# Current Package Structure

## Foundation Package

Focus:

* branding
* trust building
* lead generation
* premium launch presence

## Growth Package

Focus:

* operational workflows
* student dashboards
* counsellor systems
* document management
* internal operations

## Advanced Package

Focus:

* automation
* AI integrations
* analytics
* scalable systems
* advanced workflows

---

# Important Product Direction

Future scalable space should remain available for:

* AI Readiness Assessment
* AI University Matching
* AI SOP Guidance
* AI Profile Evaluation
* AI Dashboard Systems
* AI Career Strategy

However:
avoid prematurely implementing complex AI systems.

---

# Engineering Mindset

Prioritize:

* clean architecture
* calm UX
* maintainability
* scalable workflows
* operational clarity
* production readiness

Do NOT optimize for:

* unnecessary complexity
* hype architecture
* excessive abstraction
* enterprise patterns too early

When making decisions:
optimize for the current business stage while preserving future scalability.

```

---

