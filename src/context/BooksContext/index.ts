import { createContext } from 'react'
import { TypeBooks, booksData } from '../../screens/Home/ListBooks/types'

interface ContextType {
  booksData: booksData | undefined
  setBookDescription: (e: TypeBooks | undefined) => void
  bookDescription: TypeBooks | undefined
  setBooks: (e: booksData) => void
}
export const BooksContext = createContext<ContextType>({
  booksData: { items: [{ id: '' }] },
  bookDescription: { id: '' },
  setBookDescription: () => '',
  setBooks: () => true
})
