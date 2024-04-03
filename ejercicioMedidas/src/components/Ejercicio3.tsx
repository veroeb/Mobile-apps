import { View, StyleSheet } from "react-native";

const Ejercicio3 = () => {
    return (
        <View style={squareStyle.container}>
            <View style={squareStyle.upperContainer}>
                <View style={squareStyle.upperContainer1}>
                    <View style={squareStyle.upperCircle} />
                </View>
                <View style={squareStyle.upperContainer2}>
                    <View style={squareStyle.upperCircle} />    
                </View>
                <View style={squareStyle.upperContainer3}>
                    <View style={squareStyle.upperCircle} />
                </View>
            </View>
            <View style={squareStyle.lowerContainer}>
                <View style={squareStyle.lowerContainer1}>
                    <View style={squareStyle.lowerCircle} />    
                </View>
                <View style={squareStyle.lowerContainer2}>
                    <View style={squareStyle.lowerCircle} />    
                </View>
                <View style={squareStyle.lowerContainer3}>
                    <View style={squareStyle.lowerCircle} />    
                </View>
            </View>
        </View>
    );
}

const squareStyle = StyleSheet.create({
    container: {
        flex: 1,
        // width: "100%",
      },
    upperContainer: {
        flex: 1,
    },
    upperContainer1: {
        flex: 1,
        flexDirection: "row",           //The main axis is horizontal X
        justifyContent: "flex-start",   //Axis X
        alignItems: "flex-end",         //Axis Y
        backgroundColor: "rgb(236, 186, 179)",
    },
    upperContainer2: {
        flex: 1,
        flexDirection: "row",           //The main axis is horizontal X
        justifyContent: "center",       //Axis X
        alignItems: "center",           //Axis Y
        backgroundColor: "rgb(220, 119, 104)",
    },
    upperContainer3: {
        flex: 1,
        flexDirection: "row",           //The main axis is horizontal X
        justifyContent: "flex-end",     //Axis X
        alignItems: "flex-start",       //Axis Y
        backgroundColor: "rgb(185, 76, 60)",
    },
    upperCircle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "rgb(52, 96, 136)",
    },
    lowerContainer: {
        flex: 1,
        flexDirection: "row",           //The main axis is horizontal X
    },
    lowerContainer1: {
        flex: 2,
        flexDirection: "column",        //The main axis is vertical Y
        justifyContent: "flex-start",   //Axis Y
        alignItems: "flex-end",         //Axis X
        backgroundColor: "rgb(182, 213, 238)",
    },
    lowerContainer2: {
        flex: 1,
        flexDirection: "column",        //The main axis is vertical Y   
        justifyContent: "center",       //Axis Y
        alignItems: "center",           //Axis X
        backgroundColor: "rgb(113, 171, 221)",
    },
    lowerContainer3: {
        flex: 2,
        flexDirection: "column",        //The main axis is vertical Y
        justifyContent: "flex-end",     //Axis Y
        alignItems: "flex-start",       //Axis X
        backgroundColor: "rgb(72, 132, 188)",
    },
    lowerCircle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "rgb(137, 56, 44)",
    },
});

export default Ejercicio3;