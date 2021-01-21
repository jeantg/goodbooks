export interface UsePaginationItem {
  onClick: React.ReactEventHandler
  type: string | number
  page: number | string
  selected: boolean
}

export interface ItemsTypes {
  items: UsePaginationItem[]
  previous: () => void
  disabledPrevious: boolean
  disabledNext: boolean
  next: () => void
}
