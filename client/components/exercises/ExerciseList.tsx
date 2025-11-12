import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExerciseItem from "./ExerciseItem";

export type Exercise = {
  name: string;
  description: string;
  mainMuscle: string;
  secondaryMuscle: string;
  category: string;
  equipment: string;
};

export default function ExerciseList() {
  const test = [
    {
      name: "Incline Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "Chest",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
    },
    {
      name: "Incline Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "Chest",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
    },
    {
      name: "Incline Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "Chest",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
    },
    {
      name: "Incline Chest Press",
      description: "An incline chest press using a seated bench & dumbbells.",
      mainMuscle: "Chest",
      secondaryMuscle: "Triceps",
      category: "Weights",
      equipment: "Dumbbells",
    },
    {
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
      {test.map((item) => {
        return <ExerciseItem item={item} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
