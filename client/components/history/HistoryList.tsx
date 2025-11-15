import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Workout } from "@/types/navigation";
import HistoryItem from "./HistoryItem";

type Props = {
  workouts: Workout[];
};

export default function HistoryList({ workouts }: Props) {
  return (
    <View>
      {workouts.map((workout) => {
        return <HistoryItem workout={workout} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({});
