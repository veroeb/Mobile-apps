import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, TouchableOpacity, View, Text, FlatList, SafeAreaView } from 'react-native';

const Ejercicio4 = () => {
    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState<string[]>([]);
    const [count, setCount] = useState(0);

    const handleSubmit = () => {
        if (inputText.trim() !== '') {
            setItems(prevItems => [...prevItems, inputText]);
            setInputText('');
            setCount(inputText.length + count);
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
            <Text style={styles.countText}>Cantidad de caracteres: {count}</Text>            
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
        fontSize: 20,
        marginHorizontal: 20,
        marginTop: 10,
        // backgroundColor: "rgba(0,0,0,0.1)",
    },
    item: {
        alignSelf: 'center',
        fontSize: 20,
        marginVertical: 10,
      },
});

export default Ejercicio4;