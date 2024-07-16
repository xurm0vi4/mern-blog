import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react';

const CommentsBlock = ({children}) => {
  return (
    <Paper sx={{marginTop: 2, padding: 2}}>
      <Typography variant="h5">Comments</Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Ali Connors"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline', color: 'rgba(0, 0, 0, 0.6);' }}
                  component="span"
                  variant="body2"
                  color="text.primary">
                  Comment blalblalfalsdk;alkwda
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Ali Connors"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline', color: 'rgba(0, 0, 0, 0.6);' }}
                  component="span"
                  variant="body2"
                  color="text.primary">
                  Comment blalblalfalsdk;alkwda
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
      {children}
    </Paper>
  );
};

export default CommentsBlock;
