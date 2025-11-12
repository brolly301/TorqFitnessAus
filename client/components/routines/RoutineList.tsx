import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Exercise } from "../exercises/ExerciseList";
import RoutineItem from "./RoutineItem";

export type Routine = {
  id: number;
  name: string;
  exercises: Exercise[];
};

type Props = {
  routines: Routine[];
};

export default function RoutineList({ routines }: Props) {
  return (
    <View>
      {routines.map((routine) => {
        return <RoutineItem key={routine.id} routine={routine} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
