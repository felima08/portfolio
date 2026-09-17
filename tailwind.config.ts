import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace'],
      },
      colors: {
        'bg-void': 'var(--bg-void)',
        'bg-base': 'var(--bg-base)',
        'bg-elevated': 'var(--bg-elevated)',
        'bg-elevated-2': 'var(--bg-elevated-2)',
        line: 'var(--line)',
        'line-soft': 'var(--line-soft)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-strong': 'var(--accent-strong)',
        'accent-ink': 'var(--accent-ink)',
        emerald: 'var(--emerald)',
        indigo: 'var(--indigo)',
      },
      borderRadius: {
        badge: 'var(--r-badge)',
        control: 'var(--r-control)',
        panel: 'var(--r-panel)',
      },
      maxWidth: {
        content: 'var(--max-w)',
      },
    },
  },
  plugins: [],
}

export default config
