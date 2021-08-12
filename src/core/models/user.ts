// Created using quicktype.io

export interface UsersResponse {
  incomplete_results: boolean
  items: User[]
  total_count: number
}

export interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name?: null | string
  company?: null | string
  blog?: string
  location?: null | string
  email?: null | string
  hireable?: boolean | null
  bio?: null | string
  twitter_username?: null | string
  public_repos?: number
  public_gists?: number
  followers?: number
  following?: number
  created_at?: Date
  updated_at?: Date
  score?: number
}

export enum Type {
  User = 'User',
}
