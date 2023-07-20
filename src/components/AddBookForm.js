import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id: Date.now().toString(),
      category: 'Fiction',
      title: event.target.bookName.value,
      author: event.target.authorName.value,
    };
    dispatch(addBook(newBook));
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="bookName" placeholder="Book Title" required />
        <input type="text" placeholder="Author" id="authorName" required />
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
};
export default AddBookForm;
