/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // fontSize: {
      //   base: '18px', // Sets the base font size to 18px
      // },
      colors: {
        // light theme
        lightbg: "#F2F2F2",
        lightheading: "#262626",
        lighttext: "#808080",
        lighthighlight: "#AAAAAA",
        // dark theme
        darkbg: "#121212",
        darkheading: "#D9D9D9",
        darktext: "#737373",
        darkhighlight: "#404040",
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-quotes': 'none', // Disables the custom quotes from typography plugin
            'blockquote p:first-of-type::before': false, // Removes the before quote
            'blockquote p:last-of-type::after': false, // Removes the after quote
            blockquote: {
              color: '#6B7280',
              fontStyle: 'normal', // Ensures blockquotes are not italicized
            },
            a: {
              color: '#318CE7', // Use the blue color you want for links
              textDecoration: 'none', // Removes underline from links
              fontWeight: 'normal', // Ensures links are not bold
            },
            // Add other styles you wish to override here
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")({
    // Other plugin options can go here
  })],
};
