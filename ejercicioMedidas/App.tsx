import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ejercicio1 from "./src/components/Ejercicio1";

export default function App() {
  return (
    <View style={styles.container}>
      <Ejercicio1 />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: "100%",
  },
});