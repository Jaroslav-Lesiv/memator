// export enum FONT_FAMIY {
//   LIGHT = 'OpenSans-Light',
//   REGULAR = 'OpenSans-Regular',
//   MEDIUM = 'OpenSans-Medium',
//   SEMI_BOLD = 'OpenSans-Semibold',
//   BOLD = 'OpenSans-Bold',
//   EXTRA_BOLD = 'OpenSans-ExtraBold',
// }

export enum FONT_FAMIY {
  ULTRA_IGHT = 'SFProDisplay-Ultralight',
  THIN = 'SFProDisplay-Thin',
  HEAVY = 'SFProDisplay-Heavy',
  LIGHT = 'SFProDisplay-Light',
  REGULAR = 'SFProDisplay-Regular',
  MEDIUM = 'SFProDisplay-Medium',
  SEMI_BOLD = 'SFProDisplay-Semibold',
  BOLD = 'SFProDisplay-Bold',
  EXTRA_BOLD = 'SFProDisplay-Black',
}
export enum COLORS {
  // PRIMARY = '#1d1d1d',
  // SECONDARY = '#4DBFFF',
  // WHITE = '#ffffff',
  // GRAY = '#B9B9B9',
  // DARK = '#000',

  BACKGROUND = 'BACKGROUND',
  TEXT = 'TEXT',
  MAIN = 'MAIN',
  LIGHT = 'LIGHT',
  TRANSPARENT = 'BACKGROUND',
}

export const THEME_WHITE = {
  THEME: 'light',
  BACKGROUND: '#ffffff',
  TEXT: '#555a60',
  MAIN: '#f4ab41',
  LIGHT: '#e3e9ec',
  TRANSPARENT: 'transparent',
};

export const THEME_DARK = {
  THEME: 'dark',
  BACKGROUND: '#555a60',
  TEXT: '#e3e9ec',
  MAIN: '#f4ab41',
  LIGHT: 'rgba(244, 171, 65, 0.1)',
  TRANSPARENT: 'transparent',
};

export enum ALIGN {
  START = 'flex-start',
  END = 'flex-end',
  CENTER = 'center',
  BASELINE = 'baseline',
}

export enum JUSTIFY {
  START = 'flex-start',
  END = 'flex-end',
  CENTER = 'center',
  BETWEEN = 'space-between',
  EVENLY = 'space-evenly',
  AROUND = 'space-around',
}
