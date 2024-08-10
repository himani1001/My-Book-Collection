import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import './showBook.css';
import BookTableCr from '../components/CR/BookTableCr';
import BooksCardCr from '../components/CR/BooksCardCr';

const CurrentReads = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    console.log('Fetching data...');
    axios
      .get(`https://my-book-collection-1.onrender.com/current/cr`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='container'>
      <div className='button-group'>
      <button className='button' >
          <Link to={`/`}>
            Home
          </Link>
        </button>
        <button className='button' onClick={() => setShowType('table')}>
          Table
        </button>
        <button className='button' onClick={() => setShowType('card')}>
          Card
        </button>
      </div>
      <div className='header'>
        <h1 className='title'>My Current Read</h1>
      </div>
      {loading ? (
        <div className='spinner-container'>
          <Spinner />
        </div>
      ) : showType === 'table' ? (
        <BookTableCr books={books} />
      ) : (
        <BooksCardCr books={books} />
      )}
    </div>
  );
};

export default CurrentReads