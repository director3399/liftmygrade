# AGENTS.md

# LiftmyGrade — AI Agent Operating Instructions

This repository uses AI-assisted engineering workflows through Antigravity skills and structured project documentation.

Before making major frontend, backend, UX, architecture, or workflow decisions, agents should first load and follow the project context skill:

- liftmygrade-context

The skill contains:
- business positioning
- UX philosophy
- architecture direction
- backend conventions
- frontend rendering rules
- scalability guidance
- product philosophy

---

# Important Project Context

LiftmyGrade is NOT a traditional study abroad consultancy website.

The platform should feel like:
- premium academic ecosystem
- structured mentorship platform
- research-oriented education system
- modern global academic brand

Avoid:
- coaching-center aesthetics
- consultancy clutter
- aggressive sales UX
- excessive visual noise
- overloaded sections

The platform focuses on:
- Bachelor’s Abroad
- Master’s Abroad
- PhD
- Research Support
- Career Branding

---

# Core Engineering Priorities

Always optimize for:
- maintainability
- predictable rendering
- scalability
- operational clarity
- calm UX
- structured workflows
- production readiness

Avoid:
- overengineering
- premature microservices
- excessive abstractions
- unnecessary global state
- hype-driven architecture

---

# Frontend Rules

Preferred stack:
- Next.js App Router
- Server Components first
- Tailwind CSS
- shadcn/ui
- React Query
- Zod
- Framer Motion (minimal usage)

Frontend principles:
- loading state != empty state
- use skeleton loaders
- avoid hydration flickers
- minimize client-side fetching
- centralize API calls
- separate loading/error/empty/success states

Never:
- show "No Data" while loading
- expose raw backend/server errors
- create unnecessary rerenders
- fetch duplicate data

---

# Backend Rules

Preferred backend architecture:
- route/controller layer
- service layer
- repository/data layer
- validation layer

Backend principles:
- centralized validation
- standardized API responses
- centralized error handling
- structured logging
- scalable workflows
- maintainable modules

Always:
- validate with Zod
- return predictable responses
- use user-friendly error messages
- preserve role-based architecture patterns

Never:
- expose raw DB errors
- mix business logic into route handlers
- create tightly coupled modules

---

# Architecture Philosophy

Prefer:
- feature-based modules
- deep modules
- explicit workflows
- maintainable abstractions
- scalable patterns

Avoid:
- shallow utility fragmentation
- unnecessary abstractions
- excessive nesting
- premature optimization

The project should scale gradually without requiring architectural rewrites.

---

# UX Philosophy

The UX should feel:
- calm
- structured
- premium
- whitespace-heavy
- academically modern
- mentor-guided

Important UX goals:
- reduce cognitive overload
- improve readability
- guide users progressively
- maintain trust throughout the flow

Avoid:
- excessive animations
- loud interfaces
- cluttered layouts
- confusing workflows

---

# AI & Future Scalability

The architecture should preserve future integration space for:
- AI readiness assessment
- AI university matching
- AI SOP guidance
- AI profile evaluation
- AI dashboards
- AI operational systems

However:
do NOT prematurely introduce complex AI systems or infrastructure.

---

# Package Structure

## Foundation Package
Focus:
- branding
- trust building
- lead generation
- premium launch presence

## Growth Package
Focus:
- dashboards
- operational workflows
- counsellor systems
- student management
- internal operations

## Advanced Package
Focus:
- automation
- analytics
- scalable systems
- AI integrations
- advanced operational workflows

---

# Decision-Making Guidance

When suggesting architecture or implementation changes:

1. Optimize for the current business stage
2. Preserve future scalability
3. Prioritize maintainability over cleverness
4. Preserve UX consistency
5. Reduce operational complexity
6. Avoid unnecessary infrastructure complexity

Always think like:
- product engineer
- system designer
- UX-aware developer

Not:
- framework maximalist
- architecture hype engineer

---

