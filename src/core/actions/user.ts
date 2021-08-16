import { SearchResult } from '../models/search'
import { User } from '../models/user'

export const getUserList = async (
  searchQuery: string
): Promise<SearchResult<User>> => {
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

  return responseJson
}

export const getUserDetails = async (login: string): Promise<User> => {
  const response = await fetch(`https://api.github.com/users/${login}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  })

  const responseJson = await response.json()

  if (!response.ok) throw new Error(responseJson.message)

  return responseJson
}
