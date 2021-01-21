import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '@components'
import '@testing-library/jest-dom'
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}))
test('Test render Header component', async () => {
  const onChange = jest.fn()
  render(<Header onChange={onChange} />)
  expect(screen.getByText('Good Books')).toBeInTheDocument()
  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { value: 'test' } })
  expect(onChange).toHaveBeenCalledTimes(1)
  const h: any = Header({ onChange })?.type.styledComponentId
  const m = document.getElementsByClassName(h)
  const s = window.getComputedStyle(m[0])
  expect(s.backgroundColor).toEqual('rgb(0, 194, 255)')
  await screen.findByDisplayValue('test')
  await screen.findByPlaceholderText(
    'Busque um livro e entre em outro planeta...'
  )
})
