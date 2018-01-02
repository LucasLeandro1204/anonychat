const glob = require('glob-all');
const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const purgecssPlugin = require('purgecss-webpack-plugin');

mix.js('resources/assets/js/app.js', 'public/js')
  .options({
    extractVueStyles: 'public/css/app.css',
    postCss: [
      tailwindcss('./tailwind.config.js'),
    ]
  });

if (! mix.inProduction()) {
  return;
}

mix.webpackConfig({
  plugins: [
    new purgecssPlugin({
      paths: glob.sync([
        path.join(__dirname, 'resources/assets/js/**/*.vue')
      ]),

      extractors: [
        {
          extractor: class {
            static extract(content) {
              return content.match(/[A-z0-9-:\/]+/g) || [];
            }
          },

          extensions: ['html', 'js', 'vue']
        }
      ]
    })
  ]
});
