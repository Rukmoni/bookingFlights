import React from "react";
import { Text, View } from "react-native";

export default function ErrorMessage({ message = "Something went wrong" }: { message?: string }) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ color: "red" }}>{message}</Text>
    </View>
  );
}
