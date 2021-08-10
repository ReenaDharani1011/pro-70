import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,TextInput,KeyboardAvoidingView,ToastAndroid} from 'react-native';

export default class App extends React.Component() {
  render(){
  return (
    <View style={styles.container}>
      <TextInput style={styles.container} placeholder={"Story Name"}/>
      <TextInput style={styles.container} placeholder={"Author Name"}/>
      <TextInput style={styles.qwerty} placeholder={"Story"}/>
      <TouchableOpacity
      style={{width:100,height:30,borderRadius:30,borderWidth:2,alignSelf: 'center'}}
      onPress={()=>{
        
      }}
      ><Text>Submit</Text></TouchableOpacity>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    width:400,
    height:30,
    borderWidth:2,
  },
  qwerty: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    width:500,
    height:90,
    borderWidth:2,
  },
});