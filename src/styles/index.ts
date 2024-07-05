import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
export const Container = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-itens: stretch;
    margin: 20px;
  }
`
export const BotaoSalvar = styled.button`
  padding: 8px 32px;
  font-size: 16px;
  font-weight: bold;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #31db79;
  }
`

export const BotaoCancelar = styled.button`
  padding: 8px 32px;
  font-size: 16px;
  font-weight: bold;
  background-color: #c0392b;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #dd4232;
  }
`

export const BotaoEditar = styled.button`
  padding: 8px 32px;
  font-size: 16px;
  font-weight: bold;
  background-color: #34495e;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #4d6c8b;
  }
`

export default EstiloGlobal
