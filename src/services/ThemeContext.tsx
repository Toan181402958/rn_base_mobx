import React, {createContext, useContext, useState} from 'react';

// Định nghĩa kiểu cho context value
type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: string;
};
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

// Định nghĩa props cho ThemeProvider
type ThemeProviderProps = {
  children: React.ReactNode;
};
export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const colors: any = isDarkMode
    ? {
        background: '#121212',
        text: '#ffffff',
        primary: '#BB86FC',
      }
    : {
        background: '#ffffff',
        text: '#121212',
        primary: '#6200ee',
      };
  const value: ThemeContextType = {
    isDarkMode,
    toggleTheme,
    colors,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('');
  }
  return context;
};
