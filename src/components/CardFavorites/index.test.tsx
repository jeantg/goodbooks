import Card from './index'

import { render, screen } from '@testing-library/react'
import React from 'react'

test('Test render CardBook Component', async () => {
  const { container } = render(
    <Card src='https://good-books.com' index={0}>
      <h1>Livro</h1>
    </Card>
  )
  const img = container.querySelector('img')
  expect(img.src).toEqual('https://good-books.com/')
  expect(screen.getByText('Livro'))
})
