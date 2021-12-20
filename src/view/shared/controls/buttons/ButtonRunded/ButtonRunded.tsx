import { observer } from 'mobx-react-lite';
import React, { PropsWithChildren } from 'react';
import { View, Text, StyleProp, TouchableOpacity, ViewStyle, GestureResponderEvent } from 'react-native';
import { COLORS } from '../../../../../constants/theme';
import { useMst } from '../../../../../mobx';
import styles from './styles';

interface Props {
  background?: COLORS;
  style?: StyleProp<ViewStyle>;
  size?: number;
  height?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

const ButtonRunded = observer(({ size = 40, height, background, ...props }: PropsWithChildren<Props>) => {
  const { themes } = useMst();
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[
          styles.wrapper,
          props.style,
          { backgroundColor: themes.theme[background], borderRadius: size / 2, width: size, height: height || size },
        ]}
      >
        {props.children}
      </View>
    </TouchableOpacity>
  );
});

export default ButtonRunded;
