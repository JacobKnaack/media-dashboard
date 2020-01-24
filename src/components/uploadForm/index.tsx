import * as React from 'react';
import './__uploadform.scss';

declare const API_URL: string;

export default () => {
  const [ file, setFile ] = React.useState();
  const [ fileName, setFileName ] = React.useState('test');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('media', file, fileName);

    fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  function handleFile(e: React.FormEvent) {
    const target = e.target as HTMLInputElement;
    target.files ? setFile(target.files[0]) : null;
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <label>Select a File</label>
      <input type="file" name="media" onChange={handleFile}/>
      <label>File Name</label>
      <input
        type="text"
        name="file-name"
        placeholder="Name for file"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />
      <input type="submit"/>
    </form>
  )
}
