import React from 'react';
import styles from './Post.module.scss';
import { Avatar, Skeleton, Stack } from '@mui/material';

const PostSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width="100%" height={300} />
        <div className={styles.skeletonContent}>
          <div className={styles.skeletonUser}>
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
            <Skeleton variant="text" width={100} height={40} />
          </div>
          <div className={styles.skeletonInfo}>
            <Skeleton variant="text" width="80%" height={40} />
            <Skeleton variant="text" width={50} height={20} />
            <Skeleton variant="text" width={100} height={20} />
            <Skeleton variant="text" width={100} height={20} />
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default PostSkeleton;
