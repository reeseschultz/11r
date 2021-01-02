# 11r

[![Discord Shield](https://discordapp.com/api/guilds/732665868521177117/widget.png?style=shield)](https://discord.gg/CZ85mguYjK)

America's favorite [Eleventy](https://www.11ty.dev) blog template. Built by [Reese Schultz](https://github.com/reeseschultz).

View the [demo](https://reeseschultz.github.io/11r/).

## Features

- [Eleventy](https://www.11ty.dev) for static site generation. See `.eleventy.js`.
- [Nunjucks](https://mozilla.github.io/nunjucks/) for templating.
- [TailwindCSS](https://tailwindcss.com/) for utility-first styling. See `tailwind.config.js` and `src/styles/tailwind.css`.
- [Prism](https://prismjs.com/) syntax highlighting for code with copy button scripting included via [clipboard.js](https://clipboardjs.com/). See `src/styles/base.css` for the theme; and `src/scripts/copy.js`, which is used by `main.js`.
- [Rollup](https://rollupjs.org) for bundling and compiling. See `rollup.config.js`.
- JavaScript-based privacy policy notice dismissal handling. See `src/scripts/privacy-policy.js`, which is used by `main.js`.
- [Tags](https://www.11ty.dev/docs/collections/).
- [Pagination](https://www.11ty.dev/docs/pagination/).
- Deploy script for [GitHub Pages](https://pages.github.com/) via `deploy.sh`, using the `gh-pages` branch. Be sure to edit said script to work with your repository. Remember to also configure the repository appropriately.
- Exemplary [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) usage.
- SEO mostly done for you. Ensure you replace the data referenced in `src/globals/site.json`, including the images in `public/`.

## Setup

1. `git clone git@github.com:reeseschultz/11r.git`
1. `cd 11r && npm i`
1. `npm run dev` to serve the site.
1. `npm run build` to build the site.
1. `./deploy.sh` to deploy the site to GitHub Pages (includes build).

## Tag Styling

Tags are styled in `src/styles/tags.css`. Coloring custom tags works as such:

```css
...

.tag.beer {
  @apply bg-blue-700;
}

.tag.spirituality {
  @apply bg-indigo-700;
}

.tag.orcas {
  @apply bg-purple-700;
}

...
```

## Credits

- This project was forked from [11ty Starter](https://github.com/mattwaler/eleventy-starter) by [Matt Waler](https://mattwaler.com/).
- The code copying script was adapted from [https://codepen.io/wilbo/pen/xRVLOj](https://codepen.io/wilbo/pen/xRVLOj) by [Wilbert Schepenaar](https://wilbert.dev/).
- SEO handling was inspired from [Skeleventy](https://github.com/josephdyer/skeleventy) by [Joseph Dyer](https://github.com/josephdyer).

## Contributing

Find a problem, or have an improvement in mind? Great. Go ahead and submit a pull request. Note that the maintainer offers no assurance he will respond to you, fix bugs or add features on your behalf in a timely fashion, if ever. All that said, [GitHub Issues](https://github.com/reeseschultz/11r/issues/new/choose) is fine for constructive discussion.

By submitting a pull request, you agree to license your work under [this project's MIT license](https://github.com/reeseschultz/11r/blob/main/LICENSE).
