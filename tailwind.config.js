/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/public/css/image/index/hero/banner.png')",
        'banner__mini': "url('/image/index/hero/banner.png')",
      }
    },
  },
  plugins: [],
}

