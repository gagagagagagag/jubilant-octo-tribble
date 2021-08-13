import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { User } from '../../core/models/user'
import { SearchResult } from '../../core/models/search'
import { SearchContext } from '../../core/contexts/searchContext'
import Empty from '../../components/UI/Empty'
import ListItem from '../../components/UI/ListItem'
import ShowError from '../../components/UI/ShowError'

const Search: React.FC<RouteComponentProps> = ({ history }) => {
  const [error, setError] = useState<Error | null>(null)
  const [searchData, setSearchData] = useState<User[] | null>(null)
  const [searchLoading, setSearchLoading] = useState(false)
  const { searchQuery } = React.useContext(SearchContext)

  useEffect(() => {
    ;(async () => {
      if (searchQuery !== '') {
        setSearchLoading(true)

        try {
          const response = await fetch(
            `https://api.github.com/search/users?q=${searchQuery}`,
            {
              headers: {
                Accept: 'application/vnd.github.v3+json',
              },
            }
          )

          const responseJson = await response.json()

          if (!response.ok) throw new Error(responseJson.message)

          const responseData: SearchResult<User> = responseJson

          setSearchData(responseData.items)
        } catch (error) {
          setError(error)
        } finally {
          setSearchLoading(false)
        }
      }
    })()
  }, [searchQuery])

  // const { data, isValidating } = useSWR<SearchResult<User>>(
  //   searchQuery !== '' ? `/search/users?q=${searchQuery}` : null,
  //   fetcher,
  //   {
  //     revalidateOnFocus: false,
  //   }
  // )

  if (searchLoading) return <div>Loading...</div>

  if (error) return <ShowError message={error.message} />

  if (searchData?.length === 0) return <Empty searchQuery={searchQuery} />

  return (
    <div>
      {searchData?.map((user) => (
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
