import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import NovoCadastrado from '../../Listagem/index'
import * as S from '../style'

const ListaContatos: React.FC = () => {
  const { itens } = useSelector((state: RootReducer) => state.funcionalidades)

  return (
    <main>
      <S.Titulo>LISTAGEM DE CONTATOS</S.Titulo>
      {itens.map((contato) => (
        <NovoCadastrado key={contato.id} contato={contato} />
      ))}
    </main>
  )
}

export default ListaContatos
