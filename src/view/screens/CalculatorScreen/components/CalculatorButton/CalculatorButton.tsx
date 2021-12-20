import React from 'react';
import { View } from 'react-native';
import { COLORS, FONT_FAMIY, THEME_DARK, THEME_WHITE } from '../../../../../constants/theme';
import ButtonRunded from '../../../../shared/controls/buttons/ButtonRunded/ButtonRunded';
import { Text } from '../../../../shared/typo/Text/Text';

interface Props {
  width: number;
  height?: number;
  size?: number;
  // value: number | string;
  label?: string;
  highlighted?: boolean;
  color?: COLORS;
  onPress: (value: string | number) => void;
}

const CalculatorButton = (props: Props) => {
  const color = props.color || props.highlighted ? THEME_WHITE.MAIN : THEME_WHITE.TEXT;
  return (
    <ButtonRunded
      onPress={() => props.onPress(props.label)}
      background={props.highlighted ? COLORS.LIGHT : COLORS.TRANSPARENT}
      height={props.height || props.width}
      size={props.width}
    >
      <Text
        t={props.label}
        style={{ textShadowColor: color, textShadowRadius: 2, textShadowOffset: { width: 0, height: 0 } }}
        color={props.color || props.highlighted ? COLORS.MAIN : COLORS.TEXT}
        font={FONT_FAMIY.SEMI_BOLD}
        size={props.size || props.width / 2.5}
      />
    </ButtonRunded>
  );
};

export default CalculatorButton;
