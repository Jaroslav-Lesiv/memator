import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleProp, Text as RNText, TextProps, TextStyle } from 'react-native';
import { COLORS, FONT_FAMIY, THEME_DARK, THEME_WHITE } from '../../../../constants/theme';
import { useMst } from '../../../../mobx';
import { translate } from '../../../../utils/helpers';
import styles from './styles';

interface Props extends TextProps {
  size?: number;
  font?: FONT_FAMIY;
  color?: COLORS;
  t: string;
  data?: any;
  style?: StyleProp<TextStyle>;
}

export const Text = observer(
  ({
    size = 16,
    font = FONT_FAMIY.REGULAR,
    color = COLORS.TEXT,
    style,
    t,
    data,
    ...props
  }: React.PropsWithChildren<Props>) => {
    const { themes, language } = useMst();
    return (
      <RNText {...props} style={[styles.text, { fontSize: size, fontFamily: font, color: themes.theme[color] }, style]}>
        {translate(language.language.translates, t, data)}
      </RNText>
    );
  },
);
