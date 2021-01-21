import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Home } from '@screens'
import '@testing-library/jest-dom'

const axios = jest.requireActual('axios')
const MockAdapter = require('axios-mock-adapter')
const mock = new MockAdapter(axios)
const reply = {
  kind: 'books#volumes',
  totalItems: 332,
  items: [
    {
      kind: 'books#volume',
      id: 'LJzezdi5jRcC',
      etag: 'RYL8r/LKDz4',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/LJzezdi5jRcC',
      volumeInfo: {
        title: 'Estação de S. Bento Marques da Silva',
        authors: ['António Cardoso'],
        publisher: 'Universidade do Porto',
        publishedDate: '2007',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '9729985219'
          },
          {
            type: 'ISBN_13',
            identifier: '9789729985218'
          }
        ],
        readingModes: {
          text: false,
          image: true
        },
        pageCount: 98,
        printType: 'BOOK',
        categories: ['Porto (Portugal)'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '1.1.2.0.preview.1',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=LJzezdi5jRcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=LJzezdi5jRcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        },
        language: 'pt',
        previewLink:
          'http://books.google.com.br/books?id=LJzezdi5jRcC&pg=PA76&dq=s&hl=&cd=1&source=gbs_api',
        infoLink:
          'http://books.google.com.br/books?id=LJzezdi5jRcC&dq=s&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Esta%C3%A7%C3%A3o_de_S_Bento_Marques_da_Silva.html?hl=&id=LJzezdi5jRcC'
      },
      saleInfo: {
        country: 'BR',
        saleability: 'NOT_FOR_SALE',
        isEbook: false
      },
      accessInfo: {
        country: 'BR',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=LJzezdi5jRcC&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          'HA \u003cb\u003eS\u003c/b\u003e Ver + Alfândega , sendo , assim ultrapassada a ideia da estação de \u003cb\u003eS\u003c/b\u003e . \u003cbr\u003e\nNicolau ( ou entre \u003cb\u003eS\u003c/b\u003e . Nicolau e aqueles edifícios ) , sendo retomada , mais tarde \u003cbr\u003e\n, uma terceira hipótese que também fora de Luciano de Carvalho que \u003cbr\u003e\ntransformaria&nbsp;...'
      }
    }
  ]
}

test('Test render Home component', async () => {
  mock.onGet('').reply(200, reply)
  render(<Home />)
  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { value: 'test' } })
  await screen.findByText('Estação de S. Bento Marques da Silva')
  const buttons = await screen.findAllByRole('button')
  expect(buttons[0]).toHaveClass('active')
})
test('Test render Hone and test change page', async () => {
  mock.reset()
  const reply_2 = {
    kind: 'books#volumes',
    totalItems: 332,
    items: [
      {
        kind: 'books#volume',
        id: '633ppp',
        etag: 'RYL8r/LKDz4',
        selfLink: 'https://www.googleapis.com/books/v1/volumes/LJzezdi5jRcC',
        volumeInfo: {
          title: 'Test book',
          authors: ['António Cardoso'],
          publisher: 'Universidade do Porto',
          publishedDate: '2007',
          industryIdentifiers: [
            {
              type: 'ISBN_10',
              identifier: '9729985219'
            },
            {
              type: 'ISBN_13',
              identifier: '9789729985218'
            }
          ],
          readingModes: {
            text: false,
            image: true
          },
          pageCount: 98,
          printType: 'BOOK',
          categories: ['Porto (Portugal)'],
          maturityRating: 'NOT_MATURE',
          allowAnonLogging: false,
          contentVersion: '1.1.2.0.preview.1',
          panelizationSummary: {
            containsEpubBubbles: false,
            containsImageBubbles: false
          },
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=LJzezdi5jRcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=LJzezdi5jRcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          },
          language: 'pt',
          previewLink:
            'http://books.google.com.br/books?id=LJzezdi5jRcC&pg=PA76&dq=s&hl=&cd=1&source=gbs_api',
          infoLink:
            'http://books.google.com.br/books?id=LJzezdi5jRcC&dq=s&hl=&source=gbs_api',
          canonicalVolumeLink:
            'https://books.google.com/books/about/Esta%C3%A7%C3%A3o_de_S_Bento_Marques_da_Silva.html?hl=&id=LJzezdi5jRcC'
        },
        saleInfo: {
          country: 'BR',
          saleability: 'NOT_FOR_SALE',
          isEbook: false
        },
        accessInfo: {
          country: 'BR',
          viewability: 'PARTIAL',
          embeddable: true,
          publicDomain: false,
          textToSpeechPermission: 'ALLOWED',
          epub: {
            isAvailable: false
          },
          pdf: {
            isAvailable: false
          },
          webReaderLink:
            'http://play.google.com/books/reader?id=LJzezdi5jRcC&hl=&printsec=frontcover&source=gbs_api',
          accessViewStatus: 'SAMPLE',
          quoteSharingAllowed: false
        },
        searchInfo: {
          textSnippet:
            'HA \u003cb\u003eS\u003c/b\u003e Ver + Alfândega , sendo , assim ultrapassada a ideia da estação de \u003cb\u003eS\u003c/b\u003e . \u003cbr\u003e\nNicolau ( ou entre \u003cb\u003eS\u003c/b\u003e . Nicolau e aqueles edifícios ) , sendo retomada , mais tarde \u003cbr\u003e\n, uma terceira hipótese que também fora de Luciano de Carvalho que \u003cbr\u003e\ntransformaria&nbsp;...'
        }
      }
    ]
  }
  mock.onGet('').reply(200, reply_2)
  const { findByText } = render(<Home />)
  const input = screen.getByRole('textbox')
  fireEvent.change(input, { target: { value: 'test' } })
  await screen.findByText('Test book')
  const buttons = await screen.findAllByRole('button')
  expect(buttons[0]).toHaveClass('active')
  mock.reset()
  mock.onGet('').reply(200, reply)
  fireEvent.click(buttons[2])
  await findByText('Estação de S. Bento Marques da Silva')
  expect(buttons[2]).toHaveClass('active')
  expect(buttons[1]).not.toHaveClass('active')
  expect(buttons[0].textContent).toEqual('1')
  expect(buttons[1].textContent).toEqual('2')
  expect(buttons[2].textContent).toEqual('3')
  expect(buttons[3].textContent).toEqual('4')
  expect(buttons[4].textContent).toEqual('...')
})
