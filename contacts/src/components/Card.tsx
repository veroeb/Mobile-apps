import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type CardProps = {
    name: string;
    age: number;
    gender: string;   
    image: string;
};

const Card = (props: CardProps) => {
    return (
        <View style={styles.card}>
            <View style={styles.image}>
                <Image source={{ uri: props.image }} style={{width:50, height:50}}/>
            </View>
            <View style={styles.details}>
                <Text>Name: {props.name}</Text>
                <Text>Age: {props.age}</Text>
                <Text>Gender: {props.gender}</Text>
            </View>            
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    },
    image: {
        // flex: 1,
        height: 50,
        width: 50,
    },
    details: {

    } 
});

export default Card;