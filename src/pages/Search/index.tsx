import React from 'react'
import useSWR from 'swr'

import { UsersResponse } from '../../core/models/user'
import fetcher from '../../core/axios/fetcher'
import { SearchContext } from '../../core/contexts/searchContext'
import Empty from '../../components/UI/Empty'
import ListItem from '../../components/UI/ListItem'

const Search = () => {
  const { searchQuery } = React.useContext(SearchContext)
  const { data, isValidating } = useSWR<UsersResponse>(
    searchQuery !== '' ? `/search/users?q=${searchQuery}` : null,
    fetcher
  )

  if (isValidating) return <div>Loading...</div>

  if (data?.total_count === 0) return <Empty searchQuery={searchQuery} />

  return (
    <div>
      {data?.items.map((user) => (
        <ListItem
          key={user.id}
          label={user.login}
          onClick={() => console.log(`Click on ${user.id}`)}
        />
      ))}
    </div>
  )
}

export default Search
