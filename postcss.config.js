module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        'Chrome >= 60',
        'Firefox ESR',
        'Edge >= 79',
        'Safari >= 12',
        'iOS >= 12',
        'Android >= 6'
      ]
    }),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: false,
          removeAllButFirst: true
        }
      }]
    })
  ]
};
