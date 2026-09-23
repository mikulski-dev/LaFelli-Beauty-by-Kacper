## Execution speed

Move fast. Make the change and stop — don't screenshot, restart servers, curl-check,
re-read files back, or otherwise self-verify after routine edits (copy changes, font/style
swaps, small component tweaks). The user reviews the result themselves and will tell you
if something's wrong. Reserve verification (dev server + screenshot) for genuinely
non-trivial new features where you have no other way to know if it works — not as a
default habit after every edit. When in doubt, ship it and let the user react.

## Brand & copy reference

This site is now built for Lafeli Beauty (a beauty/massage therapist business run by Lili
in Willaston, Cheshire), not the original Hox Box Design & Build client. The old
`docs/brand/` directory (copywriting.md, company-profile.md, design-principles.md,
onboarding-brief.md, section-build-standard.md, etc.) was Hox Box-specific and has been
deleted so it doesn't mislead future edits. Lafeli Beauty doesn't yet have an equivalent
set of brand docs — the source of truth for now is the client content and writing rules
supplied directly in the task that repurposed this site (British English, no em/en dashes,
short plain sentences, no hype words, brand colours black/white/rose #DE9996, Cormorant
Garamond + Jost typefaces). Treat the components under `src/components/` as the current
reference for section structure and copy tone until a proper brand doc exists.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
