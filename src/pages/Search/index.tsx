import React from 'react'
import useSWR from 'swr'
import { RouteComponentProps } from 'react-router-dom'

import { User } from '../../core/models/user'
import { SearchResult } from '../../core/models/search'
import fetcher from '../../core/axios/fetcher'
import { SearchContext } from '../../core/contexts/searchContext'
import Empty from '../../components/UI/Empty'
import ListItem from '../../components/UI/ListItem'

const Search: React.FC<RouteComponentProps> = ({ history }) => {
  const { searchQuery } = React.useContext(SearchContext)
  const { data, isValidating } = useSWR<SearchResult<User>>(
    searchQuery !== '' ? `/search/users?q=${searchQuery}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )

  if (isValidating) return <div>Loading...</div>

  if (data?.total_count === 0) return <Empty searchQuery={searchQuery} />

  return (
    <div>
      {data?.items.map((user) => (
        <ListItem
          key={user.id}
          label={user.login}
          onClick={() => history.push(`/search/details/${user.login}`)}
        />
      ))}
    </div>
  )
}

export default Search
