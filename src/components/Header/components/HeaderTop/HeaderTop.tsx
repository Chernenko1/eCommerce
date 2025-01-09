import { NavLink } from 'react-router-dom'
import styles from './style.module.css'
import { IoCall, IoLogoInstagram, IoLogoVk, IoPaperPlaneOutline } from 'react-icons/io5'
import HorizontalLine from '@components/Lines/HorizontalLine'

export default function HeaderTop() {
  return (
    <div>
      <div className={styles.mainHeaderTop}>
        <div className={styles.mainHeaderPhoneWrapper}>
          <NavLink to='#'>
            <IoCall size={20}></IoCall>
            <p>Order a call</p>
          </NavLink>
        </div>
        <div className={styles.mainHeaderSocial}>
          <p>Unknown city</p>
          <div className={styles.line} />
          <div>
            <div className={styles.mainHeaderSocialMedia}>
              <NavLink to={'#'}>
                <IoLogoInstagram size={20} />
              </NavLink>
              <NavLink to={'#'}>
                <IoLogoVk size={20} />
              </NavLink>
              <NavLink to={'#'}>
                <IoPaperPlaneOutline size={20} />
              </NavLink>
            </div>
          </div>
          <div className={styles.line} />
        </div>
      </div>
      <HorizontalLine />
    </div>
  )
}
