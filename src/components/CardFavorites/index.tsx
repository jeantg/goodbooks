import React, { ReactNode } from 'react'

import { Container } from './styles'
interface Props {
  children: string | ReactNode[] | ReactNode
  src?: string
  index: number
}
const CardFavorites: React.FC<Props> = ({ children, src }) => {
  return (
    <Container className='fade-in'>
      <img src={src} alt='Uma imagem de um livro' />
      {children}
    </Container>
  )
}

export default CardFavorites
