import BookSingleCardCr from './BookSingleCardCr';
import '../Style/bookscard.css'

const BooksCardCr = ({ books }) => {
  return (
    <div className="books-card-container">
        {books.map((item) => (
            <BookSingleCardCr key={item._id} books={item} />
        ))}
    </div>
  )
}

export default BooksCardCr