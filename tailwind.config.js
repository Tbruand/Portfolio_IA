module.exports = {
  darkMode: 'class', // Permet de basculer le mode sombre avec la classe 'dark'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclut tous les fichiers React
  ],
  theme: {
    extend: {
      colors: {
        darkmode: "#071E3F",
        darkmode_500: "#071830",
        darkmode_400: "#1a3868"        
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')
  ],
};