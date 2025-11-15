import { Pressable, StyleSheet, Text, View } from "react-native";
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
          <Pressable>
            <ExerciseItem exercise={exercise} key={exercise.id} />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
