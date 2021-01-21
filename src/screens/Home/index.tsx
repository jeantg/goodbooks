import React, { useState } from 'react'

import { Container } from './styles'
import ListBooks from './ListBooks/index'
import { Header, Pagination, DescriptionBooks } from '@components'
import { BooksContext } from '@context'
import { TypeBooks } from './ListBooks/types'
import useDebounce from './useDebounce'
import useGetList from './useGetList'
import LoadCardView from './LoadScreenViewCard/index'
const Home: React.FC = () => {
  const [bookDescription, setBookDescription] = useState<TypeBooks>({})
  const perPage = 15
  const {
    booksData,
    booksSearchValue,
    getList,
    setBooks,
    loading
  } = useGetList({
    perPage
  })

  const debounced = useDebounce(getList, 600)
  return (
    <BooksContext.Provider
      value={{ booksData, setBooks, bookDescription, setBookDescription }}
    >
      {!!bookDescription && (
        <DescriptionBooks
          key={!!bookDescription?.id ? 'true' : 'false'}
          setShowModal={setBookDescription}
        />
      )}
      <Header onChange={debounced} />
      {loading && <LoadCardView />}
      <Container>
        <ListBooks />
        <Pagination
          count={booksData?.totalItems ? booksData?.totalItems - perPage : 0}
          perPage={perPage}
          key={bookDescription?.id}
          onChangePage={(page) => {
            getList(booksSearchValue, page, true)
          }}
        />
      </Container>
    </BooksContext.Provider>
  )
}

export default Home
