import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ejercicio1 from './src/components/Ejercicio1';
import Ejercicio2 from './src/components/Ejercicio2';
import Ejercicio3 from './src/components/Ejercicio3';
import Ejercicio4 from './src/components/Ejercicio4';
import Ejercicio5 from './src/components/Ejercicio5';
import Ejercicio6 from './src/components/Ejercicio6';
import Ejercicio7 from './src/components/Ejercicio7';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Ejercicio1 /> */}
      {/* <Ejercicio2 /> */}
      {/* <Ejercicio3 /> */}
      {/* <Ejercicio4 /> */}
      {/* <Ejercicio5 /> */}
      {/* <Ejercicio6 /> */}
      <Ejercicio7 />
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
  },
});
