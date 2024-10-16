import { ReactElement, ReactNode } from 'react'
import { ButtonContainer, LinkContainer } from './styles'

type props = {
  children: ReactNode
  type: 'button' | 'link'
  to?: string
}

const Button = ({ children, type, to }: props) => {
  if (type === 'button') return <ButtonContainer>{children}</ButtonContainer>

  return <LinkContainer to={`/${to}`}>{children}</LinkContainer>
}

export default Button
