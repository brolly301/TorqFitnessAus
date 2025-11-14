import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="routines"
        options={{
          title: "",
          tabBarIcon: () => (
            <AntDesign name="schedule" color={"black"} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "",
          tabBarIcon: () => (
            <AntDesign name="history" color={"black"} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: "",
          tabBarIcon: () => <AntDesign name="plus" color={"black"} size={20} />,
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          title: "",
          tabBarIcon: () => <AntDesign name="aim" color={"black"} size={20} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: () => <AntDesign name="user" color={"black"} size={20} />,
        }}
      />
    </Tabs>
  );
}
