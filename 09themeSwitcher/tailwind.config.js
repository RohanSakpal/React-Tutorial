// tailwind.config.js
export default {
    darkMode: "class", // Enables class-based dark mode
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Tells Tailwind to scan these files for class names
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  