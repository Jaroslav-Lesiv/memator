export enum SYMBOLS_MAP {
  '*' = '×',
  '/' = '÷',
}

export const ALOWED_SYMBOLS = ['%', '+', '-', '/', '*', '(', ')', '×', '÷'];
export const SYMBOL_REGX = /=?(\%|\+|\×|\÷|\-|\/|\*|\(|\))/i;
