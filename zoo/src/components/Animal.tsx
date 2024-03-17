import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type AnimalProps = {
  animalType: string;
  age: number;
  imageUrl?: string;
  sound?: string;
  onTalkPress: (sound: string) => void;
};

const Animal = (props: AnimalProps) => {
  const [showAge, setShowAge] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.animalText}>Hello I'm a {props.animalType}</Text>
      {props.imageUrl ? (
        <Image
          source={{ uri: props.imageUrl }}
          style={styles.image}
        />
      ) : (
        <Text style={styles.noImageText}>No image available</Text>
      )}
      <TouchableOpacity
        onPress={() => props.onTalkPress(props.sound ?? '')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Talk</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPressIn={() => setShowAge(true)}
        onPressOut={() => setShowAge(false)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{showAge ? `I'm ${props.age} years old` : 'Show Age'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20, // Espacio dentro del contenedor principal
    alignItems: 'center',
    borderBottomWidth: 1, // Línea sutil debajo de cada animal para separarlos si están en lista
    borderBottomColor: '#ddd', // Color de la línea
  },
  animalText: {
    marginBottom: 10, // Espacio debajo del texto del tipo de animal
    fontSize: 18, // Tamaño de fuente más grande para el texto del animal
    fontWeight: 'bold', // Texto en negrita para destacarlo
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10, // Espacio debajo de la imagen
  },
  noImageText: {
    marginBottom: 10, // Espacio debajo del texto "No image available"
  },
  button: {
    backgroundColor: '#007BFF', // Color de fondo para los botones
    paddingHorizontal: 20, // Espacio horizontal dentro de los botones
    paddingVertical: 10, // Espacio vertical dentro de los botones
    borderRadius: 5, // Bordes redondeados para los botones
    marginVertical: 5, // Espacio vertical entre botones
    alignSelf: 'stretch', // Estira el botón para ocupar el ancho disponible
    alignItems: 'center', // Centra el texto dentro del botón
  },
  buttonText: {
    color: '#FFFFFF', // Texto blanco para que contraste con el fondo del botón
    fontSize: 16, // Tamaño de fuente para el texto del botón
  },
});

export default Animal;
