import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

type Props = {
  search: string;
  setSearch: (text: string) => void;
};

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSearch(text)}
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
