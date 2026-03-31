# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

There are no tests configured in this project.

## Environment Variables

Create a `.env` file at the root with:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
GMAIL_USER=
GMAIL_APP_PASSWORD=
```

## Architecture

This is a **Next.js 16 portfolio/agency site** using the App Router with TypeScript and Tailwind CSS v4.

### Data Flow

- **Projects data** is fetched from **Supabase** (see `app/lib/supabase.ts` for the client). The `Project` interface is defined in `app/types/project.ts` — fields include `id`, `name`, `excerpt`, `description`, `thumbnail`, `hero`, `images[]`, and `url`.
- **Contact form** (`app/components/ContactForm.tsx`) submits to the API route `app/api/contact/route.ts`, which sends email via Nodemailer using Gmail credentials.

### Key Structural Conventions

- All components live in `app/components/`, organized by feature subdirectory (e.g., `Homepage/`, `Footer/`).
- Pages are in `app/` using App Router conventions (`about/page.tsx`, `projects/page.tsx`, etc.).
- The `@/*` path alias maps to the project root.
- Tailwind CSS v4 is configured via `@tailwindcss/postcss` in `postcss.config.mjs` — use standard Tailwind utility classes directly in JSX.

### Deployment

Recommended deployment target is **Vercel**. The `.env` variables must be set in the Vercel project settings.
