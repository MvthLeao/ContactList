import styled from 'styled-components'

export const Titulo = styled.h2`
  padding-bottom: 30px;
  text-align: center;
  border-radius: 10px;
  color: #fbf6f3;
  background-color: #feb06a;
`

export const Formulario = styled.form`
  padding: 16px;
  margin: 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #feb06a;
`

export const Inputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  margin: 5px;
  padding: 8px;
  border: none;
  border-radius: 10px;
  width: calc(100% - 32px);
  max-width: 300px;
`

export const Botoes = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 8px;
  justify-content: center;
`
