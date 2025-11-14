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
      {exercises.map((item) => {
        return (
          <Pressable>
            <ExerciseItem item={item} key={item.id} />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
