import { StyleSheet, Switch, Text, View } from "react-native";
import React from "react";
import { useThemeContext } from "@/context/ThemeContext";
import { capitalise } from "@/utils/strings";

export default function SettingsScreen() {
  const { themeType, setThemeType } = useThemeContext();

  return (
    <View>
      <View>
        <Text>Theme: {capitalise(themeType)}</Text>
      </View>
      <Switch
        thumbColor={themeType === "dark" ? "grey" : "lightgrey"}
        onChange={() => setThemeType(themeType === "dark" ? "light" : "dark")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
