import { useEffect, useState } from 'react'
import Contato from '../../models/Cadastrados'
import { BotaoCancelar, BotaoSalvar } from '../../styles'
import * as S from './style'

type Props = {
  adicionarContato: (contato: Contato) => void
  contatoInicial?: Contato
}

const Cadastrado = ({ adicionarContato, contatoInicial }: Props) => {
  const [nomeNovo, setNomeNovo] = useState(contatoInicial?.nome || '')
  const [emailNovo, setEmailNovo] = useState(contatoInicial?.email || '')
  const [telNovo, setTelNovo] = useState(contatoInicial?.telefone || '')

  useEffect(() => {
    if (contatoInicial) {
      setNomeNovo(contatoInicial.nome)
      setEmailNovo(contatoInicial.email)
      setTelNovo(contatoInicial.telefone)
    }
  }, [contatoInicial])

  const SalvarContato = (e: React.FormEvent) => {
    e?.preventDefault()
    if (!nomeNovo || !emailNovo || !telNovo) {
      alert('Todos os campos são obrigatórios!')
      return
    }
    const novoContato: Contato = {
      id: Date.now(),
      nome: nomeNovo,
      email: emailNovo,
      telefone: telNovo
    }
    adicionarContato(novoContato)
    setNomeNovo('')
    setEmailNovo('')
    setTelNovo('')
  }

  const CancelarContato = () => {
    setNomeNovo('')
    setEmailNovo('')
    setTelNovo('')
  }

  return (
    <>
      <S.Formulario onSubmit={SalvarContato} onReset={CancelarContato}>
        <S.Titulo>Adicione um novo número:</S.Titulo>
        <S.Inputs>
          <S.Input
            type="text"
            id="nome"
            placeholder="Nome Completo"
            value={nomeNovo}
            onChange={(evento) => setNomeNovo(evento.target.value)}
          />
          <S.Input
            type="text"
            id="E-mail"
            placeholder="E-mail"
            value={emailNovo}
            onChange={(evento) => setEmailNovo(evento.target.value)}
          />
          <S.Input
            type="number"
            id="contato"
            placeholder="(00) 00000-0000"
            value={telNovo}
            onChange={(evento) => setTelNovo(evento.target.value)}
          />
        </S.Inputs>

        <S.Botoes className="Botoes">
          <BotaoSalvar type="submit">Salvar</BotaoSalvar>
          <BotaoCancelar type="reset">Cancelar</BotaoCancelar>
        </S.Botoes>
      </S.Formulario>
    </>
  )
}

export default Cadastrado
