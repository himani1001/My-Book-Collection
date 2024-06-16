import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } =useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5556/books/${id}`)
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id])

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : books ? (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{books._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{books.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{books.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            <span>{books.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Created Time</span>
            <span>{books.createdAt ? new Date(books.createdAt).toString() : 'N/A'}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Updated Time</span>
            <span>{books.updatedAt ? new Date(books.updatedAt).toString() : 'N/A'}</span>
          </div>
        </div>
      ) : (
        <p>No book found</p>
      )}
    </div>
  );  
}

export default ShowBook