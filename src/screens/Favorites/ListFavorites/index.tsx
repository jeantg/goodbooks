import React, { useContext } from 'react'

import { Container } from './styles'
import { AppContext } from '@context'
import { CardFavorites } from '@components'
const ListFavorites: React.FC = () => {
  const { favoritesData } = useContext(AppContext)
  return (
    <Container>
      <ul>
        {Array.isArray(favoritesData) &&
          favoritesData.map((book, index) => (
            <CardFavorites
              src={book?.volumeInfo?.imageLinks?.smallThumbnail}
              index={index}
            >
              <div className='content'>
                <h1>{book?.volumeInfo?.title}</h1>
              </div>
            </CardFavorites>
          ))}
      </ul>
    </Container>
  )
}

export default ListFavorites
