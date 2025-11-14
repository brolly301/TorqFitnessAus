import { Workout } from "@/types/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

type WorkoutContextType = {
  workouts: Workout[];
  addWorkout: (workout: Workout) => void;
  deleteWorkout: (id: string) => void;
};

const WorkoutContext = createContext<WorkoutContextType | null>(null);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const addWorkout = (workout: Workout) => {
    setWorkouts((prev) => {
      const updatedWorkouts = [...prev, workout];
      return updatedWorkouts;
    });
  };

  const deleteWorkout = (id: string) => {
    setWorkouts((prev) => {
      const updatedWorkouts = prev.filter((workout) => workout.id !== id);
      return updatedWorkouts;
    });
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, deleteWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkoutProvider = () => {
  const context = useContext(WorkoutContext);
  if (!context)
    throw new Error("useWorkoutProvider must be inside WorkoutProvider");
  return context;
};
