export type Exercise = {
  id: string;
  name: string;
  description: string;
  mainMuscle: string;
  secondaryMuscle: string;
  category: string;
  equipment: string;
};

export type ExerciseSets = {
  id: string;
  set: number;
  reps: number;
  weight: number;
};

export type WorkoutExercise = Exercise & {
  sets: ExerciseSets[];
};

export type Workout = {
  id: string;
  name: string;
  date: string;
  exercises: WorkoutExercise[];
};

export type Routine = {
  id: string;
  name: string;
  date: string;
  exercises: WorkoutExercise[];
};

export type User = {
  id: string;
  firstName: string;
  surname: string;
  email: string;
};
