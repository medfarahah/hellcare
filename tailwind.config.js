/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A90E2',
          dark: '#2C5F8D',
          light: '#E8F4FF',
        },
        success: '#5CB85C',
        warning: '#F0AD4E',
        error: '#D9534F',
        info: '#7B68EE',
        neutral: {
          bg: '#F8F9FA',
          text: '#212529',
          textSecondary: '#6C757D',
          border: '#DEE2E6',
        }
      },
      fontSize: {
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
      },
      minHeight: {
        'touch': '48px',
      },
      minWidth: {
        'touch': '48px',
      }
    },
  },
  plugins: [],
}



