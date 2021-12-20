import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../constants/screens';
import MainScreen from './screens/MainScreen/MainScreen';
import CalculatorScreen from './screens/CalculatorScreen/CalculatorScreen';
import HistoryScreen from './screens/HistoryScreen/HistoryScreen';
import { Text } from './shared/typo/Text/Text';
interface RouterProps {}

export type RootStackParamList = {
  [SCREENS.MAIN]: undefined;
  [SCREENS.CALCULATOR]: undefined;
  [SCREENS.HISTORY]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router: React.FunctionComponent<RouterProps> = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackVisible: true,
          headerShadowVisible: false,
          headerBackButtonMenuEnabled: true,
        }}
      >
        {/* <Stack.Screen name={SCREENS.MAIN} component={MainScreen} /> */}
        <Stack.Screen
          name={SCREENS.CALCULATOR}
          options={{
           title: ''
          }}
          component={CalculatorScreen}
        />
        <Stack.Screen name={SCREENS.HISTORY} component={HistoryScreen} options={{ presentation: 'modal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
