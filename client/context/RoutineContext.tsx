import { Routine } from "@/types/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

type RoutineContextType = {
  routines: Routine[];
  addRoutine: (routine: Routine) => void;
  deleteRoutine: (id: string) => void;
};

const RoutineContext = createContext<RoutineContextType | null>(null);

export const RoutineProvider = ({ children }: { children: ReactNode }) => {
  const [routines, setRoutines] = useState<Routine[]>([]);

  const addRoutine = (routine: Routine) => {
    setRoutines((prev) => {
      const updatedRoutines = [...prev, routine];
      return updatedRoutines;
    });
  };

  const deleteRoutine = (id: string) => {
    setRoutines((prev) => {
      const updatedRoutines = prev.filter((routine) => routine.id !== id);
      return updatedRoutines;
    });
  };

  return (
    <RoutineContext.Provider value={{ routines, addRoutine, deleteRoutine }}>
      {children}
    </RoutineContext.Provider>
  );
};

export const useRoutineContext = () => {
  const context = useContext(RoutineContext);

  if (!context)
    throw new Error("useRoutineContext must be inside RoutineProvider");

  return context;
};
