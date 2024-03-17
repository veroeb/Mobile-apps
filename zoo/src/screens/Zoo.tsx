import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Animal from '../components/Animal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    // Este estilo es para el contenido dentro del ScrollView
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  safeAreaView: {
    flex: 1, // Asegura que SafeAreaView utilice toda la pantalla disponible
  },
});

const Zoo = () => {
  const handleTalkPress = (sound = '') => () => {
    console.log(sound ? `The animal said: ${sound}` : 'The animal made no sound');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer} // Estilos para el contenido interno
      >
        <Animal
          animalType='Monkey'
          age={4}
          onTalkPress={handleTalkPress()}
          imageUrl='https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg'
        />
        <Animal
          animalType='Dog'
          age={14}
          onTalkPress={handleTalkPress('Guau')}
          imageUrl='https://media.istockphoto.com/id/453672247/photo/maltese-puppy-sitting-looking-at-the-camera-2-months-old.webp?b=1&s=170667a&w=0&k=20&c=HgU4ssK9R5Up7VFdYn6jENSzXPM_vVSNfRaDod2-qJg='
        />
        <Animal
          animalType='Cat'
          age={10}
          onTalkPress={handleTalkPress('Miau')}
          imageUrl='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=pexels-pixabay-104827.jpg&fm=jpg'
        />
        <Animal
          animalType='Lion'
          age={24}
          onTalkPress={handleTalkPress('Roar')}
        />
        <Animal
          animalType='Horse'
          age={10}
          onTalkPress={handleTalkPress()}
          imageUrl='https://cdn.pixabay.com/photo/2017/12/10/15/16/white-horse-3010129_1280.jpg'
        />
        <Animal
          animalType='Fox'
          age={4}
          onTalkPress={handleTalkPress()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Zoo;
