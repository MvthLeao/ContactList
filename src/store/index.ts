import { configureStore } from '@reduxjs/toolkit'
import FiltroReducer from './reducers/Filtro'
import atividadeReducer from './reducers/atividade'

const store = configureStore({
  reducer: {
    atividade: atividadeReducer,
    filtro: FiltroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
