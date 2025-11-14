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

export type Routine = {
  id: string;
  name: string;
  date: string;
  exercises: Exercise[];
};

export type User = {
  id: string;
  firstName: string;
  surname: string;
  email: string;
};
