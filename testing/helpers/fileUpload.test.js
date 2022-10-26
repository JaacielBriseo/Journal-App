import { fileUpload } from '../../src/helpers/fileUpload';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'doyovakvf',
  api_key: '124773328112316',
  api_secret: 'WN67e9K8K-3Yvg4sKMS8IjPa2zw',
  secure: true,
});

describe('Pruebas en fileUpload', () => {
  test('debe de subir el archivo correctamente a cloudinary', async () => {
    const imageUrl =
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], 'foto.jpg');

    const url = await fileUpload(file);
    expect(typeof url).toBe('string');
    // console.log(url);
    const segments = url.split('/')
    const imageId = segments[segments.length -1].replace('.jpg','')
    await cloudinary.api.delete_resources(['journal/'+ imageId])
  });
  test('debe de retornar null', async () => {
    const file = new File([], 'foto.jpg');

    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
