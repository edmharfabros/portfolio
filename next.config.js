const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
  assetPrefix: isProd ? 'https://edmharfabros.github.io/portfolio/' : '',
};