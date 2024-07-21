import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { useState } from 'react';
import BookModalRead from './BookModalRead'
import '../Style/booksinglecard.css'

const BookSingleCardRead = ({ books }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='book-single-card'>
            <h2 className='book-single-card-year'>
                {books.publishYear}
            </h2>
            <h4 className='book-single-card-id'>{books._id}</h4>
            <div className='book-single-card-title'>
                <PiBookOpenTextLight className='book-single-card-icon' />
                <h2>{books.title}</h2>
            </div>
            <div className='book-single-card-author'>
                <BiUserCircle className='book-single-card-icon' />
                <h2>{books.author}</h2>
            </div>
            <div className='book-single-card-actions'>
                <BiShow
                    className='book-single-card-show book-single-card-icon'
                    onClick={() => setShowModal(true)} />
                <Link to={`/books/details/${books._id}`}>
                    <BsInfoCircle className='book-single-card-info book-single-card-icon' />
                </Link>
            </div>
            {
                showModal && (
                    <BookModal books={books} onClose={() => setShowModal(false)} Genre={books.genre} />
                )
            }
        </div>
    )
}

export default BookSingleCardRead