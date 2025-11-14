import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "@/components/layout/SearchBar";
import ExerciseList from "@/components/exercises/ExerciseList";
import { searchQuery } from "@/utils/strings";
import { useExerciseContext } from "@/context/ExerciseContext";

export default function ExercisesScreen() {
  const [search, setSearch] = useState<string>("");
  const { exercises } = useExerciseContext();

  const sortAZ = [...exercises].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const sortZA = [...exercises].sort((a, b) => {
    return b.name.localeCompare(a.name);
  });

  const groupMainMuscle = [...exercises].sort((a, b) => {
    return a.mainMuscle.localeCompare(b.mainMuscle);
  });

  return (
    <View>
      <SearchBar search={search} setSearch={setSearch} />
      <ExerciseList exercises={groupMainMuscle} />
    </View>
  );
}

const styles = StyleSheet.create({});
