import { observer } from 'mobx-react-lite';
import React from 'react';
import { View, ViewProps } from 'react-native';
import { COLORS } from '../../../../constants/theme';
import { useMst } from '../../../../mobx';

interface BgBoxViewProps extends ViewProps {
  background?: COLORS;
}

const BgBoxView: React.FunctionComponent<BgBoxViewProps> = observer(({ background = COLORS.BACKGROUND, ...props }) => {
  const { themes } = useMst();
  return (
    <View {...props} style={[props.style, { backgroundColor: themes.theme[background] }]}>
      {props.children}
    </View>
  );
});

export default BgBoxView;
