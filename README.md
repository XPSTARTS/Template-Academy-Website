# Ilmora Academy website template

A statically rendered seven-page Next.js academy website for Pakistani students and parents. The starter content is a showcase, not a real academy offer: update every example before using it for a client.
Two custom-generated WebP visuals are included in `public/images/` and referenced locally by the site.

## Local development

```bash
pnpm install
pnpm dev
```

The app uses Next.js App Router and can be type-checked with `pnpm typecheck` or statically exported with `pnpm build`.

## Client customization

Edit `lib/site-data.ts` to change the academy name, contact number, address, hours, courses, faculty and package details. The WhatsApp number is set via `phoneE164` (`923175188034`) in digits-only international format without `+`, with the matching display value in `phoneDisplay` (`+92 317 518 8034`). Update both together if the academy's number changes. Each course button automatically builds a prefilled WhatsApp message for that course.

The Gulberg, Lahore location, sample instructor biographies, course durations, packages and PKR fees are illustrative content. Verify the correct address, course availability, rates, qualifications, testimonials and claims before publishing. The social Instagram link is a generic example and should also be replaced.

Set `NEXT_PUBLIC_SITE_URL` to the final public HTTPS origin (without a trailing slash) before building for a client domain. This enables canonical links, absolute Open Graph images and sitemap URLs. Until then, the template intentionally avoids inventing a canonical/public domain. Update `public/manus-routes.json` whenever page routes change.

## Design and interactions

The interface uses an editorial collegiate style in pine green, warm ivory and saffron. Scroll reveals use Intersection Observer and remain visible for users who prefer reduced motion. A persistent WhatsApp entry point and course-specific enquiry actions are shared across the pages.
