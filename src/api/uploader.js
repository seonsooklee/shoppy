export const uploadImage = (file) => {
  const url = "/v1_1/dbl2mzasc/image/upload";
  const formData = new FormData();
  formData.append('file', file);
  formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

  return fetch(url, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(data => data.url)
}
