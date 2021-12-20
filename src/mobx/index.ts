import { Instance, types } from 'mobx-state-tree';
import { createContext, useContext } from 'react';
import { Appearance } from 'react-native';
import { THEME_DARK, THEME_WHITE } from '../constants/theme';
import CalculatorModel from './calculator';
import LanguageStore from './language';
import ThemeStore from './theme';

const RootModel = types.model({
  calculator: CalculatorModel,
  themes: ThemeStore,
  language: LanguageStore,
});
const colorScheme = Appearance.getColorScheme();

export const initialState = RootModel.create({
  calculator: { prettie: '0', result: '0', meme: 0 },
  themes: {
    theme: colorScheme,
    themes: [THEME_DARK, THEME_WHITE],
  },
  language: {
    language: 'en',
    languages: [
      {
        language: 'en',
        translates: {
          hello: 'Hello',
        },
      },
      {
        language: 'ua',
        translates: {
          hello: 'Привіт',
        },
      },
    ],
  },
});

export type RootInstance = Instance<typeof RootModel>;

const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
