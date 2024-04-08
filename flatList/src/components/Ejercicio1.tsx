import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(prevCount => prevCount + 1);
  const decreaseCount = () => setCount(prevCount => prevCount - 1);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={increaseCount}>
        <Text style={styles.buttonText}>Increase</Text>
      </TouchableOpacity>
      <Text style={styles.countText}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={decreaseCount}>
        <Text style={styles.buttonText}>Decrease</Text>
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

export default Counter;
