import rightArrowIcon from '../../../assets/icons/right-arrow.svg'
import classes from './ListItem.module.css'

interface Props {
  label: string
  icon?: string
  onClick: () => void
}

const ListItem = ({ label, icon, onClick }: Props) => {
  return (
    <div className={classes.Container} onClick={onClick}>
      {icon && <img src={icon} alt={''} width={20} height={20} />}
      <span className={classes.Label}>{label}</span>
      <img src={rightArrowIcon} alt={''} width={7} height={16} />
    </div>
  )
}

export default ListItem
