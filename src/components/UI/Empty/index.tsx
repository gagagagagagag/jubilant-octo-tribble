import classes from './Empty.module.css'

interface Props {
  searchQuery: string
}

const Empty = ({ searchQuery }: Props) => {
  return (
    <div className={classes.Container} role={'dialog'} aria-label={'empty'}>
      <span className={classes.Text}>
        We couldn't find anything like {searchQuery}
      </span>
      <img
        src={'https://picsum.photos/300/200'}
        alt={''}
        width={300}
        height={200}
      />
    </div>
  )
}

export default Empty
