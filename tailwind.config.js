/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        teal:   { 50:'#effcfc',100:'#d6f5f5',200:'#b2eaeb',300:'#7ddadb',400:'#41bfc2',500:'#26a3a7',600:'#1d838c',700:'#1c6971',800:'#1d565c',900:'#1c4850',950:'#0d2e34' },
        amber:  { 50:'#fffbeb',100:'#fef3c7',200:'#fde68a',300:'#fcd34d',400:'#fbbf24',500:'#f59e0b',600:'#d97706',700:'#b45309',800:'#92400e',900:'#78350f' },
        cream:  { 50:'#fdfcf8',100:'#faf7f0',200:'#f5efe0',300:'#ede3c8',400:'#e2d3a8',500:'#d4bf86' },
        forest: { 50:'#f2f7f4',100:'#e0ede6',200:'#c3dbd0',300:'#97c2b0',400:'#65a48c',500:'#458970',600:'#356d5a',700:'#2c5848',800:'#254739',900:'#1f3b30' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      borderRadius: { '4xl': '2rem', '5xl': '2.5rem' },
      boxShadow: {
        'glow-teal':   '0 0 40px -8px rgba(38,163,167,0.35)',
        'glow-amber':  '0 0 40px -8px rgba(245,158,11,0.35)',
        'card':        '0 2px 16px -2px rgba(15,40,50,0.10), 0 1px 4px -1px rgba(15,40,50,0.06)',
        'card-hover':  '0 8px 32px -4px rgba(15,40,50,0.16), 0 2px 8px -2px rgba(15,40,50,0.08)',
        'inner-soft':  'inset 0 2px 8px rgba(0,0,0,0.06)',
      },
      keyframes: {
        'fade-up':    { '0%':{ opacity:0, transform:'translateY(16px)' }, '100%':{ opacity:1, transform:'translateY(0)' } },
        'fade-in':    { '0%':{ opacity:0 }, '100%':{ opacity:1 } },
        'slide-left': { '0%':{ opacity:0, transform:'translateX(20px)' }, '100%':{ opacity:1, transform:'translateX(0)' } },
        'pop':        { '0%':{ transform:'scale(0.94)', opacity:0 }, '100%':{ transform:'scale(1)', opacity:1 } },
        'pulse-soft': { '0%,100%':{ opacity:1 }, '50%':{ opacity:.6 } },
        'shimmer':    { '0%':{ backgroundPosition:'-200% 0' }, '100%':{ backgroundPosition:'200% 0' } },
        'spin-slow':  { '0%':{ transform:'rotate(0deg)' }, '100%':{ transform:'rotate(360deg)' } },
        'float':      { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-8px)' } },
        'marquee':    { '0%':{ transform:'translateX(0%)' }, '100%':{ transform:'translateX(-50%)' } },
      },
      animation: {
        'fade-up':    'fade-up 0.5s ease-out both',
        'fade-in':    'fade-in 0.4s ease-out both',
        'slide-left': 'slide-left 0.4s ease-out both',
        'pop':        'pop 0.3s cubic-bezier(0.34,1.56,0.64,1) both',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'shimmer':    'shimmer 2s linear infinite',
        'spin-slow':  'spin-slow 12s linear infinite',
        'float':      'float 4s ease-in-out infinite',
        'marquee':    'marquee 28s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
