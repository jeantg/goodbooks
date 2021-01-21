import CardBook from './index'

import { render, screen } from '@testing-library/react'
import React from 'react'
test('Test render CardBook Component', async () => {
  const {container} = render(
    <CardBook src='https://test.com' index={0}>
      <div className='ellipsis'>
        <h2 className='overflow'>Title</h2>
      </div>
    </CardBook>
  )
  const img = container.querySelector("img")
  expect(img.src).toEqual("https://test.com/")
  expect(screen.getByText("Title"))
})
