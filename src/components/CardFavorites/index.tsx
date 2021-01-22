import React, { ReactNode, useContext } from 'react'
import { Container } from './styles'
import { FavoriteBorderIcon } from '@icons'
import { AppContext } from '@context'
interface Props {
  children: string | ReactNode[] | ReactNode
  src?: string
  index: number
}
const CardFavorites: React.FC<Props> = ({ children, src, index }) => {
  const { removeFavorites } = useContext(AppContext)
  return (
    <Container className='fade-in'>
      <img src={src} alt='Uma imagem de um livro' />
      {children}
      <FavoriteBorderIcon onClick={() => removeFavorites(index)} />
    </Container>
  )
}

export default CardFavorites
