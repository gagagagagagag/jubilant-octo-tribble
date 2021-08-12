import classes from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className={classes.Container}>
      <form>
        <input
          type={'text'}
          className={classes.Input}
          placeholder={'Search GitHub users'}
        />
        <button type={'submit'} className={classes.Button}>
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
