import React, {useState} from 'react';
import {uploadImage} from "../api/uploader";
import {uploadProduct} from "../api/firebase";

function Update() {
  const [file, setFile] = useState();
  const [product, setProduct] = useState({})
  const [success, setSuccess] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file)
      .then((url) => {
        uploadProduct(product, url)
          .then((res) => {
            console.log(res)
            setSuccess('등록되었습니다 :)')
            setTimeout(() => {
              setSuccess(null)
            }, 3000)
          })
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
      <div className="label">Registration</div>
      {
        success ? <div className='success-message'>{success}</div> :
          <>
            <div className='image-wrapper'>{file ? <img src={URL.createObjectURL(file)} alt=""/> :
              <div className='no-image-label'>NO IMAGE</div>}</div>
            <form onSubmit={handleSubmit}>
              <label htmlFor='file'>
                <div className='file-select-button'>파일 선택</div>
              </label>
              <input type="file" accept='image/*' name='file' id='file' onChange={handleChange} required
                     style={{display: 'none'}}/>
              <input type="text" name='company' value={product.company ?? ''} placeholder={'업체명'}
                     onChange={handleChange} required/>
              <input type="text" name='name' value={product.name ?? ''} placeholder={'제품명'} onChange={handleChange}
                     required/>
              <input type="text" name='options' value={product.options ?? ''} placeholder={'옵션 (콤마로 구분 필요)'}
                     onChange={handleChange} required/>
              <input type="number" name='price' value={product.price ?? ''} placeholder={'가격'} onChange={handleChange}
                     required/>
              <input type="text" name='description' value={product.description ?? ''} placeholder={'제품 설명'}
                     onChange={handleChange} required/>
              <button className='add-button'>제품 등록하기</button>
            </form>
          </>
      }
    </div>
  );
}

export default Update;
