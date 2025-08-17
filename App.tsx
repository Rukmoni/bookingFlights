import { StyleSheet } from "react-native";
import App from "./src/App";
import { colors } from "./src/theme";
export default App;

/* export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppText variant="heading">Welcome to Phase 3 🎯</AppText>
      <AppButton title="Click me" onPress={() => alert("Hello!")} />
    </SafeAreaView>
  );
} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
