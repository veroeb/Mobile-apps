import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

const Ejercicio2 = () => {
    const [inputText, setInputText] = useState('');
    const [submittedText, setSubmittedText] = useState('');

    const handleSubmit = () => {
        setSubmittedText(inputText);
        setInputText('');
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={setInputText} value={inputText} placeholder='Type here'/>
            <TouchableOpacity style={styles.button} onPressIn={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <Text>{submittedText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        width: 300,
        alignSelf: 'stretch',
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

export default Ejercicio2;