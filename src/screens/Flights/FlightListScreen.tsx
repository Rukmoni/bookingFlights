import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useFlights } from "../../api/hooks/useFlights";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addFlight } from "../../store/slices/cartSlice";

export default function FlightListScreen() {
  const { data, isLoading, error } = useFlights();
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((s) => s.theme.mode);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message="Failed to load flights." />;

  console.log("rupa Flight List Screen Rendered", data);

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: themeMode === "dark" ? "#000" : "#fff",
      }}
    >
      <FlatList
        data={data || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => dispatch(addFlight(item))}
            style={{
              padding: 12,
              marginBottom: 12,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#ddd",
            }}
          >
            <Text style={{ fontWeight: "600" }}>
              {item.from} → {item.to}
            </Text>
            <Text>{item.airline}</Text>
            <Text>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
