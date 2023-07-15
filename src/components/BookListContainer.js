import BookItem from './BookItem';
import books from './Items';

const BookListContainer = () => (
  <>
    {books.map((book) => (
      <BookItem key={book.id} books={book} />
    ))}
  </>
);

export default BookListContainer;
