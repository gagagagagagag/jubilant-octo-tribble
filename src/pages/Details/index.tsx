import useSWR from 'swr'
import { RouteComponentProps } from 'react-router-dom'

import { User } from '../../core/models/user'
import { Repository } from '../../core/models/repository'
import { SearchResult } from '../../core/models/search'
import fetcher from '../../core/axios/fetcher'
import Loading from '../../components/UI/Loading'
import ProfileInfo from '../../components/User/ProfileInfo'
import TopRepos from '../../components/User/TopRepos'

const Details: React.FC<RouteComponentProps<{ login: string }>> = ({
  match,
}) => {
  const { data: userData, isValidating: isValidatingUser } = useSWR<User>(
    `/users/${match.params.login}`,
    fetcher
  )
  const { data: reposData, isValidating: isValidatingRepos } = useSWR<
    SearchResult<Repository>
  >(
    `/search/repositories?q=user:${match.params.login}&sort=stars&order=desc&per_page=4`,
    fetcher
  )

  if (isValidatingUser || isValidatingRepos) return <Loading />

  if (!userData || !reposData) return <div>Not Found!</div>

  console.log(reposData)

  return (
    <div>
      <ProfileInfo
        name={userData.name || userData.login}
        imgSrc={userData.avatar_url}
        bio={userData.bio || ''}
      />
      <TopRepos repos={reposData.items} />
    </div>
  )
}

export default Details
