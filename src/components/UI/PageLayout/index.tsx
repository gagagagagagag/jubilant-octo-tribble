import classes from './PageLayout.module.css'
import SearchBar from '../SearchBar'

const PageLayout: React.FC = ({ children }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.HeaderContainer}>
        <SearchBar />
      </div>
      <div className={classes.ContentContainer}>{children}</div>
    </div>
  )
}

export default PageLayout
