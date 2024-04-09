import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, TouchableOpacity, View, Text, FlatList, SafeAreaView, Pressable } from 'react-native';

const Ejercicio7 = () => {
    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState<string[]>([]);

    /*
    En el contexto de React, cuando se llama a una función de actualización de estado 
    (en este caso, setItems) con una función como argumento, React invoca esa función 
    con el estado anterior como argumento. En este caso, prevItems sería el estado anterior de items.
    */
    const handleSubmit = () => {
        if (inputText.trim() !== '') {
            setItems(prevItems => [...prevItems, inputText]);
            setInputText('');
        }
    };

    const handlePressable = (item: string) => {
        setItems(prevItems => prevItems.filter(i => i !== item));
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
                /*
                Desestructuración de objetos: Cuando ves ({ item }) en la lista de 
                parámetros de la función renderItem, esto es una desestructuración 
                de objetos. La función renderItem recibe un objeto como argumento, 
                y este objeto tiene una propiedad llamada item. Al poner { item } 
                en lugar de un nombre de parámetro regular, estás diciendo "toma 
                el objeto que se pasa como argumento, y dame directamente la propiedad item de ese objeto".
                */
                data={items}
                renderItem={({ item }) =>
                    <Pressable onPress={() => handlePressable(item)}>
                        <Text style={styles.item}>{item}</Text>
                    </Pressable>
                }
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

export default Ejercicio7;