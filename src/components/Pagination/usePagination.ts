import { useState } from 'react'
import { ItemsTypes, UsePaginationItem } from './types'
interface Props {
  boundaryCount?: number
  count: number
  onChange?: (e: number) => void
  page?: number
  siblingCount?: number
}
//This hook is a cutomization of the implementation of the material-ui available at https://github.com/mui-org/material-ui/
export default function usePagination(props: Props): ItemsTypes {
  const {
    boundaryCount = 1,
    count = 1,
    onChange: handleChange,
    page: pageProp,
    siblingCount = 1
  } = props

  const [page, setPage] = useState(1)
  console.log(pageProp)

  const handleClick = (value) => {
    setPage(value)
    if (handleChange) {
      handleChange(value === 1 ? 0 : value)
    }
  }
  const range = (start: number, end: number) => {
    const length = end - start + 1
    return Array.from({ length }, (_, i) => start + i)
  }

  const startPages = range(1, Math.min(boundaryCount, count))
  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count
  )

  const siblingsStart = Math.max(
    Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2
  )

  const siblingsEnd = Math.min(
    Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  )
  const itemList = [
    ...startPages,
    ...(siblingsStart > boundaryCount + 2
      ? ['start-ellipsis']
      : boundaryCount + 1 < count - boundaryCount
      ? [boundaryCount + 1]
      : []),
    ...range(siblingsStart, siblingsEnd),
    ...(siblingsEnd < count - boundaryCount - 1
      ? ['end-ellipsis']
      : count - boundaryCount > boundaryCount
      ? [count - boundaryCount]
      : []),
    ...endPages
  ]
  function previous() {
    return page > 1 && handleClick(page - 1)
  }
  function next() {
    return count > page && handleClick(page + 1)
  }

  function getList(item: string | number): UsePaginationItem {
    return {
      onClick: () => {
        handleClick(item)
      },
      page: item,
      type: item,
      selected: item === page
    }
  }
  if (siblingsStart > boundaryCount + 2) {
    itemList.unshift(1)
  }
  const items: UsePaginationItem[] = itemList.map((item) => getList(item))
  return {
    items,
    previous,
    disabledPrevious: page <= 1,
    disabledNext: page >= count,
    next
  }
}
