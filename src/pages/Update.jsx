import React, {useState} from 'react';
import {uploadImage} from "../api/uploader";
import {uploadProduct} from "../api/firebase";

function Update() {
  const [file, setFile] = useState();
  const [product, setProduct] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file)
      .then((url) => {
        uploadProduct(product, url)
          .then(res => console.log(res))
      })
  }

  const handleChange = (e) => {
    const {name, value, files} = e.target;
    if (name === 'file') {
      setFile(files[0])
      return
    }
    setProduct((product) => ({...product, [name]: value}))
  }

  return (
    <div className={'upload-wrapper'}>
      {file && <div><img src={URL.createObjectURL(file)} alt=""/></div>}
      <form onSubmit={handleSubmit}>
        <input type="file" accept='image/*' name='file' onChange={handleChange} required />
        <input type="text" name='company' value={product.company ?? ''} placeholder={'업체명'} onChange={handleChange} required />
        <input type="text" name='name' value={product.name ?? ''} placeholder={'제품명'} onChange={handleChange} required />
        <input type="text" name='options' value={product.options ?? ''} placeholder={'옵션 (콤마로 구분 필요)'} onChange={handleChange} required />
        <input type="number" name='price' value={product.price ?? ''} placeholder={'가격'} onChange={handleChange} required />
        <input type="text" name='description' value={product.description ?? ''} placeholder={'제품 설명'} onChange={handleChange} required />
        <button>제품 등록하기</button>
      </form>
    </div>
  );
}

export default Update;
