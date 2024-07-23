import styled from 'styled-components'
import color from '../../styles/colors'

export const Container = styled.div`
  margin: 10px;
  border-radius: 10px;
  color: ${color.CorPrincipal};
  background-color: ${color.CorTexto};
  border: 5px solid ${color.CorContrasteHover};
`

export const Titulo = styled.h2`
  color: ${color.CorPrincipal};
  margin: 16px;
  display: flex;
  justify-content: center;
`

export const Contato = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px;
  color: ${color.CorTexto};
  background-color: ${color.CorContraste};

  &:hover {
    background-color: ${color.CorContrasteHover};
  }
`

export const Botoes = styled.div`
  display: flex;
  gap: 10px;
`
