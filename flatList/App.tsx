import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ejercicio1 from './src/components/Ejercicio1';
import Ejercicio2 from './src/components/Ejercicio2';
import Ejercicio3 from './src/components/Ejercicio3';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Ejercicio1 /> */}
      {/* <Ejercicio2 /> */}
      <Ejercicio3 />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
