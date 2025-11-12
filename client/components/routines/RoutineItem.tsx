import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Routine } from "./RoutineList";

type Props = {
  routine: Routine;
};

export default function RoutineItem({ routine }: Props) {
  return (
    <View>
      <Text>{routine.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
