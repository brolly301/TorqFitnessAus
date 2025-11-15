import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Exercise } from "@/types/navigation";

type Props = {
  exercise: Exercise;
};

export default function ExerciseItem({ exercise }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{exercise.name}</Text>
      <Text style={styles.description}>{exercise.description}</Text>
      <Text style={styles.mainMuscle}>{exercise.mainMuscle}</Text>
      <Text style={styles.secondaryMuscle}>{exercise.secondaryMuscle}</Text>
      <Text style={styles.category}>{exercise.category}</Text>
      <Text style={styles.equipment}>{exercise.equipment}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    color: "black",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
