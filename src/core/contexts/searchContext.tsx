import React, { useState, useCallback } from 'react'

interface SearchQuery {
  searchQuery: string
  changeQuery: (newQuery: string) => void
}

export const SearchContext = React.createContext<SearchQuery>({
  searchQuery: '',
  changeQuery: (newQuery: string) => {},
})

const SearchProvider: React.FC = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const changeQuery = useCallback((newQuery: string) => {
    setSearchQuery(newQuery)
  }, [])

  return (
    <SearchContext.Provider value={{ searchQuery, changeQuery }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
