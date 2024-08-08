import { BiUserCircle } from 'react-icons/bi';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { AiOutlineClose } from 'react-icons/ai';
import '../Style/bookmodal.css'

const BookModalCr = ({ books, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                onClick={(event) => event.stopPropagation()}
                className='modal-container'
            >
                <AiOutlineClose
                    className='close-icon'
                    onClick={onClose}
                />
                <h2 className='publish-year'>
                    {books.publishYear}
                </h2>
                <h4 className='book-id'>{books._id}</h4>
                <div className='modal-book-details'>
                    <PiBookOpenTextLight className='icon' />
                    <h2 className='my-1'>{books.title}</h2>
                </div>
                <div className='modal-book-details'>
                    <BiUserCircle className='icon' />
                    <h2 className='my-1'>{books.author}</h2>
                </div>
                <p className='genre-label'>Genre</p>
                <p className='genre'>
                    {books.genre}
                </p>
            </div>
        </div>
    )
}

export default BookModalCr