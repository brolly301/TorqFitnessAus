export const capitalise = (s: string) => {
  return `${s.charAt(0).toUpperCase() + s.slice(1)}`;
};

export const searchQuery = (s: string, array: any[]) => {
  return array.filter((exercise) => {
    return exercise.name.toLowerCase().includes(s.toLowerCase());
  });
};
