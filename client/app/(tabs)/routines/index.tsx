import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "@/components/layout/SearchBar";
import RoutineList from "@/components/routines/RoutineList";
import { searchQuery } from "@/utils/strings";

export default function RoutineScreen() {
  const [search, setSearch] = useState<string>("");

  const routines = [
    {
      id: 1,
      name: "First routine",
      exercises: [
        {
          id: 1,
          name: "Incline Chest Press",
          description:
            "An incline chest press using a seated bench & dumbbells.",
          mainMuscle: "Chest",
          secondaryMuscle: "Triceps",
          category: "Weights",
          equipment: "Dumbbells",
        },
      ],
    },
  ];

  return (
    <View>
      <SearchBar search={search} setSearch={setSearch} />
      <RoutineList routines={searchQuery(search, routines)} />
    </View>
  );
}

const styles = StyleSheet.create({});
