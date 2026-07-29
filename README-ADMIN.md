# Decap CMS Admin Dashboard

This project uses **Decap CMS** (formerly Netlify CMS) to let you edit site content through a visual admin interface at `/admin`.

## How to Access

### Local Development
1. Run `npm run dev`
2. Visit `http://localhost:3000/admin`
3. You'll need to set up a local backend proxy (see "Local Backend" below)

### Production (Vercel/Netlify)
1. Deploy the site to Vercel or Netlify
2. Visit `https://your-site.com/admin`
3. Authenticate with GitHub

## Setup Requirements

### Option 1: GitHub OAuth App (Recommended for Vercel)

1. Go to GitHub Settings → Developer settings → OAuth Apps → **New OAuth App**
2. Fill in:
   - **Application name**: `DAV CMS`
   - **Homepage URL**: `https://your-site.com` (or `http://localhost:3000` for dev)
   - **Authorization callback URL**: `https://api.github.com/oauth/authorize`
3. Click **Register application**
4. Copy the **Client ID** and generate a **Client Secret**
5. Add these as environment variables in your hosting dashboard:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`

### Option 2: Netlify Identity + Git Gateway (Recommended for Netlify)

1. In your Netlify site dashboard, go to **Identity** → **Enable Identity**
2. Go to **Settings & Usage** → **Services** → **Git Gateway** → **Enable Git Gateway**
3. In `public/admin/config.yml`, change the backend to:
   ```yaml
   backend:
     name: git-gateway
   ```

## What You Can Edit

| Collection | What it edits | File |
|------------|--------------|------|
| **Site Content (EN)** | Hero, About, Contact, Footer text | `messages/en.json` |
| **Site Content (AR)** | Arabic versions of above | `messages/ar.json` |
| **Services (EN)** | 6 service cards on homepage | `messages/en.json` → `servicesData` |
| **Services (AR)** | Arabic service cards | `messages/ar.json` → `servicesData` |
| **Projects (EN)** | 4 project cards on homepage | `messages/en.json` → `projectsData` |
| **Projects (AR)** | Arabic project cards | `messages/ar.json` → `projectsData` |

## How Publishing Works

- Every save in Decap CMS creates a **real Git commit** to your repository
- This triggers an automatic redeploy on Vercel/Netlify (takes ~1-2 minutes)
- Changes are **not instant** — there's a short delay while the site rebuilds

## Local Backend (for development)

For local testing, you can use Decap's local backend:

1. Install the local backend: `npx decap-server`
2. In `public/admin/config.yml`, uncomment: `local_backend: true`
3. Run both the dev server and the local backend simultaneously

## Important Notes

- **SVG icons** in the Services section are hardcoded in `components/features.tsx` — they cannot be edited via the CMS. Only the text (title, body) and image paths are editable.
- **Image paths** in the CMS should be relative to `/public/images/` (e.g., `/images/services/general-contracting.jpg`)
- The **Detailed Projects** collection (for the `/projects` page) is read-only from the CMS since the data is hardcoded in `app/[locale]/(default)/projects/page.tsx`