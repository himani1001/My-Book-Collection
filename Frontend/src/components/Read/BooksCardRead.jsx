import BookSingleCardRead from './BookSingleCardRead';
import '../TBR/bookscard.css'

const BooksCardRead = ({ books }) => {
  return (
    <div className="books-card-container">
        {books.map((item) => (
            <BookSingleCardRead key={item._id} books={item} />
        ))}
    </div>
  )
}

export default BooksCardRead