import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExerciseItem from "./ExerciseItem";

export type Exercise = {
  id: number;
  name: string;
  description: string;
  mainMuscle: string;
  secondaryMuscle: string;
  category: string;
  equipment: string;
};

export type Props = {
  exercises: Exercise[];
};

export default function ExerciseList({ exercises }: Props) {
  return (
    <View>
      {exercises.map((item) => {
        return <ExerciseItem item={item} key={item.id} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
