import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './theme.config.tsx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E3A5F',
          900: '#0F172A',
          950: '#020617',
        },
        earnings: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        warm: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        surface: {
          light: '#FFFFFF',
          DEFAULT: '#F8FAFC',
          dark: '#0F172A',
          'dark-alt': '#1E293B',
          'dark-card': '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '2xl': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        '3xl': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        '4xl': ['2.5rem', { lineHeight: '3rem', fontWeight: '800' }],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'premium': '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -2px rgba(59, 130, 246, 0.1)',
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #1E3A5F 0%, #3B82F6 100%)',
        'gradient-earnings': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      }
    }
  },
  plugins: []
}

export default config