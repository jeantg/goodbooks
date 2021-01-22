import React from 'react'
import usePagination from './usePagination'
import { Container } from './styles'
import { ArrowLeft, ArrowRight } from '@icons'
import { UsePaginationItem, ItemsTypes } from './types'
interface Props {
  pageInitial?: number
  onChangePage: (e: number) => void
  perPage: number
  pageStart?: number
  count: number
}

const Pagination: React.FC<Props> = ({ count, onChangePage, perPage = 10 }) => {
  const {
    items,
    previous,
    disabledPrevious,
    disabledNext,
    next
  }: ItemsTypes = usePagination({
    count: Math.ceil(count / perPage),
    boundaryCount: 0,
    onChange: onChangePage
  })

  function renderPagination(item: UsePaginationItem) {
    if (typeof item.page === 'string') {
      return <button key={item.page}>...</button>
    }
    return (
      <button
        key={item.page}
        className={item.selected ? 'active page' : 'page'}
        onClick={item.onClick}
      >
        {item.page}
      </button>
    )
  }
  function getLength() {
    return items.length > 0
  }
  return (
    <Container>
      {getLength() && (
        <ArrowLeft onClick={previous} disabled={disabledPrevious} />
      )}
      {items.map((item) => renderPagination(item))}
      {getLength() && <ArrowRight onClick={next} disabled={disabledNext} />}
    </Container>
  )
}

export default Pagination
