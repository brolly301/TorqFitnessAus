import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import SearchBar from "@/components/ui/SearchBar";
import ExerciseList from "@/components/exercises/ExerciseList";
import { searchQuery } from "@/utils/strings";
import { useExerciseContext } from "@/context/ExerciseContext";
import AppModal from "@/components/ui/AppModal";
import { useNavigation } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import AddExerciseModal from "@/components/exercises/AddExerciseModal";

export default function ExercisesScreen() {
  const [search, setSearch] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { exercises } = useExerciseContext();

  const navigation = useNavigation();

  const sortAZ = [...exercises].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const sortZA = [...exercises].sort((a, b) => {
    return b.name.localeCompare(a.name);
  });

  const groupMainMuscle = [...exercises].sort((a, b) => {
    return a.mainMuscle.localeCompare(b.mainMuscle);
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AntDesign
          onPress={() => setModalVisible(true)}
          name="plus"
          color={"black"}
          size={18}
        />
      ),
    });
  }, [navigation]);

  return (
    <>
      <AddExerciseModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View>
        <SearchBar search={search} setSearch={setSearch} />
        <ExerciseList exercises={groupMainMuscle} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
