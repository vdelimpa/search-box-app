import { useState, useEffect } from 'react'

const useDebounce = (searchTerm) => {
  const [value, setValue] = useState(searchTerm)

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(searchTerm)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [searchTerm])
  
  return value
}

export default useDebounce