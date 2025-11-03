export const lightTheme = {
  background: "#fdfbf7",
  surface: "#ffffff",
  card: "#ffffff",
  cardBorder: "#e4dfd7",

  primaryText: "#2f1039",
  secondaryText: "#7c5e80",

  button: "#3b1d4d",
  buttonText: "#ffffff",

  border: "#e4dfd7",
  hover: "#f4f1eb",
  disabled: "#ddd5ce",

  error: "#D64545",
  success: "#3b8e3c",

  inputText: "#3b1d4d",
  navBorder: "#e4dfd7",

  tabBar: {
    background: "#f8f6f0",
    borderTopColor: "#e4dfd7",
    activeTint: "#3b1d4d",
    inactiveTint: "#a18c9f",
  },
};

export const darkTheme = {
  background: "#000000",
  surface: "#121212",
  card: "#121212",
  cardBorder: "#1E1E1E",

  primaryText: "#F5F5F5",
  secondaryText: "#AAAAAA",

  button: "#B47FD4",
  buttonText: "#FFFFFF",

  border: "#1E1E1E",
  hover: "#1A1A1A",
  disabled: "#444",

  error: "#FF5F5F",
  success: "#7ED957",

  inputText: "#F5F5F5",
  navBorder: "#1A1A1A",

  tabBar: {
    background: "#000000",
    borderTopColor: "#1A1A1A",
    activeTint: "#B47FD4",
    inactiveTint: "#555",
    fab: "#555",
  },
};

export type Theme = typeof lightTheme;
