import classes from './ProfileInfo.module.css'

interface Props {
  name: string
  bio: string
  imgSrc: string
}

const ProfileInfo: React.FC<Props> = ({ name, bio, imgSrc }) => {
  return (
    <div className={classes.Container}>
      <div className={classes.PictureContainer}>
        <img src={imgSrc} alt={'User Profile'} className={classes.ProfilePic} />
        <span className={classes.UserName}>{name}</span>
      </div>
      <div className={classes.AboutContainer}>
        <p className={classes.About}>About</p>
        <p className={classes.Bio}>{bio}</p>
      </div>
    </div>
  )
}

export default ProfileInfo
