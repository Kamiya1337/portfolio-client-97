/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F3F0EA',
        paper: '#EDE8DF',
        taupe: '#D6CAB8',
        beige: '#CFC4B4',
        charcoal: '#252422',
        obsidian: '#080807',
        'dark-surface': '#141412',
        'muted-dark': '#6F6A62',
        'muted-light': '#B8B2A8',
        'border-light': 'rgba(37, 36, 34, 0.16)',
        'border-dark': 'rgba(243, 240, 234, 0.16)',
        'stitch-ivory': '#F3F0EA',
        'stitch-paper-warm': '#EDE8DF',
        'stitch-taupe': '#D6CAB8',
        'stitch-beige': '#CFC4B4',
        'stitch-charcoal': '#252422',
        'stitch-obsidian': '#080807',
        'stitch-dark-surface': '#141412',
        'stitch-muted-dark': '#6F6A62',
        'stitch-muted-light': '#B8B2A8',
        'stitch-border-light': 'rgba(37, 36, 34, 0.16)',
        'stitch-border-dark': 'rgba(243, 240, 234, 0.16)',
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Be Vietnam Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        sidebar: '300px',
        'section-gap': '8rem',
      },
    },
  },
  plugins: [],
};
