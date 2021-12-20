import config from '../../../../assets/fonts/fontello/config.json';
import { createIconSetFromFontello } from '@expo/vector-icons';

const CustomIcons = createIconSetFromFontello(config, 'fontello', 'fontello.ttf');

export default CustomIcons;
