import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeConfig = () => {
    const seconds = time % 60;
    const minutes = Math.floor((time % 3600) / 60);
    const hours = Math.floor(time / 3600);

    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  return (
    <View>
      <Text>{timeConfig()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
