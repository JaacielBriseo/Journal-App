import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/journal';
import { Grid,ListItem, ListItemButton,ListItemIcon, ListItemText} from '@mui/material';

export const SideBarItem = ({ title = '', body, id ,date,imageUrls=[]}) => {
  const dispatch = useDispatch();

  const onNoteClick = () => {
    dispatch(setActiveNote({ title, body, id,date,imageUrls }));
  };

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title;
  }, [title]);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={onNoteClick}>
          <ListItemIcon>
            <TurnedInNot />
          </ListItemIcon>
          <Grid container>
            <ListItemText primary={newTitle} />
            <ListItemText secondary={body} />
          </Grid>
        </ListItemButton>
      </ListItem>
    </>
  );
};
