import classes from './ProfileInfo.module.css'

interface Props {
  name: string
  bio?: string | null
  imgSrc: string
}

const ProfileInfo: React.FC<Props> = ({ name, bio, imgSrc }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.PictureContainer}>
        <img src={imgSrc} alt={'User Profile'} className={classes.ProfilePic} />
        <span
          className={classes.UserName}
          role={'listitem'}
          aria-label={'username'}
        >
          {name}
        </span>
      </div>
      <div className={classes.AboutContainer}>
        <p className={classes.About} role={'listitem'} aria-label={'about'}>
          About
        </p>
        <p className={classes.Bio} role={'listitem'} aria-label={'bio'}>
          {bio || 'Empty'}
        </p>
      </div>
    </div>
  )
}

export default ProfileInfo
