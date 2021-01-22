import React, { useState } from 'react'
import { TypeBooks } from '../src/screens/Home/ListBooks/types'
import Routes from './routes'
import GlobalStyle from './GlobalStyle'
import { AppContext } from '@context'
const App: React.FC = () => {
  const [favoritesData, setFavoritesData] = useState<TypeBooks[]>()
  function setFavorites(t: TypeBooks | undefined): void {
    const s = favoritesData || []
    s.push(t)
    setFavoritesData(s)
  }
  function removeFavorites(index: number): void {
    let s = favoritesData || []
    s = s.filter((_, i) => i !== index)
    setFavoritesData(s)
  }
  return (
    <AppContext.Provider
      value={{ favoritesData, setFavoritesData, setFavorites, removeFavorites }}
    >
      <div className='app'>
        <GlobalStyle />
        <Routes />
      </div>
    </AppContext.Provider>
  )
}

export default App
