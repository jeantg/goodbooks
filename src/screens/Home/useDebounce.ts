import { useRef } from 'react'
export default function useDebounce(
  callback: (...e: any) => void,
  delay: number
): (...args: any[]) => void {
  const ref = useRef<number | undefined>(0)
  return function debounced(...args) {
    clearTimeout(ref.current)
    const timeout: any = setTimeout(() => {
      callback(...args)
    }, delay)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    ref.current = timeout
  }
}
