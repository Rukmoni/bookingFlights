import { StyleSheet, Text, View } from "react-native";

type Flight = {
  id: string;
  airline: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  price: number;
  currency: string;
};

export default function FlightCard({ flight }: { flight: Flight }) {
  return (
    <View style={styles.card}>
      <Text style={styles.airline}>{flight.airline}</Text>
      <Text>
        {flight.from} → {flight.to}
      </Text>
      <Text>
        {new Date(flight.departure).toLocaleTimeString()} -{" "}
        {new Date(flight.arrival).toLocaleTimeString()}
      </Text>
      <Text style={styles.price}>
        {flight.currency} {flight.price}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  airline: {
    fontWeight: "600",
    fontSize: 16,
  },
  price: {
    fontWeight: "700",
    marginTop: 4,
    fontSize: 16,
  },
});
