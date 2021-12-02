import React from "react";
import { TextInput } from "react-native";

const MyInput = (props) => {
  return <TextInput autoCapitalize="none" autoCorrect={false} {...props} />;
};

export default MyInput;
