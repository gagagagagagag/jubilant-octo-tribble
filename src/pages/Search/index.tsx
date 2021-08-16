import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { User } from '../../core/models/user'
import { SearchContext } from '../../core/contexts/searchContext'
import { getUserList } from '../../core/actions/user'
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
          const userList = await getUserList(searchQuery)

          setSearchData(userList.items)
        } catch (error) {
          setError(error)
        } finally {
          setSearchLoading(false)
        }
      }
    })()
  }, [searchQuery])

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
