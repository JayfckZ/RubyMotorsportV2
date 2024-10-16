import { ReactElement, ReactNode } from 'react'
import { ButtonContainer, LinkContainer } from './styles'

type props = {
  children: ReactNode
  type: 'button' | 'link'
}

const Button = ({ children, type }: props) => {
  if (type === 'button') return <ButtonContainer>{children}</ButtonContainer>

  return <LinkContainer to="/novo">{children}</LinkContainer>
}

export default Button
