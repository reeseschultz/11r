module.exports = config => {
  const markdownIt = new require('markdown-it')({
    typographer: true,
    linkify: true,
  });

  const markdownItAnchor = require('markdown-it-anchor');
  markdownIt.use(markdownItAnchor);

  config.setLibrary('md', markdownIt);

  config.addPlugin(require('eleventy-plugin-nesting-toc'), {
    tags: ['h3', 'h4', 'h5'],
    ul: false
  });

  config.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
  config.addPlugin(require("@11ty/eleventy-plugin-rss"));

  config.addFilter('dateDisplay', require('./filters/date-display.js'));

  config.addPassthroughCopy({ public: './' });

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  });

  config.setDataDeepMerge(true);

  config.addCollection('postsWithoutDrafts', (collection) =>
    [...collection.getFilteredByGlob('src/posts/*.md')].filter(
      (post) => !post.data.draft
    )
  );

  return {
    pathPrefix: require('./src/globals/site.json').baseUrl,
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'includes/layouts',
      data: 'globals',
    },
  };
};
