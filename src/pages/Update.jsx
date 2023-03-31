import React, {useState} from 'react';

function Update(props) {
    const url = "v1_1/dbl2mzasc/image/upload";
    const [file, setFile] = useState()

    const submit = (e) => {
        e.preventDefault();
        console.log(file);
        const formData = new FormData();
        formData.append('file', file);
        formData.append("upload_preset", "rhlfyd7b");

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => data.url)
    }

    return (
        <div>
            <form method="post" encType="multipart/form-data" onSubmit={submit}>
                <input type="file" name="files[]" multiple onChange={(e) => setFile(e.target.files[0])}/>
                <input type="submit" value="Upload Files" name="submit"/>
            </form>
            <p id="data"/>
        </div>
    );
}

export default Update;
