import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  display: block;
  width: 100%;
  background-color: red;
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
`

export const LinkContainer = styled(Link)`
  display: block;
  width: 100%;
  background-color: red;
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
`
