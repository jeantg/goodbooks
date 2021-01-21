import React, { useContext } from 'react'

import { Container } from './styles'
import CardBooks from './CardDescription/index'
import { BooksContext } from '@context'
interface Props {
  setShowModal: (e: any) => void
}

const DescriptionBooks: React.FC<Props> = ({ setShowModal }) => {
  const { bookDescription } = useContext(BooksContext)
  return !!bookDescription?.id ? (
    <Container>
      <CardBooks setShowModal={setShowModal} />
    </Container>
  ) : (
    <></>
  )
}

export default DescriptionBooks
