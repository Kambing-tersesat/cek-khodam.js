/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@catppuccin/tailwindcss')
    ({
      prefix: "ctp",
      defaultFlavour: "mocha",
    }),
    require('daisyui')
  ],
  daisyui: {
    themes: ["dark"],
  },
}

