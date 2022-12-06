type Theme = "system" | "light" | "dark";

function setColorTheme(newTheme: Theme) {
  useColorMode().preference = newTheme;
}

function getColorTheme(): Theme {
  return useColorMode().value as Theme;
}

export { getColorTheme, setColorTheme };
