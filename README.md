# EduT Scholarship Website

Source: exported from v0 and prepared for GitHub/Vercel deployment.

## Local development

Requires Node.js 20+ and pnpm.

```bash
corepack enable
pnpm install
pnpm dev
```

Production build: `pnpm build`.

## Deploy to Vercel

1. Push this folder to a new GitHub repository, for example `edut-website`. Keep it separate from the iOS app repository.
2. Import the repository to a new Vercel project. Framework: Next.js, root directory: `/`.
3. Deploy and verify the temporary `.vercel.app` URL.
4. Add `edut.timurhasanov.com` in Project Settings → Domains.
5. In Namecheap Advanced DNS, add the exact DNS record Vercel displays. Do not change DNS for the root domain.

## Required prelaunch checks

- **Contact email** in `lib/site.ts` is set to `timur_dev@icloud.com` (provided by the site owner). Confirm the mailbox receives messages before publishing. The website contact form opens a local email app; it does not submit messages to a server.
- Review `/privacy` and `/terms` with the real application's data collection, advisor policies and business model before publication.
- App Store badges intentionally say coming soon; update only after Apple approves the app and you have the verified App Store URL.
- Some app mockups are illustrative, not screenshots from the released app.
- AI capabilities are described as upcoming, not live features.
- Run `pnpm build` and test navigation and mobile layouts. A full build was not run in the packaging environment because dependencies were not installed.

## Domain

Intended: https://edut.timurhasanov.com — not yet verified or deployed.

## AWS + Jira Cloud planning

See [AWS architecture and Jira Cloud backlog](docs/AWS_JIRA_ROADMAP.md). These are planning resources, **not** a claim of live AWS infrastructure or an active Jira Cloud board.

### EduT product team Jira workflow

See [EduT Jira Cloud delivery workflow](docs/EDUT_JIRA_WORKFLOW.md) for proposed issue types, board stages and coordination across two developers and one marketing specialist. This is a workflow specification, not a connected Jira project.
