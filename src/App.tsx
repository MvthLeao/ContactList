import { Provider } from 'react-redux'
import Cadastrado from './components/Cadastramento/index'
import Header from './components/Header'
import EstiloGlobal from './styles'
import store from './store'
import ListaContatos from './components/Listagem/NovoCadastrado/ListaContatos'

const App = () => (
  <>
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <Cadastrado />
      <ListaContatos />
    </Provider>
  </>
)

export default App
