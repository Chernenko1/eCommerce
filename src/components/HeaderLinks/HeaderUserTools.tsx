import { IconType } from 'react-icons'
import { NavLink } from 'react-router-dom'

import styles from './styles.module.css'

interface IHeaderUserTools {
  IconComponent: IconType
  size: number
}

export default function HeaderUserTools({ IconComponent, size }: IHeaderUserTools) {
  return (
    <div className={styles.userTools}>
      <NavLink to={'/'}>
        <IconComponent size={size} />
      </NavLink>
    </div>
  )
}
