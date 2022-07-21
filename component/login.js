import React, { Component } from 'react';
import { Text,Image, TextInput, View,StyleSheet,Dimensions } from 'react-native';
import loginInput from './input.js'
var  Wheight  = Dimensions.get('window').height;
var  Wwidth  = Dimensions.get('window').width;
var n_compo=5;
var heights=Wheight/n_compo
var paddingLeftRight=30
class Login extends Component {
  render() {
    return (
        <View style={styles.container} >
            <View style={styles.logo}>
      <Image style={styles.logo} 
            source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
      }}></Image>
      </View>
      <View style={[styles.input,styles.box1]} >
        <Text>Username</Text>
    <TextInput > </TextInput>
    </View>
    <View style={[styles.input,styles.box2]}>
    <Text>Password</Text>
    <TextInput > </TextInput>
    </View>

    <View>

    </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        height:Wheight,
        width:Wwidth
    },
    logo: {
        width: 270,
        height: 94.14,

    },
    inputBlock: {
        marginLeft:paddingLeftRight,
        marginRight:paddingLeftRight,
        width:Wwidth-(paddingLeftRight*2),
         height:70
    },
    textAboveInput: {
    },
    box1:{
        backgroundColor: '#8BC34A'
    },
    box2:{
        backgroundColor: '#e3aa1a'
    },
    buttonArea:{
        height:100
    }
  });
export default Login;
