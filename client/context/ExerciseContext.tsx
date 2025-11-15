import { Exercise } from "@/types/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

type ExerciseContextType = {
  exercises: Exercise[];
  addExercise: (exercise: Exercise) => void;
  deleteExercise: (id: string) => void;
};

const ExerciseContext = createContext<ExerciseContextType | null>(null);

export const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: "1",
      name: "Incline Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "Chest",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
      sets: [
        {
          id: "1",
          set: 1,
          reps: 8,
          weight: 40,
        },
      ],
    },
    {
      id: "2",
      name: "Shin Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "Chest",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
      sets: [
        {
          id: "1",
          set: 1,
          reps: 8,
          weight: 40,
        },
      ],
    },
    {
      id: "3",
      name: "Moppy Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "back",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
      sets: [
        {
          id: "1",
          set: 1,
          reps: 8,
          weight: 40,
        },
      ],
    },
    {
      id: "4",
      name: "Incline Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "back",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
      sets: [
        {
          id: "1",
          set: 1,
          reps: 8,
          weight: 40,
        },
      ],
    },
    {
      id: "5",
      name: "Incline Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "Chest",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
      sets: [
        {
          id: "1",
          set: 1,
          reps: 8,
          weight: 40,
        },
      ],
    },
  ]);

  const addExercise = (exercise: Exercise) => {
    setExercises((prev) => {
      const updatedExercises = [...prev, exercise];
      return updatedExercises;
    });
  };

  const deleteExercise = (id: string) => {
    setExercises((prev) => {
      const updatedExercises = prev.filter((ex) => ex.id !== id);
      return updatedExercises;
    });
  };

  return (
    <ExerciseContext.Provider
      value={{ exercises, addExercise, deleteExercise }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExerciseContext = () => {
  const context = useContext(ExerciseContext);
  if (!context)
    throw new Error("useExerciseContext must be inside ExerciseProvider");
  return context;
};
