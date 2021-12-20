import { observer } from 'mobx-react-lite';
import { useMst } from '../mobx';

export const translate = (translates: any, key: string, data?: any) => {
  //   const { language } = useMst();
  const translate = translates[key] || key;
  return translate;
};
