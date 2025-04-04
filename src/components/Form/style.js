import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxContent: {
        backgroundColor: "#0000ff",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: "100%",
        width: "100%",
    },
    text: {
        fontSize: 20,
        color: "#000000",
        fontWeight: "bold",
        paddingStart: 40,
        paddingTop: 30,
    },

    buttonCalculator: {
        backgroundColor: "#000000",
        borderRadius: 50,
        alignItems: "center",

    },

    textButton: {
        fontSize: 20,
        color: "#ffffff",
        fontWeight: "bold",
        padding: 15,
    },

    inputText: {
        backgroundColor: "#4676ff",
        borderRadius: 50,
        width: "90%",
        marginLeft: 20,
    }

 
});

export default styles;