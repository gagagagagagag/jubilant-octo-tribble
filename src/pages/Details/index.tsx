import useSWR from 'swr'
import { RouteComponentProps } from 'react-router-dom'

import { User } from '../../core/models/user'
import fetcher from '../../core/axios/fetcher'
import Loading from '../../components/UI/Loading'
import ProfileInfo from '../../components/User/ProfileInfo'

const Details: React.FC<RouteComponentProps<{ login: string }>> = ({
  match,
}) => {
  const { data, isValidating } = useSWR<User>(
    `/users/${match.params.login}`,
    fetcher
  )

  if (isValidating) return <Loading />

  if (!data) return <div>Not Found!</div>

  return (
    <div>
      <ProfileInfo
        name={data.name || data.login}
        imgSrc={data.avatar_url}
        bio={'Hello World'}
      />
    </div>
  )
}

export default Details
