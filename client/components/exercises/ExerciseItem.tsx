import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Exercise } from "@/types/navigation";

type Props = {
  item: Exercise;
};

export default function ExerciseItem({ item }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.mainMuscle}>{item.mainMuscle}</Text>
      <Text style={styles.secondaryMuscle}>{item.secondaryMuscle}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.equipment}>{item.equipment}</Text>
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
