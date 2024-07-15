import React from 'react'
import styles from './UserInfo.module.scss';

const UserInfo = ({avatarUrl, fullName, date}) => {
  return (
    <div className={styles.root}>
      <img src={avatarUrl || '/noavatar.png'} alt="avatar" className={styles.avatar} />
      <div className={styles.info}>
        <h3 className={styles.title}>{fullName}</h3>
        <p className={styles.text}>{date}</p>
      </div>
    </div>
  )
}

export default UserInfo