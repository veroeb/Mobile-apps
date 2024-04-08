import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Ejercicio5 = () => {
  const [count, setCount] = useState(21);

  const increaseCount = () => setCount(prevCount => prevCount + 1);
  const decreaseCount = () => setCount(prevCount => prevCount - 1);

  const handleTemperatureHigh = () => {
    if (count >= 28){
        alert('Temperature is too high')
    }
    setCount(count + 1);
  };

  const handleTemperatureLow = () => {
    if (count <= 16){
        alert('Temperature is too low')
    }
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleTemperatureHigh}>
        <Text style={styles.buttonText}>Increase temperature</Text>
      </TouchableOpacity>
      <Text style={styles.countText}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={handleTemperatureLow}>
        <Text style={styles.buttonText}>Decrease temperature</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  countText: {
    fontSize: 48,
    marginVertical: 20,
  },
});

export default Ejercicio5;
