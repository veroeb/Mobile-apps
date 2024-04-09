import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Ejercicio6 = () => {
    const [count, setCount] = useState(21);

    const calculateTemperature = (currentTemperature: number, upperLimit: number, lowerLimit: number) => {
        if (currentTemperature > upperLimit) {
            alert('Temperature is too high');
            // return upperLimit; // Devuelve el límite superior
        } else if (currentTemperature < lowerLimit) {
            alert('Temperature is too low');
            // return lowerLimit; // Devuelve el límite inferior
        } 
        return currentTemperature;
    };

    const handleTemperatureHigh = () => {
        setCount(prevCount => calculateTemperature(prevCount + 1, 28, 16));
    };
      
    const handleTemperatureLow = () => {
        setCount(prevCount => calculateTemperature(prevCount - 1, 28, 16));
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

export default Ejercicio6;
