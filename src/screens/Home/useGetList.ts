/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useCallback, useState } from 'react'
import { booksData } from './ListBooks/types'
import { BooksService } from '@services'
import { AxiosResponse } from 'axios'

interface Props {
  perPage: number
}
interface ItemsUse {
  getList: (e: string, p: number, type: boolean) => void
  loading: boolean
  booksSearchValue: string
  booksData: booksData | undefined
  setBooks: (e: booksData) => void
}
export default function useGetList ({ perPage }: Props): ItemsUse {
  const [booksData, setBooks] = useState<booksData>()
  const [booksSearchValue, setBooksSearchValue] = useState('')
  const [loading, setLoading] = useState(false)
  const getList = useCallback(
    async (e: string, page: number, type: boolean) => {
      try {
        const service = new BooksService()
        if (!!!type) {
          setBooks({ items: [{}] })
          setLoading(true)
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const response: AxiosResponse = await service.listBooks({
          query: e,
          maxResult: 14,
          page: page ? page * perPage : 0
        })
        setBooks(response.data)
        setBooksSearchValue(e)
        setLoading(false)
      } catch (e) {
        setLoading(false)
      }
    },
    [perPage]
  )

  return {
    getList,
    loading,
    setBooks,
    booksSearchValue,
    booksData
  }
}
