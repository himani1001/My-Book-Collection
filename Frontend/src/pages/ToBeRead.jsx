import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import BooksTable from '../components/TBR/BooksTable';
import BooksCard from '../components/TBR/BooksCard';
import './ToBeRead.css'; 

const ToBeRead = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    console.log('Fetching data...');
    axios
      .get(`http://localhost:5556/books/tbr`)
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
        <button className='button' onClick={() => setShowType('table')}>
          Table
        </button>
        <button className='button' onClick={() => setShowType('card')}>
          Card
        </button>
      </div>
      <div className='header'>
        <h1 className='title'>My To Be Read</h1>
      </div>
      {loading ? (
        <div className='spinner-container'>
          <Spinner />
        </div>
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default ToBeRead;
