import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Ejercicio1 = () => {
    return (
        <View style={squareStyle.container}>
          <View style={squareStyle.componentB}>
            <View style={squareStyle.componentG}/>
          </View>
          <View style={{flex:1}}>
            <View style={squareStyle.componentR}/>
            <View style={squareStyle.componentY}/>
          </View>
        </View>
      );
};


const squareStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "yellow",
      // width: "100%",
    },
    componentB: {
      flex: 1,
      backgroundColor: "blue",
    },
    componentR: {
      flex: 1,
      backgroundColor: "red",
    },
    componentY: {
      flex: 2,
      backgroundColor: "yellow",
    },
    componentG: {
      flex: 1,
      backgroundColor: "green",
      margin: 70,
    }
  });

export default Ejercicio1;