import colors from 'tailwindcss/colors';

module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './src/layouts/**/*.astro',
    './src/pages/**/**/*.{html,js,jsx,ts,tsx,astro}',
    './src/components/**/**/**/**/*.{html,js,jsx,ts,tsx,astro}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'color-main': colors.stone,
        'color-secondary': colors.sky,
        'color-slate': colors.slate,
        'color-white': colors.white,
        'color-black': colors.black,
        'color-stone': colors.stone,
        'color-gray': colors.gray,
        'color-cyan': colors.cyan,
        'color-sky': colors.sky,
        'color-blue': colors.blue,
        'color-indigo': colors.indigo,
        'color-red': colors.red,
        'color-pink': colors.pink,
        'color-rose': colors.rose,
      },
    },
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
};
