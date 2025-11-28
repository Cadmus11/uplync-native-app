// ThemeContext.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme, View } from 'react-native';

const lightTheme = {
  background: 'bg-white',
  surface: 'bg-gray-100',
  primary: 'bg-purple-600',
  text: 'text-black',
  textSecondary: 'text-gray-600',
  border: 'border-gray-300',
};

const darkTheme = {
  background: 'bg-black',
  surface: 'bg-gray-900',
  primary: 'bg-purple-400',
  text: 'text-white',
  textSecondary: 'text-gray-400',
  border: 'border-gray-700',
};

type Theme = typeof lightTheme;

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const STORAGE_KEY = 'app_theme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === 'dark');

  // Load saved theme
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        setIsDark(saved === 'dark');
      } else {
        setIsDark(systemScheme === 'dark');
      }
    })();
  }, []);

  // Follow system changes if no manual choice
  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved === null && systemScheme) {
        setIsDark(systemScheme === 'dark');
      }
    })();
  }, [systemScheme]);

  const toggleTheme = async () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    await AsyncStorage.setItem(STORAGE_KEY, newIsDark ? 'dark' : 'light');
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <View className={theme.background + ' ' + theme.text}>{children}</View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};