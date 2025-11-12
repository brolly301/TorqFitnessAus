import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "@/components/exercises/SearchBar";
import ExerciseList from "@/components/exercises/ExerciseList";

export default function ExercisesScreen() {
  return (
    <View>
      <SearchBar />
      <ExerciseList />
    </View>
  );
}

const styles = StyleSheet.create({});
