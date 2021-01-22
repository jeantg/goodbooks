import { createContext } from 'react'
import { TypeBooks } from '../../screens/Home/ListBooks/types'

interface ContextType {
  favoritesData: TypeBooks[] | undefined
  setFavoritesData: (e: TypeBooks[]) => void
  setFavorites: (e: TypeBooks | undefined) => void
  removeFavorites: (e: number) => void
}
export const AppContext = createContext<ContextType>({
  favoritesData: [{ id: '' }],
  setFavoritesData: () => '',
  setFavorites: () => '',
  removeFavorites: () => ''
})
