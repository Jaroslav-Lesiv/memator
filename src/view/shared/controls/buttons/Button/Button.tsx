import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, View } from 'react-native';
interface Props extends TouchableOpacityProps {}

const Button = (props: Props) => {
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};

export default Button;
