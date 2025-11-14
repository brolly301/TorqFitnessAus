export type Exercise = {
  id: string;
  name: string;
  description: string;
  mainMuscle: string;
  secondaryMuscle: string;
  category: string;
  equipment: string;
};

export type Workout = {
  id: string;
  name: string;
  date: string;
  exercises: Exercise[];
};
