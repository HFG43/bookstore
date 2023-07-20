import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookListContainer = () => {
  const bookList = useSelector((state) => state.book);
  return (
    <>
      {bookList.books.map((book) => (
        <BookItem key={book.id} books={book} />
      ))}
    </>
  );
};
export default BookListContainer;
