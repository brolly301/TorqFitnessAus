import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "@/components/layout/SearchBar";
import ExerciseList from "@/components/exercises/ExerciseList";
import { searchQuery } from "@/utils/strings";
import { useExerciseContext } from "@/context/ExerciseContext";

export default function ExercisesScreen() {
  const [search, setSearch] = useState<string>("");
  const { exercises } = useExerciseContext();

  return (
    <View>
      <SearchBar search={search} setSearch={setSearch} />
      <ExerciseList exercises={searchQuery(search, exercises)} />
    </View>
  );
}

const styles = StyleSheet.create({});
