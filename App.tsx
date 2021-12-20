import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { initialState, Provider } from './src/mobx';
import Router from './src/view/Router';

export default function App() {
  return (
    // <View style={styles.container}>
    <Provider value={initialState}>
      <Router />
    </Provider>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
