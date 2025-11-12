import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter an exercise .."
        placeholderTextColor={"black"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    color: "blue",
    padding: 10,
  },
  container: {},
});
