# 11r

America's favorite [Eleventy](https://www.11ty.dev) blog template.

[View the demo 👀...](https://reeseschultz.github.io/11r/)

## Features

- [Eleventy](https://www.11ty.dev) for static site generation. See `.eleventy.js`.
- [Nunjucks](https://mozilla.github.io/nunjucks/) for templating.
- [TailwindCSS](https://tailwindcss.com/) for utility-first styling. See `tailwind.config.js` and `src/styles/tailwind.css`.
- [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor) for generating anchors for headings.
- [eleventy-plugin-nesting-toc](https://www.npmjs.com/package/eleventy-plugin-nesting-toc) for generating tables of contents from anchors. See [this page](https://reeseschultz.github.io/11r/post/lorem-ipsum/) for a demo.
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
  @apply bg-blue-500;
}

.tag.spirituality {
  @apply bg-indigo-500;
}

.tag.orcas {
  @apply bg-purple-500;
}

...
```

## Credits

- The code copying script was adapted from [https://codepen.io/wilbo/pen/xRVLOj](https://codepen.io/wilbo/pen/xRVLOj) by [Wilbert Schepenaar](https://wilbert.dev/).
- SEO handling was inspired from [Skeleventy](https://github.com/josephdyer/skeleventy) by [Joseph Dyer](https://github.com/josephdyer).

## License

All contributions to this repository are licensed under [MIT](https://github.com/reeseschultz/11r/blob/master/LICENSE).
