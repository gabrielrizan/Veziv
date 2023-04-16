import React, { useEffect, useState } from 'react';
import portfolioData from '../data/portfolioData';
import PortfolioUnhideButton from './PortfolioUnhideButton';
const PortfolioList = (props) => {
  const [data, setData] = useState(props.portfolioItems);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editCustomerLink, setEditCustomerLink] = useState('');
  const [editImage, setEditImage] = useState('');

  useEffect(() => {
    setData(props.portfolioItems);
  }, [props.portfolioItems]);

  const handleDeleteEntry = (id) => {
    const newData = data.filter((entry) => entry.id !== id);
    setData(newData);
  };

  const handleHideEntry = (id) => {
    setData((prevState) =>
      prevState.map((entry) =>
        entry.id === id ? { ...entry, hidden: !entry.hidden } : entry
      )
    );
  };

  const handleUnhideEntry = (id) => {
    setData((prevState) =>
      prevState.map((entry) =>
        entry.id === id ? { ...entry, hidden: !entry.hidden } : entry
      )
    );
  };

  

  const handleEditEntry = (entry) => {
    setEditId(entry.id);
    setEditTitle(entry.title);
    setEditDescription(entry.description);
    setEditCustomerLink(entry.customerLink);
    setEditImage(entry.image);
  };

  const handleSaveEntry = (event) => {
    event.preventDefault();
    const editedEntry = {
      id: editId,
      title: editTitle,
      description: editDescription,
      customerLink: editCustomerLink,
      image: editImage,
    };
    const newData = data.map((entry) => {
      if (entry.id === editedEntry.id) {
        return editedEntry;
      }
      return entry;
    });
    setData(newData);
    setEditId(null);
  };

  const handleCancelEdit = () => {
    setEditId(null);
  };

  const handleAddEntry = (newEntry) => {
    setData([...data, newEntry]);
  };

  return (
    <div className="portfolio-list bg-dark d-flex flex-wrap justify-content-center">
      {data.map((entry) => (
          entry.hidden ? (
            <PortfolioUnhideButton
              key={entry.id}
              onUnhide={() => handleUnhideEntry(entry.id)}
              projectName={entry.title}
            />
          ) : (
        <div className="portfolio-item card mb-3 bg-secondary text-white mx-3 my-3" key={entry.id}>
          {editId === entry.id ? (
            <form onSubmit={handleSaveEntry} className="card-body">
              <div className="form-group">
                <label htmlFor="edit-title">Title:</label>
                <input
                  type="text"
                  id="edit-title"
                  value={editTitle}
                  onChange={(event) => setEditTitle(event.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="edit-description">Description:</label>
                <textarea
                  id="edit-description"
                  value={editDescription}
                  onChange={(event) => setEditDescription(event.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="edit-image">Image:</label>
                {editImage ? (
                  <img
                    src={editImage}
                    alt={editTitle}
                    className="img-fluid mb-3 portfolio-image"
                    style={{ width: "300px", height: "200px" }}
                  />
                ) : null}
                <div className="drag-container">
                  <input
                    type="file"
                    id="edit-image"
                    className="form-control-file"
                    onChange={(event) => {
                      const file = event.target.files[0];
                      const reader = new FileReader();
                      reader.readAsDataURL(file);
                      reader.onloadend = () => {
                        setEditImage(reader.result);
                      };
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success mr-2">
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className="card-header d-flex justify-content-between">
                <h3 className="portfolio-item-title">{entry.title}</h3>
                <div className="portfolio-item-controls">
                  <button
                    onClick={() => handleHideEntry(entry.id)}
                    className={`btn ${
                      entry.hidden ? 'btn-warning' : 'btn-beige'
                    }`}
                  >
                    {entry.hidden ? 'Unhide' : 'Hide'}
                  </button>
                  <button
                    onClick={() => handleEditEntry(entry)}
                    className="btn btn-success ml-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEntry(entry.id)}
                    className="btn btn-danger ml-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">{entry.description}</p>
                <a
                  href={entry.customerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link text-white"
                >
                  {entry.customerLink}
                </a>
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="img-fluid mt-3 portfolio-image"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
            </>
          )}
        </div>
          )
      ))}
    </div>
  );
  
};

export default PortfolioList;
