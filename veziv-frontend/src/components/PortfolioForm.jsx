import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfolioForm = ({onAdd, oldData}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [customerLink, setCustomerLink] = useState('');
  const [file, setFile] = useState(null);
  const fileInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPortfolioItem = {
      id: Date.now(),
      title: title,
      description: description,
      image: image,
      customerLink: customerLink,
    };
    onAdd([...oldData, newPortfolioItem]);
    setTitle('');
    setDescription('');
    setImage('');
    setCustomerLink('');
    setFile(null);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = function(event) {
      setImage(event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    reader.onload = function(event) {
      setImage(event.target.result);
    };
    reader.readAsDataURL(event.dataTransfer.files[0]);
    setFile(event.dataTransfer.files[0]);
  };

  return (
    <div className="row bg-dark justify-content-center">
      <div className="col-md-6">
        <form onSubmit={handleSubmit} className="p-4 text-light rounded">
          <div className="form-group">
            <label htmlFor='title'>Title:</label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor='description'>Description:</label>
            <textarea
              id='description'
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor='image'>Image URL:</label>
            <input
              type='text'
              id='image'
              value={image}
              onChange={(event) => setImage(event.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor='file'>Upload Image:</label>
            <input
              type='file'
              id='file'
              onChange={handleFileChange}
              ref={fileInput}
              style={{ display: 'none' }}
            />
            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInput.current.click()}
              className="d-flex justify-content-center align-items-center"
              style={{ height: '200px', width: '300px', border: '1px solid black' }}
            >
              {file || image ? (
                <img
                  src={file ? URL.createObjectURL(file) : image}
                  alt="portfolio item"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              ) : (
                <p>Drag and drop image or click here to select file.</p>
              )}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor='customerLink'>Customer Link:</label>
            <input
              type='text'
              id='customerLink'
              value={customerLink}
              onChange={(event) => setCustomerLink(event.target.value)}
              className="form-control"
              required
            />
          </div>
          <button type='submit' className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  );
};

export default PortfolioForm;