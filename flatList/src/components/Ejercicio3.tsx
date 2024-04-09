import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, TouchableOpacity, View, Text, FlatList, SafeAreaView } from 'react-native';

const Ejercicio3 = () => {
    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState<string[]>([]);

    const handleSubmit = () => {
        if (inputText.trim() !== '') {
            setItems(prevItems => [...prevItems, inputText]);
            setInputText('');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setInputText}
                value={inputText}
                placeholder="Type here"
            />
            <Button
                title="Submit"
                onPress={handleSubmit}
            />
            <FlatList
                data={items}
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 20,  
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
    item: {
        alignSelf: 'center',
        fontSize: 20,
        marginVertical: 10,
      },
});

export default Ejercicio3;