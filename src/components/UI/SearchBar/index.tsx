import React, { useRef } from 'react'

import classes from './SearchBar.module.css'
import searchIcon from '../../../assets/icons/search.svg'
import { SearchContext } from '../../../core/contexts/searchContext'

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { changeQuery } = React.useContext(SearchContext)

  const updateQueryHandler = (event: React.FormEvent) => {
    event.preventDefault()

    changeQuery(inputRef.current?.value || '')
  }

  return (
    <div className={classes.Container}>
      <form onSubmit={updateQueryHandler}>
        <input
          type={'text'}
          className={classes.Input}
          placeholder={'Search GitHub users'}
          ref={inputRef}
        />
        <button type={'submit'} className={classes.Button}>
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
