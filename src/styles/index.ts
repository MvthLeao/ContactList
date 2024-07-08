import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import color from './colors'

const EstiloGlobal = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "DM Sans", sans-serif;
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
  background-color: ${color.CorBotaoSalvar};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: ${color.CorBotaoSalvarHover};
  }
`

export const BotaoCancelar = styled.button`
  padding: 8px 32px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${color.CorBotaoRemover};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: ${color.CorBotaoRemoverHover};
  }
`

export const BotaoEditar = styled.button`
  padding: 8px 32px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${color.CorBotaoEditar};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: ${color.CorBotaoEditarHover};
  }
`

export default EstiloGlobal
