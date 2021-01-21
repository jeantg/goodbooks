import React from 'react'
import { Container } from './styles'
interface Props {
  onChange: (e) => void
}
const Header: React.FC<Props> = ({ onChange }) => {
  function keyChange(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      onChange(event)
    }
  }
  return (
    <Container>
      <header>
        <h1>Good Books</h1>
        <input
          type='text'
          onKeyDown={keyChange}
          placeholder='Busque um livro e entre em outro planeta...'
          onChange={onChange}
        />
      </header>
    </Container>
  )
}

export default Header
