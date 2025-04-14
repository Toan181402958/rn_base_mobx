import CreateStore from '@src/shared/store/create';
import UIStore from '@src/shared/store/ui';
import UserStore from '@src/shared/store/user';
import React, {createContext, ReactNode, useContext} from 'react';
export interface IStore {
  uiStore: UIStore;
  userStore: UserStore;
  createStore: CreateStore;
}
export const StoreContext = createContext<IStore | null>(null);
export const StoreProvider = ({children}: {children: ReactNode}) => {
  const store: IStore = {
    uiStore: new UIStore(),
    userStore: new UserStore(),
    createStore: new CreateStore(),
  };
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
export const useStores = (): IStore => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStores must be used within a StoreProvider');
  }
  return context;
};
