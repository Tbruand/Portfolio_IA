module.exports = {
  darkMode: 'class', // Permet de basculer le mode sombre avec la classe 'dark'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Inclut tous les fichiers React
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};
