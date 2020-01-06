module.exports = {
  buildConf: withTargets => {
    return {
      presets: [
        [
          "@babel/env",
          {
            ...(withTargets ? { targets: "defaults" } : null),
            corejs: 2,
            useBuiltIns: "entry",
            modules: false
          }
        ]
      ]
    };
  }
};
