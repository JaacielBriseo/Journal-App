import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { useNoteView } from '../../hooks';

import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
  const {
    onDelete,
    onFileInputChange,
    onSaveNote,
    fileInputRef,
    dateString,
    body,
    title,
    date,
    onInputChange,
    formState,
    note,
    messageSaved,
    isSaving,
  } = useNoteView();
  return (
    <>
      <Grid
        className="animate__animated animate__fadeIn animate__faster"
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 1 }}
      >
        <Grid item>
          <Typography fontSize={39} fontWeight="light">
            {dateString}
          </Typography>
        </Grid>
        <Grid item>
          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={onFileInputChange}
            style={{ display: 'none' }}
          />
          <IconButton
            color="primary"
            disabled={isSaving}
            onClick={() => fileInputRef.current.click()}
          >
            <UploadOutlined />
          </IconButton>
          <Button
            disabled={isSaving}
            onClick={onSaveNote}
            color="primary"
            sx={{ padding: 2 }}
          >
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>
        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un título"
            label="Título"
            sx={{ border: 'none', mb: 1 }}
            name="title"
            value={title}
            onChange={onInputChange}
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Qué sucedió el dia de hoy?"
            minRows={5}
            name="body"
            value={body}
            onChange={onInputChange}
          />
        </Grid>

        <Grid container justifyContent="end">
          <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
            <DeleteOutline />
            Borrar
          </Button>
        </Grid>
        <ImageGallery images={note.imageUrls} />
      </Grid>
    </>
  );
};
