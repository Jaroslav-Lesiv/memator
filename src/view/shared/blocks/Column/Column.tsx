import React from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { ALIGN, JUSTIFY } from '../../../../constants/theme';

import styles from './styles';

interface ColumnProps extends ViewProps {
  style?: StyleProp<ViewStyle>;

  justify?: JUSTIFY;
  align?: ALIGN;
}

const Column: React.FunctionComponent<ColumnProps> = ({
  justify,
  align,
  onLayout,
  ...props
}) => {
  return (
    <View onLayout={onLayout} style={[styles.column, { justifyContent: justify, alignItems: align }, props.style]}>{props.children}</View>
  );
};

export default Column;
