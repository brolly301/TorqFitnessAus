import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Routines",
          headerRight: () => (
            <AntDesign
              onPress={() => {
                router.navigate("/routines/addRoutine");
              }}
              name="plus"
              color={"black"}
              size={20}
            />
          ),
        }}
      />
      <Stack.Screen name="addRoutine" options={{ title: "Routines" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({});
