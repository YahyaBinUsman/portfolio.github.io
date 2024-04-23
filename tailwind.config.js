module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'futuristic-black': '#101820', // Deep, rich black
        'futuristic-gold': '#ffc700  ',  // Vibrant, shiny gold
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'headline': ['Georgia', 'Times New Roman', 'serif']
      },
      boxShadow: {
        'around': '0 4px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
}
