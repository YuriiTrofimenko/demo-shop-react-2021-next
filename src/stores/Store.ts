import { createContext, useContext } from 'react'
import productStore from './ProductStore'
import { ProductStore } from './ProductStore'

export interface IStore {
  productStore: ProductStore
}

export const store: IStore = {
  productStore
}

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext)
}