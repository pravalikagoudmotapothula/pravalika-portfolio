import { useState, useEffect } from 'react';

export const THEMES = [
  {
    id: 'midnight-purple',
    name: 'Midnight Purple',
    description: 'Dark navy, violet & electric purple',
    colors: ['#090a16', '#8b5cf6', '#c084fc'],
    type: 'dark',
  },
  {
    id: 'ocean-blue',
    name: 'Ocean Blue',
    description: 'Deep blue, cyan & white',
    colors: ['#050c18', '#06b6d4', '#38bdf8'],
    type: 'dark',
  },
  {
    id: 'emerald-green',
    name: 'Emerald Green',
    description: 'Dark green, emerald & mint',
    colors: ['#04120a', '#10b981', '#34d399'],
    type: 'dark',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    description: 'Charcoal, coral, orange & pink',
    colors: ['#110c13', '#f97316', '#f43f5e'],
    type: 'dark',
  },
  {
    id: 'minimal-light',
    name: 'Minimal Light',
    description: 'White, slate & royal blue',
    colors: ['#f8fafc', '#2563eb', '#4f46e5'],
    type: 'light',
  },
];

const THEME_STORAGE_KEY = 'pravalika_portfolio_theme';

export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved && THEMES.some(t => t.id === saved)) {
        return saved;
      }
    }
    return 'midnight-purple';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // LocalStorage access handling
    }
  }, [theme]);

  const setTheme = (newThemeId) => {
    if (THEMES.some(t => t.id === newThemeId)) {
      setThemeState(newThemeId);
    }
  };

  const currentThemeInfo = THEMES.find(t => t.id === theme) || THEMES[0];

  return {
    theme,
    setTheme,
    themes: THEMES,
    currentThemeInfo,
  };
}
