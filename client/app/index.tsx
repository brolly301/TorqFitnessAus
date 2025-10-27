import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

export default function RouteIndex() {
  return <Redirect href={"/(tabs)/workout"} />;
}

const styles = StyleSheet.create({});
