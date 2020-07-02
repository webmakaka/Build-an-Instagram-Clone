export async function handleImageUpload(image) {
  const data = new FormData();
  data.append('file', image);
  data.append('upload_preset', 'Instagram-clone');
  data.append('cloud_name', 'marley');
  const response = await fetch(
    'https://api.cloudinary.com/v1_1/marley/image/upload',
    {
      method: 'POST',
      accept: 'application/json',
      body: data,
    }
  );

  const jsonResponse = await response.json();
  return jsonResponse.url;
}
