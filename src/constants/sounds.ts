import { Platform } from 'react-native';
import Sound from 'react-native-sound';

export const SOUNDS = {
  NO_GOD: Platform.select({
    ios: new Sound(require('../assets/audio/no_god_please.mp3')),
    android: new Sound('no_god_please.mp3', Sound.MAIN_BUNDLE),
    default: new Sound('no_god_please.mp3', Sound.MAIN_BUNDLE),
  }),
  OOPSI:Platform.select({
    ios: new Sound(require('../assets/audio/oopsi.mp3')),
    android: new Sound('oopsi.mp3', Sound.MAIN_BUNDLE),
    default: new Sound('oopsi.mp3', Sound.MAIN_BUNDLE),
  }),
};
