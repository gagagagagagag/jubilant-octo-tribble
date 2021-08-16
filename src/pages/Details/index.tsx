import { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { User } from '../../core/models/user'
import { Repository } from '../../core/models/repository'
import { getUserDetails } from '../../core/actions/user'
import { getTopRepos } from '../../core/actions/repo'
import ShowError from '../../components/UI/ShowError'
import Loading from '../../components/UI/Loading'
import ProfileInfo from '../../components/User/ProfileInfo'
import TopRepos from '../../components/User/TopRepos'

const Details: React.FC<RouteComponentProps<{ login: string }>> = ({
  match,
}) => {
  const [error, setError] = useState<Error | null>(null)
  const [userData, setUserData] = useState<User>()
  const [userLoading, setUserLoading] = useState(true)
  const [repoData, setRepoData] = useState<Repository[]>([])
  const [repoLoading, setRepoLoading] = useState(true)

  const login = match.params.login
  useEffect(() => {
    ;(async () => {
      setUserLoading(true)

      try {
        const userDetails = await getUserDetails(login)

        setUserData(userDetails)
      } catch (error) {
        setError(error)
      } finally {
        setUserLoading(false)
      }
    })()
  }, [login])

  useEffect(() => {
    ;(async () => {
      setRepoLoading(true)

      try {
        const topRepos = await getTopRepos(login)

        setRepoData(topRepos.items)
      } catch (error) {
        setError(error)
      } finally {
        setRepoLoading(false)
      }
    })()
  }, [login])

  if (userLoading || repoLoading) return <Loading />

  if (error) return <ShowError message={error.message} />

  if (!userData || !repoData) return <div>NotFound</div>

  return (
    <div>
      <ProfileInfo
        name={userData.name || userData.login}
        imgSrc={userData.avatar_url}
        bio={userData.bio}
      />
      <TopRepos repos={repoData} />
    </div>
  )
}

export default Details
