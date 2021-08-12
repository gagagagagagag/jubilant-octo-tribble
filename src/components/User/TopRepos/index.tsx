import { Repository } from '../../../core/models/repository'
import classes from './TopRepos.module.css'
import repoIcon from '../../../assets/icons/repo.svg'
import ListItem from '../../UI/ListItem'

interface Props {
  repos: Repository[]
}

const TopRepos: React.FC<Props> = ({ repos }) => {
  return (
    <div className={classes.Container}>
      <p className={classes.Title}>Top repositories</p>
      {repos.length === 0 && <span className={classes.Empty}>Empty</span>}
      {repos.map((repo) => (
        <ListItem
          key={repo.id}
          label={repo.name}
          icon={repoIcon}
          onClick={() => (window.location.href = repo.html_url)}
        />
      ))}
    </div>
  )
}

export default TopRepos
