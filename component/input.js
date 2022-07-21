import React, { Component } from 'react';
import { Text,Image, TextInput } from 'react-native';
class loginInput extends Component {

    
  render() {
    return (
        <View>
      <Text>{this.props.str}</Text>
      <TextInput></TextInput>
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
