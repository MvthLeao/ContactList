import { useState } from 'react'
import Cadastrado from './components/Cadastramento/index'
import Header from './components/Header'
import Listagem from './components/Listagem'
import EstiloGlobal from './styles'
import Contato from './models/Cadastrados'

const App: React.FC = () => {
  const [contatos, setContatos] = useState<Contato[]>([])

  const adicionarContato = (contato: Contato) => {
    setContatos([...contatos, contato])
  }

  const editarContato = (id: number) => {
    console.log(`Editar contato com ID: ${id}`)
  }

  const removerContato = (id: number) => {
    setContatos(contatos.filter((contato) => contato.id !== id))
  }

  return (
    <>
      <EstiloGlobal />
      <Header />
      <Cadastrado adicionarContato={adicionarContato} />
      <Listagem
        contatos={contatos}
        editarContato={editarContato}
        removerContato={removerContato}
      />
    </>
  )
}

export default App
