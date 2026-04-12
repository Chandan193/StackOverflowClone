import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark
      ? {
          // Dark Mode
          primary: "#1e88e5",
          primaryLight: "#42a5f5",
          primaryDark: "#1565c0",
          secondary: "#ff6b35",
          background: "#0a0e27",
          surface: "#1a1f3a",
          surfaceLight: "#2d3142",
          text: "#e0e0e0",
          textSecondary: "#a0a0a0",
          border: "#404858",
          success: "#4caf50",
          warning: "#ff9800",
          error: "#f44336",
          shadow: "rgba(0, 0, 0, 0.5)",
          hover: "rgba(255, 255, 255, 0.08)",
          active: "rgba(30, 136, 229, 0.2)",
        }
      : {
          // Light Mode
          primary: "#1e88e5",
          primaryLight: "#42a5f5",
          primaryDark: "#1565c0",
          secondary: "#ff6b35",
          background: "#ffffff",
          surface: "#f5f6f7",
          surfaceLight: "#fafbfc",
          text: "#1a1a1a",
          textSecondary: "#707070",
          border: "#d4d4d4",
          success: "#4caf50",
          warning: "#ff9800",
          error: "#f44336",
          shadow: "rgba(0, 0, 0, 0.1)",
          hover: "rgba(0, 0, 0, 0.05)",
          active: "rgba(30, 136, 229, 0.1)",
        },
  };

  return (
    <ThemeContext.Provider value={{ ...theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
