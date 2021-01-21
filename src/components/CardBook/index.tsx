import React, { ReactNode, useContext } from 'react'

import { Container } from './styles'
import { BooksContext } from '@context'
interface Props {
  children: string | ReactNode[] | ReactNode
  src?: string
  index: number
}
const CardBook: React.FC<Props> = ({ index, children, src }) => {
  const { setBookDescription, booksData } = useContext(BooksContext)
  return (
    <Container
      onClick={() => setBookDescription(booksData?.items?.[index])}
      className='fade-in'
    >
      <img src={src} alt='Uma imagem de um livro' />
      {children}
    </Container>
  )
}

export default CardBook
