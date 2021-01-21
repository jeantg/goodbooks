import React from 'react'
import { Container } from './styles'
import NavBar from './NavBar/index'
import { useHistory } from 'react-router-dom'
interface Props {
  onChange?: (e) => void
}
const Header: React.FC<Props> = ({ onChange }) => {
  const history = useHistory()
  function keyChange(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      onChange?.(event.currentTarget.value)
    }
  }
  function hiddenInput() {
    return window.location.href.includes('/favorites')
  }
  return (
    <Container>
      <header>
        <h1 onClick={() => history.push('/')}>Good Books</h1>
        {!hiddenInput() && (
          <input
            type='text'
            onKeyDown={keyChange}
            placeholder='Busque um livro e entre em outro planeta...'
            onChange={(e) => onChange?.(e.target.value)}
          />
        )}
      </header>
      <NavBar />
    </Container>
  )
}

export default Header
