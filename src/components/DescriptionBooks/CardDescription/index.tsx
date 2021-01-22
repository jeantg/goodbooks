import React, { useContext, useState } from 'react'

import { Container } from './styles'
import { ClearIcon, FavoriteIcon, FavoriteBorderIcon } from '@icons'
import { BooksContext, AppContext } from '@context'

interface Props {
  setShowModal: (e: boolean) => void
}

const CardDescription: React.FC<Props> = ({ setShowModal }) => {
  const { bookDescription } = useContext(BooksContext)
  const { setFavorites, favoritesData } = useContext(AppContext)
  const authors = bookDescription?.volumeInfo?.authors || []
  const [exist, setExist] = useState(
    !!favoritesData?.find((item) => item?.id === bookDescription?.id)
  )
  function renderFavoriteIcon() {
    if (!!exist) {
      return <FavoriteBorderIcon className='favorite-icon' />
    }
    return (
      <FavoriteIcon
        className='favorite-icon'
        onClick={() => {
          setExist(true)
          setFavorites(bookDescription)
        }}
      />
    )
  }
  return (
    <Container>
      <div className='paper'>
        <header>
          {renderFavoriteIcon()}

          <ClearIcon onClick={() => setShowModal(false)} />
        </header>
        <div className='content'>
          <div className='content-book'>
            <img
              src={bookDescription?.volumeInfo?.imageLinks?.thumbnail}
              alt=''
            />
            <h1>{bookDescription?.volumeInfo?.title}</h1>
            {bookDescription?.volumeInfo?.previewLink && (
              <a
                rel='noreferrer'
                href={bookDescription?.volumeInfo?.previewLink || '#'}
                target='_blank'
              >
                Saiba mais sobre este livro
              </a>
            )}

            <div className='description'>
              <h3>{bookDescription?.volumeInfo?.description}</h3>
            </div>
            <footer>
              <p>Autor (es): </p>
              {authors.map((author) => (
                <span key={author}>{author} </span>
              ))}
            </footer>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CardDescription
