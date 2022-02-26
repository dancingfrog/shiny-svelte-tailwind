const autoprefixer = require('autoprefixer');
const postcssimport = require('postcss-import');
const tailwindcss = require('tailwindcss');

const config = {
    plugins: (!!process.env.NODE_ENV && process.env.NODE_ENV.match(/dev/) !== null) ?
        [
            // autoprefixer,
            // postcssimport,
            // tailwindcss
        ] : [
            autoprefixer,
            postcssimport,
            tailwindcss
        ]
}

module.exports = config;
