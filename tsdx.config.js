const { nodeResolve } = require('@rollup/plugin-node-resolve');

module.exports = {
  rollup(config, options) {
    config.plugins.push(nodeResolve());
    return config;
  },
};
