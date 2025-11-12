import { darkTheme, lightTheme, Theme } from "@/constants/theme";
import { createContext, ReactNode, useContext, useState } from "react";

export type ThemeType = "light" | "dark";

const themes: Record<ThemeType, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};

type ThemeContextType = {
  theme: Theme;
  themeType: ThemeType;
  setThemeType: (theme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeType, setThemeType] = useState<ThemeType>("light");

  const theme = themes[themeType];

  return (
    <ThemeContext.Provider value={{ theme, themeType, setThemeType }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be inside ThemeProvider");
  return context;
};
