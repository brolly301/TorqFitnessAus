import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RoutineItem from "./RoutineItem";
import { Routine } from "@/types/navigation";

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
