import React from 'react';
import BookSingleCard from './BookSingleCard';
import './bookscard.css';

const BooksCard = ({ books }) => {
  return (
    <div className="books-card-container">
        {books.map((item) => (
            <BookSingleCard key={item._id} books={item} />
        ))}
    </div>
  )
}

export default BooksCard;
