import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

type AtividadeState = {
  itens: Tarefa[]
}

const initialState: AtividadeState = {
  itens: [
    {
      id: 1,
      nome: 'Nome completo ',
      email: 'Email principal',
      tel: 'Contato'
    }
  ]
}

const funcionalidadeSlice = createSlice({
  name: 'funcionalidades',
  initialState,
  reducers: {
    cadastro: (state, action: PayloadAction<Tarefa>) => {
      const cadastrado = state.itens.some(
        (atividade) =>
          atividade.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (cadastrado) {
        alert('Este nome já foi cadastrado!')
      } else {
        const novoCadastrado =
          state.itens.length > 0
            ? state.itens[state.itens.length - 1].id + 1
            : 1
        state.itens.push({ ...action.payload, id: novoCadastrado })
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (atividade) => atividade.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const posicao = state.itens.findIndex((p) => p.id === action.payload.id)
      if (posicao >= 0) {
        state.itens[posicao] = action.payload
      }
    }
  }
})

export default funcionalidadeSlice.reducer
export const { remover, cadastro, editar } = funcionalidadeSlice.actions
