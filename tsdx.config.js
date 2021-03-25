// const postcss = require('rollup-plugin-postcss');
// const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');
const replace = require('@rollup/plugin-replace');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      replace({
        values: {
          'process.env.DEBUG': 'true',
        },
      })
      //   postcss({
      //     plugins: [
      //       autoprefixer(),
      //       cssnano({
      //         preset: 'default',
      //       }),
      //     ],
      //     inject: false,
      //     // only write out CSS for the first bundle (avoids pointless extra files):
      //     extract: !!options.writeMeta,
      //   })
    );
    return config;
  },
};
