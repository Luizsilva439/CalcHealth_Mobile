import React from 'react';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';
import style from './src/components/Title/style';


export default function App() {
  return (
    <View style={{backgroundColor: "#000000", marginTop: 40,}}>
      <Title/> 
      <Form/>
    </View>
  );
}
