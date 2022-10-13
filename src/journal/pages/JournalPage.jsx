import { Typography } from '@mui/material';
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
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  );
};
