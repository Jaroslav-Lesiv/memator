import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { SCREENS } from '../../../constants/screens';
import { COLORS } from '../../../constants/theme';
import { RootStackParamList } from '../../Router';
import BgBoxView from '../../shared/blocks/BgBoxView/BgBoxView';
import { Text } from '../../shared/typo/Text/Text';

interface MainScreenProps {}

const MainScreen = (props: React.FunctionComponent<MainScreenProps>) => {
  const navigation: NavigationProp<RootStackParamList, SCREENS.MAIN> = useNavigation();

  return (
    <BgBoxView style={{ flex: 1 }} background={COLORS.BACKGROUND}>
      <SafeAreaView>
        <Text t={'Memulator'} size={40} />
        <Button onPress={() => navigation.navigate(SCREENS.CALCULATOR)} title="Calc" />
      </SafeAreaView>
    </BgBoxView>
  );
};

export default MainScreen;
