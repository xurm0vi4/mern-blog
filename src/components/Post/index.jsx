import React from 'react'
import styles from './Post.module.scss';
import imgTest from './Screenshot_53.png';
import UserInfo from '../UserInfo';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'

const Post = ({img, avatarUrl, fullName, createdAt, title, tags, viewsCount, comments, text}) => {
  return (
    <div className={styles.root}>
        {<img src={imgTest} alt="post image" className={styles.img} />}
        <div className={styles.content}>
            <UserInfo  fullName={'fullName'} date={'createdAt'}/>
            <div className={styles.info}>
                <h2 className={styles.title}>blalbla Title</h2>
                <div className={styles.tags}>
                    <span>tag</span>
                    <span>tag</span>
                    <span>tag</span>
                </div>
                <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque distinctio minus quisquam laudantium. Hic rerum facere possimus, corporis ipsum distinctio!</p>
                <ul className={styles.stats}>
                    <li>
                        <EyeIcon/>
                        <span>150</span>
                    </li>
                    <li>
                        <CommentIcon/>
                        <span>150</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Post
