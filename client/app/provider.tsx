import { ExerciseProvider } from "@/context/ExerciseContext";
import { RoutineProvider } from "@/context/RoutineContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { UserProvider } from "@/context/UserContext";
import { WorkoutProvider } from "@/context/WorkoutContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <WorkoutProvider>
          <RoutineProvider>
            <ExerciseProvider>{children}</ExerciseProvider>
          </RoutineProvider>
        </WorkoutProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
