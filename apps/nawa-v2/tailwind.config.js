const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
    },
    extend: {
      colors: {
        background: '#FFFFFF',
        'red-bg': '#FCEDEE',
        'accept-text': '#26A779',
        'accept-bg': '#D4EDDA',
        'red-text': '#C02534',
        'waiting-bg': '#FFF3CD',
        'waiting-text': '#EAB400',
        surface: '#FFFFFF',
        'surface-bright': '#FFFFFF',
        'surface-light': '#EEEEEE',
        'surface-variant': '#424242',
        'on-surface-variant': '#EEEEEE',
        primary: '#03D1AB',
        'primary-inactive': '#B2E6D7',
        'primary-darken-1': '#2D5FA5',
        'primary-darken-2': '#005364',
        'primary-darken-overlay': '#00536499',
        'primary-light': '#F0FAF7',
        'primary-light-2': '#E5FEF9',
        'border-primary-light': '#03D1AB',
        secondary: '#F5F5F5',
        'secondary-border': '#E0E0E0',
        'secondary-darken-1': '#828282',
        'yellow-btn': '#F7CF51',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        default: '#333333',
        separate: 'rgba(255, 255, 255, 0.13)',
        'card-bg': 'rgba(0, 83, 100, 0.6)',
        'light-gray': '#BCBCBC',
      },
      borderColor: {
        default: `var(--border-color, #000000)`,
        gray: `var(--border-gray, #E0E0E0)`,
      },
    },
    fontFamily: {
      arial: ['"29LTBukra'],
    },
  },
  plugins: [require('tailwindcss-animate'), require('flowbite/plugin')],
};
