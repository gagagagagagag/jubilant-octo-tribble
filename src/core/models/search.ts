import { User } from './user'
import { Repository } from './repository'

export interface SearchResult<T extends User | Repository> {
  incomplete_results: boolean
  total_count: number
  items: T[]
}
