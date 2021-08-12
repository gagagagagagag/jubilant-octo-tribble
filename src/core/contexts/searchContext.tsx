import React, { useEffect, useState, useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

interface SearchQuery {
  searchQuery: string
  changeQuery: (newQuery: string) => void
}

export const SearchContext = React.createContext<SearchQuery>({
  searchQuery: '',
  changeQuery: (newQuery: string) => {},
})

const SearchProvider: React.FC = ({ children }) => {
  const history = useHistory()
  const { pathname } = useLocation()
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    if (pathname === '/search' && searchQuery !== '') {
      history.replace({
        search: `?q=${searchQuery}`,
      })
    }
  }, [searchQuery, pathname, history])

  const changeQuery = useCallback(
    (newQuery: string) => {
      setSearchQuery(newQuery)

      if (pathname !== '/search') {
        history.push('/search')
      }
    },
    [history, pathname]
  )

  return (
    <SearchContext.Provider value={{ searchQuery, changeQuery }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
