import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "@/components/layout/SearchBar";
import ExerciseList from "@/components/exercises/ExerciseList";
import { searchQuery } from "@/utils/strings";

export default function ExercisesScreen() {
  const [search, setSearch] = useState<string>("");

  const exercises = [
    {
      id: 1,
      name: "Incline Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "Chest",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
    },
    {
      id: 2,
      name: "Incline Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "Chest",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
    },
    {
      id: 3,
      name: "Incline Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "Chest",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
    },
    {
      id: 4,
      name: "Incline Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "Chest",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
    },
    {
      id: 5,
      name: "Incline Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "Chest",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
    },
  ];

  return (
    <View>
      <SearchBar search={search} setSearch={setSearch} />
      <ExerciseList exercises={searchQuery(search, exercises)} />
    </View>
  );
}

const styles = StyleSheet.create({});
