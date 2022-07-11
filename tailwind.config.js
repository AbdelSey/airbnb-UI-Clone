/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        house: 'url("/src/assets/images/home.jpg")',
        personBG: 'url("/src/assets/images/person-bg.jpg")',
        room1: 'url("/src/assets/images/room1.jpg")',
        room2: 'url("/src/assets/images/room2.jpg")',
        room3: 'url("/src/assets/images/room3.jpg")',
        person1: 'url("/src/assets/images/person1.jpg")',
        person2: 'url("/src/assets/images/person2.jpg")',
        person3: 'url("/src/assets/images/person3.jpg")',
        home2: 'url("/src/assets/images/home2.jpg")',
        home3: 'url("/src/assets/images/home3.jpg")',
        home4: 'url("/src/assets/images/home4.jpg")',
      },
    },
  },

  plugins: [],
};
