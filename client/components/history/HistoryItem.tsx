import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Workout } from "@/types/navigation";

type Props = {
  workout: Workout;
};

export default function HistoryItem({ workout }: Props) {
  return (
    <View>
      <Text>HistoryItem</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
