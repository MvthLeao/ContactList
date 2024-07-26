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
        {editando ? (
          <S.AreaEdicao
            type="text"
            placeholder="Nome Completo"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
          />
        ) : (
          <S.Registro>{nome}</S.Registro>
        )}
        {editando ? (
          <S.AreaEdicao
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        ) : (
          <S.Registro>{email}</S.Registro>
        )}
        {editando ? (
          <S.AreaEdicao
            type="tel"
            placeholder="(99) 99999-9999"
            value={tel}
            onChange={(evento) => setTel(evento.target.value)}
          />
        ) : (
          <S.Registro>{tel}</S.Registro>
        )}
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
