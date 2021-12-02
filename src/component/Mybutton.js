import React from 'react';
import {View, Text, Button} from 'react-native';

const Mybutton = (props) => {
  return <Button title={props.title} onPress={props.onPress}/>;
};

export default Mybutton;
