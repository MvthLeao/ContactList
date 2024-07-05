import { BotaoCancelar, BotaoEditar } from '../../styles'
import * as S from './style'

const Listagem = ({ contatos, editarContato, removerContato }) => {
  return (
    <>
      <S.Container>
        <S.Titulo>LISTAGEM</S.Titulo>
        {contatos.map((contato) => (
          <S.Contato key={contato.id}>
            <span>
              {contato.nome} - {contato.email} - {contato.telefone}
            </span>
            <S.Botoes>
              <BotaoEditar onClick={() => editarContato(contato.id)}>
                Editar
              </BotaoEditar>
              <BotaoCancelar onClick={() => removerContato(contato.id)}>
                Remover
              </BotaoCancelar>
            </S.Botoes>
          </S.Contato>
        ))}
      </S.Container>
    </>
  )
}

export default Listagem
