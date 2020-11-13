const siteSettings = require('./src/globals/site.json');

module.exports = (config) => {
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
    pathPrefix: siteSettings.baseUrl,
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'includes/layouts',
      data: 'globals',
    },
  };
};
