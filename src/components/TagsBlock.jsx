import React, { useEffect, useState } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import axios from '../axios';

const TagsBlock = ({ tags, isLoading = true }) => {
  return (
    <Paper>
      <Typography variant="h6" gutterBottom pl={2} pt={1.5}>
        Tags
      </Typography>
      <List sx={{ width: '300px' }}>
        {(isLoading ? [...Array(5)] : tags).map((tag, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TagIcon />
              </ListItemIcon>
              {isLoading ? <Skeleton width={150} /> : <ListItemText>{tag}</ListItemText>}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TagsBlock;
