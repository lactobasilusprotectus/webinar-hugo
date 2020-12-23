let mix = require('laravel-mix');

mix.postCss('./src/main.css', 'css');

mix.js('./src/main.js', 'js');

mix.options({
    processCssUrls: false,
    postCss: [
        require('tailwindcss'),
    ]
}).setResourceRoot('..')
    .setPublicPath('./assets');