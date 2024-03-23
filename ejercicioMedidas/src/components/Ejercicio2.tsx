import { View, StyleSheet } from "react-native";

const Ejercicio2 = () => {
  return (
    <View style={squareStyle.container}>
      <View style={squareStyle.componentB}>
        <View style={squareStyle.componentR} />
        <View style={squareStyle.componentR} />
        <View style={squareStyle.componentR} />
      </View>
      <View style={squareStyle.componentY}>
        <View style={squareStyle.componentR} />
        <View style={squareStyle.componentR} />
        <View style={squareStyle.componentR} />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  componentY: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
  componentR: {
    height: 80,
    width: 80,
    backgroundColor: "red",
  },
});

export default Ejercicio2;
