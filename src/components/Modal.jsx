import React, { useEffect } from 'react';
import '../styles/modal.css';

function Modal({ show, handleClose, handleSubmit }) {
  if (!show) return null;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      title: formData.get('title'),
      category: formData.get('category'),
      author: formData.get('author')
    };
    console.log('Form Data:', data)
    handleSubmit(data);
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
        handleClose();
    }
  }

  useEffect(() => {
      window.addEventListener('click', handleOutsideClick);

      return () => {
          window.removeEventListener('click', handleOutsideClick)
      }
  }, [])

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>X</button>
        <form onSubmit={handleFormSubmit}>
          <div className="title">
            <p><label className="title-label" htmlFor="title">Title:</label></p>
            <input type="text" id="title" name="title" required />
          </div>
          <div className="category">
          <p><label htmlFor="category">Category:</label></p>
            <select id="category" name="category" required>
                <option value="All"></option>
                <option value="Recent">Recent</option>
                <option value="Celebration">Celebration</option>
                <option value="Thank You">Thank You</option>
                <option value="Inspiration">Inspiration</option>
            </select>
          </div>
          <div className="author">
          <p><label htmlFor="author">Author:</label></p>
            <input type="text" id="author" name="author" required />
          </div>
          <button type="submit">Create Board</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
