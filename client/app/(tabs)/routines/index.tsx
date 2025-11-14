import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "@/components/layout/SearchBar";
import RoutineList from "@/components/routines/RoutineList";
import { searchQuery } from "@/utils/strings";
import { useRoutineContext } from "@/context/RoutineContext";

export default function RoutineScreen() {
  const [search, setSearch] = useState<string>("");
  const { routines } = useRoutineContext();

  return (
    <View>
      <SearchBar search={search} setSearch={setSearch} />
      <RoutineList routines={searchQuery(search, routines)} />
    </View>
  );
}

const styles = StyleSheet.create({});
