import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, LayoutChangeEvent, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { SCREENS } from '../../../constants/screens';
import { SOUNDS } from '../../../constants/sounds';
import { ALIGN, COLORS, FONT_FAMIY, JUSTIFY, THEME_WHITE } from '../../../constants/theme';
import { useMst } from '../../../mobx';
import player from '../../../services/sound';
import { getRandomInt } from '../../../utils/math';
import { RootStackParamList } from '../../Router';
import BgBoxView from '../../shared/blocks/BgBoxView/BgBoxView';
import Column from '../../shared/blocks/Column/Column';
import Image from '../../shared/blocks/Image/Image';
import Row from '../../shared/blocks/Row/Row';
import ButtonRunded from '../../shared/controls/buttons/ButtonRunded/ButtonRunded';
import { Text } from '../../shared/typo/Text/Text';
import CalculatorButton from './components/CalculatorButton/CalculatorButton';
import CalculatorResult from './container/CalculatorResult/CalculatorResult';

const MAX_WIDTH = 400;
const OFFSET = 10;
interface CalculatorScreenProps {
  navigation: NavigationProp<RootStackParamList, SCREENS.CALCULATOR>;
}

const CalculatorScreen = (props: CalculatorScreenProps) => {
  const { themes } = useMst();

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button
          color={themes.theme[COLORS.TEXT]}
          onPress={() => props.navigation.navigate(SCREENS.HISTORY)}
          title="History"
        />
      ),
      headerTintColor: themes.theme[COLORS.TEXT],
      headerStyle: {
        backgroundColor: themes.theme[COLORS.BACKGROUND],
      },
    });
  }, [props.navigation]);

  const { calculator } = useMst();
  const [image, setImage] = useState('');

  const [width, setWidth] = useState(MAX_WIDTH);
  const [buttonWidth, setButtonWidth] = useState(MAX_WIDTH);

  const oLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
    setButtonWidth(Math.round((MAX_WIDTH - OFFSET * 2) / 5.5));
  };

  // const nav = useNavigation();

  // console.log({ width, buttonWidth });
  return (
    <BgBoxView style={{ flex: 1 }} background={COLORS.BACKGROUND}>
      <SafeAreaView style={{ flex: 1, width }} onLayout={oLayout}>
        <View style={{ flex: 1 }}>
          {image ? (
            <View style={{ width: 100, position: 'absolute', top: 10, left: 10 }}>
              <Image resizeMode={'contain'} aspectRatio={1} source={require('../../../assets/image/face-2.png')} />
            </View>
          ) : null}
          <CalculatorResult />
          <Column>
           
            <Row align={ALIGN.START} style={{ marginBottom: 20 }} justify={JUSTIFY.EVENLY}>
              <CalculatorButton onPress={calculator.clear} color={COLORS.MAIN} width={buttonWidth} label={'AC'} />

              <CalculatorButton width={buttonWidth} onPress={calculator.remove} label={'<'} />

              <CalculatorButton width={buttonWidth} onPress={calculator.sign} label={'%'} />

              <CalculatorButton highlighted width={buttonWidth} onPress={calculator.sign} label={'÷'} />
            </Row>
            <Row align={ALIGN.START} style={{ marginBottom: 20 }} justify={JUSTIFY.EVENLY}>
              <CalculatorButton onPress={calculator.sign} width={buttonWidth} label={'7'} />

              <CalculatorButton width={buttonWidth} onPress={calculator.sign} label={'8'} />

              <CalculatorButton width={buttonWidth} onPress={calculator.sign} label={'9'} />

              <CalculatorButton highlighted width={buttonWidth} onPress={calculator.sign} label={'×'} />
            </Row>
            <Row align={ALIGN.CENTER} style={{ marginBottom: 20 }} justify={JUSTIFY.EVENLY}>
              <CalculatorButton width={buttonWidth} onPress={calculator.sign} label={'4'} />

              <CalculatorButton width={buttonWidth} onPress={calculator.sign} label={'5'} />

              <CalculatorButton width={buttonWidth} onPress={calculator.sign} label={'6'} />

              <CalculatorButton highlighted width={buttonWidth} onPress={calculator.sign} label={'-'} />
            </Row>
            <Row align={ALIGN.CENTER} style={{ marginBottom: 20 }} justify={JUSTIFY.EVENLY}>
              <CalculatorButton width={buttonWidth} onPress={calculator.sign} label={'1'} />

              <CalculatorButton width={buttonWidth} onPress={calculator.sign} label={'2'} />

              <CalculatorButton width={buttonWidth} onPress={calculator.sign} label={'3'} />

              <CalculatorButton highlighted width={buttonWidth} onPress={calculator.sign} label={'+'} />
            </Row>

            <Row align={ALIGN.CENTER} style={{ marginBottom: 20 }} justify={JUSTIFY.EVENLY}>
              <CalculatorButton width={buttonWidth} onPress={calculator.sign} label={'0'} />

              <CalculatorButton width={buttonWidth} onPress={calculator.sign} label={'.'} />

              <CalculatorButton
                highlighted
                onPress={calculator.comparison}
                size={buttonWidth / 2}
                width={buttonWidth * 2 + OFFSET}
                height={buttonWidth}
                label={'='}
              />
            </Row>
          </Column>

          <Button title={'MEM'} onPress={calculator.getMeme} />

          {/* @ts-ignore */}
          {/* <Button onPress={() => nav.navigate(SCREENS.HISTORY)} title="His" /> */}
        </View>
      </SafeAreaView>
    </BgBoxView>
  );
};

export default CalculatorScreen;
