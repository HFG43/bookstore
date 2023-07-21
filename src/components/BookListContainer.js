import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookItem from './BookItem';
import { getBooks } from '../redux/books/bookSlice';

const BookListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const bookList = useSelector((state) => state.book);
  return (
    <>
      {bookList.books.map((book) => (
        <BookItem key={book.item_id} books={book} />
      ))}
    </>
  );
};
export default BookListContainer;
