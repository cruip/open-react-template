/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // Only rewrite the bare /admin route to the static Decap entry
        // point. Do NOT add a second rule for /admin/:path* — that
        // previous rule rewrote every sub-path (including config.yml) to
        // itself, which is a no-op that still forces Next.js to treat the
        // request as an internal route lookup instead of a direct static
        // file passthrough. With no matching page for that lookup, Next
        // falls back to the app shell — which is exactly why
        // /admin/config.yml was returning index.html instead of the real
        // YAML file, and why the CMS reported a "YAMLSyntaxError" whose
        // content was literally the site's HTML.
        //
        // Files under public/admin/ (config.yml, any CSS/JS Decap needs)
        // are served automatically by Next's static file handling once
        // this rewrite is no longer swallowing them — no rule needed for
        // them at all.
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};

module.exports = nextConfig;
