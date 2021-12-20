import React from 'react';
import { View, ViewProps } from 'react-native';
import { ALIGN, JUSTIFY } from '../../../../constants/theme';

import styles from './styles';

interface RowProps extends ViewProps {
  justify?: JUSTIFY;
  align?: ALIGN;
}

const Row: React.FunctionComponent<RowProps> = ({ justify = JUSTIFY.START, align = ALIGN.BASELINE, children, ...props }) => {
  return (
    <View  {...props} style={[styles.row, { justifyContent: justify, alignItems: align }, props.style]}>
      {children}
    </View>
  );
};

export default Row;
