/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'satoshi-light': ['Satoshi-Light', 'sans-serif'],
      'satoshi-light-italic': ['Satoshi-LightItalic', 'sans-serif'],
      'satoshi-regular': ['Satoshi-Regular', 'sans-serif'],
      'satoshi-italic': ['Satoshi-Italic', 'sans-serif'],
      'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
      'satoshi-medium-italic': ['Satoshi-MediumItalic', 'sans-serif'],
      'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
      'satoshi-bold-italic': ['Satoshi-BoldItalic', 'sans-serif'],
      'satoshi-black': ['Satoshi-Black', 'sans-serif'],
      'satoshi-black-italic': ['Satoshi-BlackItalic', 'sans-serif'],
      
      'satoshi-variable': ['Satoshi-Variable', 'sans-serif'],
      'satoshi-variable-italic': ['Satoshi-VariableItalic', 'sans-serif'],
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
      black: '900',
    },
    extend: {
      fontSize: {
        "display-large": "146px",
        "display-regular": "128px",
        "display-medium": "90px",
        "heading-large": "78px",
        "heading-regular": "64px",
        "heading-medium": "48px",
        "sub-heading-large": "42px",
        "sub-heading-regular": "36px",
        "body-large": "24px",
        "body-regular": "20px",
        "body-medium": "18px",
        "body-small": "16px",
        "caption-large": "12px",
        "caption-regular": "10px",
      },
      colors: {
        primary: {
          light: "rgba(236, 231, 225, 1)",
          dark: "rgb(0, 0, 0, 1)",
        },
        "dark-light": {
          light: "rgb(0, 0, 0, 1)",
          dark: "rgba(236, 231, 225, 1)",
        },
      },
    },
  },
  plugins: [],
}