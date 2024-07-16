import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

type AtividadeState = {
  itens: Tarefa[]
}

const initialState: AtividadeState = {
  itens: [
    {
      id: 1,
      nomeContato: 'teste1',
      emailContato: 'teste1@outlook.com',
      phoneContato: '(00) 00000-0000'
    },
    {
      id: 2,
      nomeContato: 'teste2',
      emailContato: 'teste2@outlook.com',
      phoneContato: '(00) 00000-0000'
    },
    {
      id: 3,
      nomeContato: 'teste3',
      emailContato: 'teste3@outlook.com',
      phoneContato: '(00) 00000-0000'
    },
    {
      id: 4,
      nomeContato: 'teste4',
      emailContato: 'teste4@outlook.com',
      phoneContato: '(00) 00000-0000'
    }
  ]
}

const atividadeSlice = createSlice({
  name: 'atividades',
  initialState,
  reducers: {
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (p) => p.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { editar } = atividadeSlice.actions
export default atividadeSlice.reducer
