const isProd = (process.env.NODE_ENV || 'production') === 'production'


module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: isProd ? '/portfolio' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    )
    return config;
  },
};