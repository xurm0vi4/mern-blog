import React from 'react';

import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material';

import { formatDate } from '../utils/formatDate';

const CommentsBlock = ({ comments, isLoading = true, isHomePage, children }) => {
  return (
    <Paper sx={{ marginTop: 2, padding: 3 }}>
      <Typography variant="h5">Comments</Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {isLoading ? (
          [...Array(5)].map((_, i) => (
            <React.Fragment key={i}>
              <ListItem alignItems="flex-start">
                <Skeleton variant="circular" width={40} height={40} />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 15 }}>
                  <Skeleton variant="text" height={25} width={120} />
                  <Skeleton variant="text" height={18} width={230} />
                </div>
              </ListItem>
            </React.Fragment>
          ))
        ) : comments?.length ? (
          comments.map((comment) => (
            <React.Fragment key={comment._id}>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar alt={comment.author.fullName} src={comment.author.avatarUrl} />
                </ListItemAvatar>
                <ListItemText
                  sx={{ overflowX: 'hidden' }}
                  primary={
                    <React.Fragment>
                      <Typography
                        sx={{ fontWeight: 600 }}
                        component="span"
                        variant="body"
                        color="text.primary">
                        {comment.author.fullName}
                      </Typography>
                      <Typography
                        sx={{ ml: 0.5 }}
                        component="span"
                        variant="body2"
                        color="text.primary">
                        {formatDate(comment.createdAt)}
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline', color: 'rgba(0, 0, 0, 0.7);' }}
                        component="span"
                        variant="body"
                        color="text.primary">
                        {comment.text}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))
        ) : (
          <Typography textAlign={'center'} mt={2} component="div" variant="body">
            No comments yet...
          </Typography>
        )}
      </List>
      {children}
    </Paper>
  );
};

export default CommentsBlock;
