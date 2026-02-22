/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./components/**/**/*.vue"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          color: "var(--primary-color)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          500: "var(--primary-500)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)"
        },
        surface: {
          20: "var(--surface-20)",
          30: "var(--surface-30)",
          40: "var(--surface-40)",
          50: "var(--surface-50)",

          // in design it is also surface 20, but it is different from surface 20
          200: "var(--surface-200)"
        },
        info: {
          50: "var(--info-50)",
          100: "var(--info-100)"
        },
        success: {
          50: "var(--success-50)",
          100: "var(--success-100)"
        },
        warning: {
          50: "var(--warning-50)",
          100: "var(--warning-100)"
        },
        danger: {
          20: "var(--danger-20)",
          50: "var(--danger-50)",
          100: "var(--danger-100)"
        },
        yellow: {
          500: "var(--yellow-500)",
          600: "var(--yellow-600)"
        },
        black: "var(--black)",
        gray: {
          100: "var(--gray-100)",
          200: "var(--gray-200)"
        }
      },
      backgroundImage: {
        "radial-auth":
          "radial-gradient(50% 50% at 50% 50%, #CEDDFF 0%, #D4E2FF 100%)",
        "dark-radial-auth":
          "radial-gradient(50% 50% at 50% 50%, #1A3572 0%, #0A0F1A 100%)",
        "double-grad":
          "linear-gradient(0deg, #171922, #171922), linear-gradient(90deg, #0E1948 0%, #223CAE 100%)"
      },
      boxShadow: {
        card: "0px 4px 8px 0px #092D7B1F",
        "card-shadow": "0px 4px 8px 0px #092D7B1F",
        "auth-login": "0px 4px 68px 0px #00000029"
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"]
      }
    }
  },
  plugins: []
};
