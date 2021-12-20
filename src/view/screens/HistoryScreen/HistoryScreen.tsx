import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, FlatList, LayoutChangeEvent, View } from 'react-native';
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

const MAX_WIDTH = 400;
const OFFSET = 10;
interface CalculatorScreenProps {
  navigation: NavigationProp<RootStackParamList, SCREENS.CALCULATOR>;
}

const CalculatorScreen = (props: CalculatorScreenProps) => {
  const { themes } = useMst();

  // React.useLayoutEffect(() => {
  //   props.navigation.setOptions({
  //     headerRight: () => (
  //       <Button
  //         color={themes.theme[COLORS.TEXT]}
  //         onPress={() => props.navigation.navigate(SCREENS.HISTORY)}
  //         title="History"
  //       />
  //     ),
  //     headerTintColor: themes.theme[COLORS.TEXT],
  //     headerStyle: {
  //       backgroundColor: themes.theme[COLORS.BACKGROUND],
  //     },
  //   });
  // }, [props.navigation]);

  const { calculator } = useMst();
  const [image, setImage] = useState('');

  const [width, setWidth] = useState(MAX_WIDTH);
  const [buttonWidth, setButtonWidth] = useState(MAX_WIDTH);

  const oLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
    setButtonWidth(Math.round((MAX_WIDTH - OFFSET * 2) / 5.5));
  };

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTintColor: themes.theme[COLORS.TEXT],
      headerStyle: {
        backgroundColor: themes.theme[COLORS.BACKGROUND],
      },
    });
  }, [props.navigation]);
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
          <FlatList
            data={calculator.history}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <Text numberOfLines={1} color={COLORS.MAIN} size={33} key={index} t={`${item.prettie}=${item.result}`} />
            )}
          />
        </View>
      </SafeAreaView>
    </BgBoxView>
  );
};

export default CalculatorScreen;
