import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import '../Style/bookstable.css';

const BookTableRead = ( { books } ) => {
  return (
    <div className='books-table-container'>
      <table className='books-table'>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th className='max-md:hidden'>Author</th>
            <th className='max-md:hidden'>Publish Year</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No books available</td>
            </tr>
          ) : (
            books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td className='max-md:hidden'>{book.author}</td>
                <td className='max-md:hidden'>{book.publishYear}</td>
                <td>
                  <div className='flex justify-center'>
                    <Link to={`/readBooks/read/${book._id}`}>
                      <BsInfoCircle className='icon' />
                    </Link>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default BookTableRead