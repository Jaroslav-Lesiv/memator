import { types, onSnapshot, getRoot } from 'mobx-state-tree';
// import { Product } from '../models/Product';
// import { User } from '../models/User';

export const NavigationStore = types
  .model('NavigationStore', {
    productDetailScreenParams: types.map(
      types.model('ProductDetailScreenParams', {
        // product: types.optional(types.safeReference(Product)),
      }),
    ),
    userProfileScreenParams: types.model('UserProfileScreenParams', {
    //   user: types.maybe(),
    }),
  })
  .actions((self) => ({}));
