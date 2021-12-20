import { types } from 'mobx-state-tree';

const ThemeModel = types.model({
  THEME: types.identifier,
  BACKGROUND: types.string,
  TEXT: types.string,
  MAIN: types.string,
  LIGHT: types.string,
  TRANSPARENT: types.string,
});

const ThemeStore = types
  .model({
    theme: types.reference(ThemeModel),
    themes: types.array(ThemeModel),
  })
  .actions((self) => ({
    selectTheme(theme) {
      self.theme = theme;
    },
  }));

export default ThemeStore;
