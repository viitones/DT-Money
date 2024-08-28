import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(prop) => prop.theme['gray-900']};
  padding-block: 2.5rem 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding-inline: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  all: unset;
  height: 50px;
  background: ${(prop) => prop.theme['green-500']};
  color: ${(prop) => prop.theme.white};
  font-weight: bold;
  padding-inline: 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(prop) => prop.theme['green-700']};
    transition: background-color 0.2s;
  }
`
