import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import AppModal from "../ui/AppModal";
import { useExerciseContext } from "@/context/ExerciseContext";
import { Exercise } from "@/types/navigation";

type Props = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddExerciseModal({
  modalVisible,
  setModalVisible,
}: Props) {
  const { addExercise } = useExerciseContext();

  const [formData, setFormData] = useState<Exercise>({
    id: "1",
    name: "test",
    description: "test",
    category: "test",
    mainMuscle: "test",
    secondaryMuscle: "test",
    equipment: "test",
  });

  return (
    <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Text>Add new exercise</Text>
      <Text>Name</Text>
      <TextInput
        placeholder="Enter"
        placeholderTextColor={"black"}
        style={{ borderWidth: 1, padding: 10, marginVertical: 5 }}
      />
      <Text>Description</Text>
      <TextInput
        placeholder="Enter"
        placeholderTextColor={"black"}
        style={{ borderWidth: 1, padding: 10, marginVertical: 5 }}
      />
      <Text>Category</Text>
      <TextInput
        placeholder="Enter"
        placeholderTextColor={"black"}
        style={{ borderWidth: 1, padding: 10, marginVertical: 5 }}
      />
      <Text>Main Muscle</Text>
      <TextInput
        placeholder="Enter"
        placeholderTextColor={"black"}
        style={{ borderWidth: 1, padding: 10, marginVertical: 5 }}
      />
      <Text>Secondary Muscle</Text>
      <TextInput
        placeholder="Enter"
        placeholderTextColor={"black"}
        style={{ borderWidth: 1, padding: 10, marginVertical: 5 }}
      />
      <Text>Equipment</Text>
      <TextInput
        placeholder="Enter"
        placeholderTextColor={"black"}
        style={{ borderWidth: 1, padding: 10, marginVertical: 5 }}
      />
      <Button title="Submit" onPress={() => addExercise(formData)} />
    </AppModal>
  );
}

const styles = StyleSheet.create({});
