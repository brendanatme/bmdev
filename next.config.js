module.exports = {
  /**
   * required for netlify deployments
   * see https://github.com/netlify/next-on-netlify
   */
  target: 'serverless',

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
