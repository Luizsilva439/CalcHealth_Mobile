import React, {useState} from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native"; // Adicione TouchableOpacity
import ResultImc from "./ResultImc/";
import styles from "./style";

export default function Form() {

const [height, setHeight] = useState(null);
const [weight, setWeight] = useState(null);
const [massageImc, setMassageImc] = useState("Preencha peso e altura");
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");


function imcCalculator() {
  return setImc((weight / (height * height)).toFixed(2));
}

function validationImc() {
  if (weight != null && height != null) {
    imcCalculator();
    setHeight(null);
    setWeight(null);
    setTextButton("Calcular Novamente");
    setMassageImc("Seu IMC é igual: ");
  } else {
    setImc(null);
    setTextButton("Calcular");
    setMassageImc("Preencha peso e altura");
  }
}

  return (
    <View style={styles.boxContent}>
        <View>
            <Text style={styles.text}>Altura</Text>
            <TextInput
            style={styles.inputText}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex: 1.75"
            keyboardType="numeric"
            />
            <Text style={styles.text}>Peso</Text>
            <TextInput
            style={styles.inputText}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex: 75.5"
            keyboardType="numeric"
            />
            <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => validationImc()}
            >
              <Text style={styles.textButton}>{textButton}</Text>
            </TouchableOpacity>
            <ResultImc masageResultImc={massageImc} resultImc={imc} />
        </View>
    </View>
  );
}