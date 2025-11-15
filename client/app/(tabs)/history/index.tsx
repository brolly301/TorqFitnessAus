import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HistoryList from "@/components/history/HistoryList";
import { useWorkoutContext } from "@/context/WorkoutContext";

export default function HistoryScreen() {
  const { workouts } = useWorkoutContext();

  return (
    <View>
      <HistoryList workouts={workouts} />
    </View>
  );
}

const styles = StyleSheet.create({});
