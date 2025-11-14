import { ExerciseProvider } from "@/context/ExerciseContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ExerciseProvider>{children}</ExerciseProvider>
    </ThemeProvider>
  );
}
