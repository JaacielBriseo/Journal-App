import { AddOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        doloremque explicabo assumenda facere excepturi deleniti, ullam beatae,
        labore molestias accusamus laborum est obcaecati error iusto. Totam ea
        deleniti distinctio in.
      </Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
