import { createContext, ReactNode, useContext } from "react";

type WorkoutType = {};

const WorkoutContext = createContext<WorkoutType | null>(null);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WorkoutContext.Provider value={{}}>{children}</WorkoutContext.Provider>
  );
};

export const useWorkoutProvider = () => {
  const context = useContext(WorkoutContext);
  if (!context)
    throw new Error("useWorkoutProvider must be inside WorkoutProvider");

  return context;
};
