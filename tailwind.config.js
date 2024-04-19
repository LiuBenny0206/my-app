/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Using 'class' mode
  content: ["./src/**/*.{js,jsx}"], // Scans .js and .jsx files in the src folder
  theme: {
    extend: {
      backgroundImage: theme => ({
        'check-gradient': 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      }),
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        'animate-in': 'animate-in 1s ease-out forwards'
      },
      keyframes: {
        'animate-in': {
          from: {
            opacity: 0,
            transform: 'translateY(-20px)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      },
      backgroundColor: {
        'black-60': 'rgba(0, 0, 0, 0.6)'
      },
      margin: {
        '10p': '10%',  // 为水平和垂直边距添加 10% 的类
      },

    },
  },
  plugins: [],
}
