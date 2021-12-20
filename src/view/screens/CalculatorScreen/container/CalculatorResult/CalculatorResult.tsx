import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, View } from 'react-native';
import { ALIGN, COLORS, FONT_FAMIY, JUSTIFY, THEME_WHITE } from '../../../../../constants/theme';
import { useMst } from '../../../../../mobx';
import Column from '../../../../shared/blocks/Column/Column';
import { Text } from '../../../../shared/typo/Text/Text';

interface CalculatorResultProps {}

const CalculatorResult: React.FunctionComponent<CalculatorResultProps> = observer((props) => {
  const { calculator } = useMst();
  return (
    <Column style={{ flex: 1, paddingHorizontal: 50 }} align={ALIGN.END} justify={JUSTIFY.CENTER}>
      {/* <Text size={22}>value: {value}</Text>
        <Text size={22}>vaue prettie: {prettieValue}</Text> */}
      <Text
        t={calculator.prettie}
        numberOfLines={1}
        adjustsFontSizeToFit
        style={{
          textShadowColor: THEME_WHITE.MAIN,
          textShadowRadius: 4,
          textShadowOffset: { width: 0, height: 0 },
          marginBottom: 10,
        }}
        color={COLORS.MAIN}
        font={FONT_FAMIY.SEMI_BOLD}
        size={85}
      />
      <Text
        t={calculator.result}
        numberOfLines={1}
        adjustsFontSizeToFit
        style={{
          textShadowColor: THEME_WHITE.MAIN,
          textShadowRadius: 2,
          textShadowOffset: { width: 0, height: 0 },
        }}
        color={COLORS.MAIN}
        font={FONT_FAMIY.REGULAR}
        size={30}
      />
    </Column>
  );
});

export default CalculatorResult;
