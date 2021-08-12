import React from 'react'

import { SearchContext } from '../../core/contexts/searchContext'
// import Empty from '../../components/UI/Empty'
// import ListItem from '../../components/UI/ListItem'

const Search = () => {
  const { searchQuery } = React.useContext(SearchContext)

  return <div>{searchQuery}</div>
}

export default Search
