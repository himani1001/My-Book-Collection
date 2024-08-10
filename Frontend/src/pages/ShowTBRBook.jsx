import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/TBR/BackButtonTBR';
import Spinner from '../components/Spinner';
import './showBook.css';

const ShowTBRBook = () => {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://my-book-collection-1.onrender.com/books/tbr/${id}`)
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="page-container">
      <BackButton className="back-button" />
      <h1 className="page-title">Show Book</h1>
      {loading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : books ? (
        <div className="book-details">
          <div className="detail-item">
            <span className="detail-label">Id</span>
            <span>{books._id}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Title</span>
            <span>{books.title}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Author</span>
            <span>{books.author}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Publish Year</span>
            <span>{books.publishYear}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Created Time</span>
            <span>{books.createdAt ? new Date(books.createdAt).toString() : 'N/A'}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Last Updated Time</span>
            <span>{books.updatedAt ? new Date(books.updatedAt).toString() : 'N/A'}</span>
          </div>
        </div>
      ) : (
        <p className="no-book-message">No book found</p>
      )}
    </div>
  );
}

export default ShowTBRBook;
