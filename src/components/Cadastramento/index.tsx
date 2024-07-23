import { useDispatch, useSelector } from 'react-redux'
import { BotaoCancelar, BotaoSalvar } from '../../styles'
import { RootReducer } from '../../store'
import { FormEvent, useState } from 'react'
import { cadastro } from '../../store/reducers/funcionalidades'
import Tarefa from '../../models/Tarefa'
import * as S from './style'

const ListaCadastro = () => {
  const { itens } = useSelector((state: RootReducer) => state.funcionalidades)

  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const novoCadastro = (evento: FormEvent) => {
    evento.preventDefault()
    const adicionaCadastrado: Tarefa = {
      id: 0,
      nome,
      email,
      tel
    }
    dispatch(cadastro(adicionaCadastrado))
    limpar()
  }

  const limpar = () => {
    setNome('')
    setEmail('')
    setTel('')
  }

  return (
    <main>
      <S.Formulario onSubmit={novoCadastro}>
        <S.Titulo>Adicione um novo número:</S.Titulo>
        <S.Inputs>
          <S.Input
            type="text"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            placeholder="Nome Completo"
          />
          <S.Input
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="E-mail"
          />
          <S.Input
            type="Tel"
            value={tel}
            onChange={({ target }) => setTel(target.value)}
            placeholder="(00) 00000-0000"
          />
        </S.Inputs>

        <S.Botoes className="Botoes">
          <BotaoSalvar type="submit">Salvar</BotaoSalvar>
          <BotaoCancelar onClick={limpar} type="button">
            Cancelar
          </BotaoCancelar>
        </S.Botoes>
      </S.Formulario>
    </main>
  )
}

export default ListaCadastro
