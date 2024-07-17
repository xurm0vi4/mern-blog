import React, { useEffect, useState } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import axios from '../axios';

const tags = ['tag1', 'tag2', 'tag3'];

const TagsBlock = ({tags}) => {
  
  return (
    <Paper>
      <Typography variant="h6" gutterBottom pl={2} pt={1.5}>
        Tags
      </Typography>
      <List sx={{ width: '300px' }}>
        {tags.map((tag, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TagIcon />
              </ListItemIcon>
              <ListItemText>{tag}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TagsBlock;
