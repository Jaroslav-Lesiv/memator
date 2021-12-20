import { types } from 'mobx-state-tree';

const LanguageModel = types.model({
    language: types.identifier,
    translates: types.frozen()
});

const LanguageStore = types
  .model({
    language: types.reference(LanguageModel),
    languages: types.maybe(types.array(LanguageModel)),
  })
  .actions((self) => ({
    selectLanguage(language) {
      self.language = language;
    },
  }));

export default LanguageStore;
