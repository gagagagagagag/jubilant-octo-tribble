import { SearchResult } from '../models/search'
import { Repository } from '../models/repository'

export const getTopRepos = async (
  login: string
): Promise<SearchResult<Repository>> => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=user:${login}&sort=stars&order=desc&per_page=4`,
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
