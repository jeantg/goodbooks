import React from 'react'
import { Container } from './styles'
import { Header } from '@components'
import ListFavorites from './ListFavorites/index'
const Favorites: React.FC = () => {
  return (
    <Container>
      <Header />
      <h1> Veja seus livros favoritos</h1>
      <ListFavorites />
    </Container>
  )
}

export default Favorites
