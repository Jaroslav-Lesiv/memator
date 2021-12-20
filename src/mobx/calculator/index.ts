import { types } from 'mobx-state-tree';
import { ALOWED_SYMBOLS, SYMBOLS_MAP, SYMBOL_REGX } from '../../constants/calculator';
import { MEMES } from '../../constants/memes';
import player from '../../services/sound';

const HistoryModel = types.model({
  prettie: types.string,
  result: types.string,
});
// declaring the shape of a node with the type `Todo`
const CalculatorModel = types
  .model({
    prettie: types.string,
    result: types.string,
    meme: types.number,
    history: types.array(HistoryModel),
  })
  .actions((self) => ({
    calculate: () => {
      const _result = self.result;
      try {
        let str = self.prettie;
        console.log({str},  str.replaceAll)
        enum SYMBOLS_MAP {
          '*' = '×',
          '/' = '÷',
        }
        Object.entries(SYMBOLS_MAP).forEach(([key, value]) => {
          str = str.replace(new RegExp(`${value}`, 'gi'), key);
        });
        console.log({ str });

        self.result = `${eval(str)}`;
      } catch (error) {
        console.log("CATCH", error)
        // return prev;
      }

      // add result to history
      // if result is different
      // and if expression has one or more operands
      if (_result !== self.result && SYMBOL_REGX.test(self.prettie)) {
        console.log('PUUUUSHHHS');
        self.history.push({
          result: self.result,
          prettie: self.prettie,
        });
      }
    },
  }))
  .actions((self) => ({
    sign: (sign) => {
      let _prettie = self.prettie;
      if (ALOWED_SYMBOLS.includes(sign) && isNaN(Number(_prettie[_prettie.length - 1]))) {
        _prettie = _prettie.slice(0, _prettie.length - 1);
      }

      let str = `${_prettie}${sign}`;

      str = str
        .split(SYMBOL_REGX)
        .filter((symbol) => symbol !== '')
        .map((symbol) => {
          if (!ALOWED_SYMBOLS.includes(symbol)) {
            if (symbol[0] === '0' && symbol[1] && symbol[1] !== '.') {
              symbol = symbol.slice(1, symbol.length);
            }
          }
          return symbol;
        })
        .join('');

      self.prettie = str;
      self.calculate();
    },
    getMeme: () => {
      let index = self.meme;
      if (index > MEMES.length - 1) index = 0;
      const meme = MEMES[index];

      if (meme.audio) player.play(meme.audio);
      self.prettie = meme.prettieValue;
      self.meme = index + 1;

      self.calculate();
    },
    comparison: () => {
      self.prettie = self.result;
      self.result = self.result;
    },
    remove: () => {
      self.prettie = self.prettie.slice(0, self.prettie.length - 1) || '0';
      self.calculate();
    },
    clear: () => {
      self.prettie = '0';
      self.result = '0';
    },
  }));

export default CalculatorModel;
