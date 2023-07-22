import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/bookSlice';
import styles from './AddBookForm.module.css';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      item_id: Date.now().toString(),
      category: 'Fiction',
      title: event.target.bookName.value,
      author: event.target.authorName.value,
    };
    dispatch(postBook(newBook));
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
  };

  return (
    <>
      <div className={styles.add_section_container}>
        <h2>ADD NEW BOOK</h2>
        <div className={styles.form_container}>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.form_book_title}
              type="text"
              id="bookName"
              placeholder="Book Title"
              required
            />
            <input className={styles.form_book_author} type="text" placeholder="Author" id="authorName" required />
            <button type="submit">ADD BOOK</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddBookForm;
