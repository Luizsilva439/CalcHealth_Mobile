import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxContent: {
        backgroundColor: "#212121",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: "100%",
        width: "100%",
    },
    text: {
        fontSize: 20,
        color: "#ff0084",
        fontWeight: "bold",
        paddingStart: 40,
        paddingTop: 30,
    },

    buttonCalculator: {
        backgroundColor: "#212121",
        borderRadius: 50,
        alignItems: "center",
        marginVertical: 50,
        borderWidth: 2,
        borderColor: "#ff0084",
        marginHorizontal: 40,
    },

    textButton: {
        fontSize: 20,
        color: "#ff0084",
        fontWeight: "bold",
        padding: 15,
    },

    inputText: {
        backgroundColor: "#bf8aa5",
        borderRadius: 50,
        width: "90%",
        marginLeft: 20,
    }

 
});

export default styles;