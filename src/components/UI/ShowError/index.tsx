import React from 'react'

import classes from './ShowError.module.css'

interface Props {
  message: string
}

const ShowError: React.FC<Props> = ({ message }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.ErrorContainer}>
        <span className={classes.Message}>{message}</span>
      </div>
    </div>
  )
}

export default ShowError
