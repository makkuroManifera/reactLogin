import React, { Component } from 'react';
import { Text,Image, TextInput } from 'react-native';
class loginInput extends Component {
  constructor(props){
    super(props)
    this.eyeIcon="visibility-off";
    this.isPassword=true;

  }
  //https://viblo.asia/p/component-state-va-props-trong-react-native-Eb85oM34Z2G
//https://github.com/vishaljadav24/react-native-hide-show-password-input/blob/master/src/component/passwordInput.js
  visibleButton =() =>{
    this.setState({eyeIcon:'visibility'})
  };

  render() {
    return (
      <View style={[styles.inputBlock,styles.box1]} >
        <Text>Username</Text>
    <TextInput secureTextEntry={this.isPassword}  /><Icon         style={styles.icon}
        name={eyeIcon}
        size={iconSize}
        color={iconColor}
        onPress={visibleButton}/> 
    </View>
    );
  }
}
loginInput.propTypes = {
    str: PropTypes.string
  }
  loginInput.defaultProps = {
    str: 'username'
  }
  export default loginInput;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        height:Wheight,
        width:Wwidth
    }
  })