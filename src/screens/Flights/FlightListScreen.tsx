import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { fetchFlights } from "../../api/services/flightService"; // Adjust the import path as necessary
import FlightCard from "../../components/ui/FlightCard"; // Adjust the import path as necessary

export default function FlightListing() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const { data: flights, isLoading, refetch } = useQuery({
    queryKey: ["flights", { from, to }],
    queryFn: () => fetchFlights({ from, to }),
    enabled: false, // fetch only on button press
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Flights</Text>

      <TextInput
        style={styles.input}
        placeholder="From (e.g., KUL)"
        value={from}
        onChangeText={setFrom}
      />
      <TextInput
        style={styles.input}
        placeholder="To (e.g., PEN)"
        value={to}
        onChangeText={setTo}
      />

      <Button title="Search" onPress={() => refetch()} />

      {isLoading && <Text>Loading flights...</Text>}

      <FlatList
        data={flights || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FlightCard flight={item} />}
        ListEmptyComponent={<Text>No flights found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9f9f9" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#fff",
  },
});
