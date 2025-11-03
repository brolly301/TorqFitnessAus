import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Exercises",
          headerRight: () => (
            <AntDesign name="plus" color={"black"} size={18} />
          ),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
