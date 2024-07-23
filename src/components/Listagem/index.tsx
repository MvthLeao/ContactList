import { useDispatch } from 'react-redux'
import { BotaoCancelar, BotaoEditar, BotaoSalvar } from '../../styles'
import { useState } from 'react'
import Tarefa from '../../models/Tarefa'
import * as S from './style'
import { editar, remover } from '../../store/reducers/funcionalidades'

type NovoCadastradoProps = {
  contato: Tarefa
}

const NovoCadastrado: React.FC<NovoCadastradoProps> = ({ contato }) => {
  const dispatch = useDispatch()
  const {
    nome: nomeInicial,
    email: emailInicial,
    tel: telInicial,
    id
  } = contato

  const [editando, setEditando] = useState(false)
  const [nome, setNome] = useState(nomeInicial)
  const [email, setEmail] = useState(emailInicial)
  const [tel, setTel] = useState(telInicial)

  const cancelaEdicao = () => {
    setEditando(false)
    setNome(nomeInicial)
    setEmail(emailInicial)
    setTel(telInicial)
  }

  return (
    <S.Container>
      <S.Contato>
        <input
          type="text"
          placeholder="Nome Completo"
          disabled={!editando}
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          disabled={!editando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <input
          type="tel"
          placeholder="(99) 99999-9999"
          disabled={!editando}
          value={tel}
          onChange={(evento) => setTel(evento.target.value)}
        />
        {editando ? (
          <>
            <BotaoSalvar
              type="button"
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    tel,
                    id
                  })
                )
                setEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelar type="button" onClick={cancelaEdicao}>
              Cancelar
            </BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botoes>
              <BotaoEditar type="button" onClick={() => setEditando(true)}>
                Editar
              </BotaoEditar>
              <BotaoCancelar
                type="button"
                onClick={() => dispatch(remover(id))}
              >
                Remover
              </BotaoCancelar>
            </S.Botoes>
          </>
        )}
      </S.Contato>
    </S.Container>
  )
}

export default NovoCadastrado
