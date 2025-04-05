import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  return (
    <View style={{alignItems: "center"}}>
        <Text style={styles.textResultImc}>{props.masageResultImc}</Text>
        <Text style={styles.ResultImc}>{props.resultImc}</Text>
    </View>
  );
}