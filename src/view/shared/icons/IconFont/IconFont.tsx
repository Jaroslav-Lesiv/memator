import React from 'react';
import { I18nManager, StyleProp, TextStyle } from 'react-native';
import styles from './styles';
import CustomIcons from '../CustomIcon/CustomIcon';
import { COLORS } from '../../../../constants/theme';
import { ICONS } from '../../../../constants/icons';

interface IconFontProps {
  size?: number;
  name: ICONS;
  color?: COLORS;
  style?: StyleProp<TextStyle>;
  revertInRTL?: boolean;
}

const IconFont: React.FunctionComponent<IconFontProps> = ({
  color = COLORS.DARK,
  size = 24,
  revertInRTL = true,
  style,
  ...props
}) => {
  return (
    <CustomIcons
      size={size}
      color={color}
      style={[styles.icon, I18nManager.isRTL && revertInRTL && styles.revert, style]}
      {...props}
    />
  );
};

export default IconFont;
