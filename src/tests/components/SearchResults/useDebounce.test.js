import { renderHook, act } from '@testing-library/react-hooks'

import useDebounce from '../../../components/SearchResults/useDebounce'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {    
  jest.clearAllMocks()
})

const advanceTimer = (delay = 500) => act(() => jest.advanceTimersByTime(delay))

it('should return the expected search term after timeout', async () => {
  let searchTerm = 'ath'
  const { result, rerender } = renderHook(() => useDebounce(searchTerm))
  
  advanceTimer()

  expect(result.current).toEqual('ath')
  
  searchTerm = 'athens'
  
  rerender()
  
  advanceTimer()

  expect(result.current).toEqual('athens')
})

it('should return expected search term before timeout', async () => {
  let searchTerm = 'ath'
  const { result, rerender } = renderHook(() => useDebounce(searchTerm))
  
  advanceTimer(300)

  expect(result.current).toEqual('ath')
  
  searchTerm = 'athens'
  
  rerender()
  
  advanceTimer(300)

  expect(result.current).toEqual('ath')
})

it('should call the setTimeout function', async () => {
  await act(async () => renderHook(() => useDebounce('athens')))

  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500)
})
