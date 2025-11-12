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
          title: "Profile",
          headerRight: () => (
            <AntDesign
              name="setting"
              size={16}
              color={"black"}
              onPress={() => router.push("/profile/settings")}
            />
          ),
        }}
      />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({});
