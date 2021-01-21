import React, { useContext } from 'react'
import { Container } from './styles'
import { CardBook } from '@components'
import { BooksContext } from '@context'

const ListBooks: React.FC = () => {
  const { booksData } = useContext(BooksContext)
  return (
    <Container>
      <ul>
        {booksData?.items?.[0]?.id &&
          booksData?.items.map((book, index) => (
            <CardBook
              key={book?.id}
              src={book?.volumeInfo?.imageLinks?.smallThumbnail}
              index={index}
            >
              <div className='ellipsis'>
                <h2 className='overflow'>{book?.volumeInfo?.title}</h2>
              </div>
            </CardBook>
          ))}
      </ul>
    </Container>
  )
}

export default ListBooks
