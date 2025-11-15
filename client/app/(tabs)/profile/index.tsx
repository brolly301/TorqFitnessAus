import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUserContext } from "@/context/UserContext";

export default function ProfileScreen() {
  const { user } = useUserContext();

  return (
    <View>
      <Text>
        {user.firstName} {user.surname}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
