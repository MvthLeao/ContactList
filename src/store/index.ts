import { configureStore } from '@reduxjs/toolkit'
import funcionalidadesReducer from './reducers/funcionalidades'

const store = configureStore({
  reducer: {
    funcionalidades: funcionalidadesReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
