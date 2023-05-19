import React, { createContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("darkLightMode") || "light"
  );

  const toggleTheme: ThemeContextType["toggleTheme"] = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("darkLightMode", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem("darkLightMode", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
