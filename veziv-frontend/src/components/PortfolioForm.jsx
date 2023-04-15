import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const PortfolioForm = ({onAdd, oldData}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [customerLink, setCustomerLink] = useState('');

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
          <button type='submit' className="btn btn-success">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default PortfolioForm;
