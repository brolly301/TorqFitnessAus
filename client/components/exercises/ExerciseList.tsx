import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import ExerciseItem from "./ExerciseItem";
import { Exercise } from "@/types/navigation";

export type Props = {
  exercises: Exercise[];
};

export default function ExerciseList({ exercises }: Props) {
  return (
    <View>
      {exercises.map((exercise) => {
        return (
          <Pressable key={exercise.id}>
            <ExerciseItem exercise={exercise} />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
